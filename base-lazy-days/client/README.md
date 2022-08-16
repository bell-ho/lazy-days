prefetchQuery : 데이터는 서버에서 오기 때문에 데이터를 가져오기 위해 서버로 이동하고 데이터는 캐시에 추가됩니다

setQueryData : useQuery를 실행하지 않고 쿼리 데이터를 캐시에 추가하는 또 다른 방법

placeholderData : useQuery를 실행할 때 데이터를 제공하기 때문에 클라이언트에서 데이터를 가져오고 캐시에는 추가되지 않습니다 placeholderData는 고정값 또는 함수를 사용할 수 있습니다 자리 표시자 데이터값을 동적으로 결정하는 함수를 사용하려는 경우 placeholderData를 사용하는 것이 가장 좋습니다 placeholderData는 자리 표시자가 필요한 경우에만 사용합니다 달리 표시할 데이터가 없는 경우 사용하는 표시용 데이터일 뿐이며 다시 사용할 일이 없기 때문에 캐시에 추가하지 않습니다

initialData : initialData는 placeholderData와 반대되는 것이다 이것 또한 useQuery에 대한 옵션이며 클라이언트에서 제공됩니다 하지만 placeholderData와 달리 캐시에 추가해야 하는 데이터입니다

keepPreviousData : 쿼리 키 변형 전까지 이전 데이터를 유지

select 옵션: ex) filter === 'all' ? undefined : selectFn // 쿼리로 반환된 data가 selectFn로 들어가고 필터링된 데이터를 반환함

리페칭을 제한 하는 방법 : stale 시간을 증가 시키거나 refetchOnMount refetchOnWindowFocus refetchOnReconnect의 옵션중 하나 혹은 전체를 끄면됨,
리페칭을 제한 할 때는 신중해야 하며 변동이 잦지 않은 데이터에 적용해함

stale 다시가져오는 조건 : 새로운 쿼리 인스턴스가 많아질때, 쿼리 키가 처음 호출될 때, 쿼리를 호출하는 반응 컴포넌트의 증가, 창을 재포커싱,
만료된 데이터의 업데이트 여부를 확인할 수 있는 네트워크가 다시 연결된 경우

staleTime : 기본값 캐싱 타임이 5분, 만료 타임이 캐싱 타임을 초과한다는 건 말이 안 됨
만료된 데이터를 불러오는 동안 캐싱에 백업된 내용이 보여질 것임 
그러니 만료된 데이터보다 캐싱이 먼저 만료된다는 것은
리페칭을 실행시키는 동안 보여 줄 화면이 없다는 것 그러니 캐싱 타임도 증가해야함

refetchOnWindowFocus : true로 설정하면 데이터가 오래된 경우 쿼리가 창 포커스에서 다시 가져옵니다. false로 설정하면 쿼리가 창 포커스에서 다시 가져오지 않습니다. 'always'로 설정하면 쿼리는 항상 창 포커스에서 다시 가져옵니다. 함수로 설정하면 최신 데이터로 함수가 실행되고 값을 계산하는 쿼리가 실행됩니다. 기본값은 true입니다.

refetchOnReconnect : refetchOnWindowFocus 비슷
