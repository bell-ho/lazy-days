// @ts-nocheck
import jsonpatch from 'fast-json-patch';
import { useMutation, useQueryClient } from 'react-query';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

export function usePatchUser(): (newData: User | null) => void {
  const { user, updateUser } = useUser();
  const queryClient = useQueryClient();
  const toast = useCustomToast();

  const { mutate: patchUser } = useMutation(
    (newUserData) => patchUserOnServer(newUserData, user),
    {
      onMutate: async (newData) => {
        // 첫 번째로 필요한 것은 사용자 데이터를 대상으로 하는 발신쿼리는 모두 취소합니다
        queryClient.cancelQueries(queryKeys.user);
        // 이제 기존 사용자 값의 스냅샷을 찍고
        const previousUserData = queryClient.getQueryData(queryKeys.user);
        // 새로운 값으로 캐시를 낙관적 업데이트 하고이후
        updateUser(newData);
        // 해당 콘텍스트를 반환
        return { previousUserData };
      },
      onError: (error, newData, context) => {
        // 오류가 있는 경우 저장된 값으로 캐시를 롤백
        if (context.previousUserData) {
          updateUser(context.previousUserData);
          toast({ title: '사용자 수정 에러', status: 'warning' });
        }
      },
      onSuccess: (userData) => {
        if (user) {
          toast({ title: '사용자 수정', status: 'success' });
        }
      },
      onSettled: () => {
        // onSettled는 변이를 resolve했을 때 성공 여부와 관계 없이 onSettled 콜백을 실행하는 것입니다
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}
