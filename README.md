# lazydays - 스파시설 예약관리 프로그램

prefetchQuery : 데이터를 가져오기 위해 서버로 이동하고 가져온 데이터는 캐시에 추가<br>

setQueryData : useQuery를 실행하지 않고 쿼리 데이터를 캐시에 추가하는 또 다른 방법<br>

placeholderData : useQuery를 실행할 때 데이터를 제공하기 때문에 클라이언트에서 데이터를 가져오고<br>
캐시에는 추가 안함, placeholderData는 고정값 또는 함수를 사용<br>
자리 표시자 데이터값을 동적으로 결정하는 함수를 사용하려는 경우 placeholderData를 사용하는 것이 가장 좋음<br>
placeholderData는 자리 표시자가 필요한 경우에만 사용, 단지 표시용 데이터일 뿐이며 다시 사용할 일이 없기 때문에 캐시에 추가<br>

initialData : initialData는 placeholderData와 반대<br>
useQuery에 대한 옵션이고 클라이언트에서 제공, placeholderData와 달리 캐시에 추가해야 하는 데이터<br>

keepPreviousData : 쿼리 키 변형 전까지 이전 데이터를 유지
