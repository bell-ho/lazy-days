prefetchQuery : 데이터는 서버에서 오기 때문에 데이터를 가져오기 위해 서버로 이동하고 데이터는 캐시에 추가됩니다

setQueryData : useQuery를 실행하지 않고 쿼리 데이터를 캐시에 추가하는 또 다른 방법

placeholderData : useQuery를 실행할 때 데이터를 제공하기 때문에 클라이언트에서 데이터를 가져오고 캐시에는 추가되지 않습니다 placeholderData는 고정값 또는 함수를 사용할 수 있습니다 자리 표시자 데이터값을 동적으로 결정하는 함수를 사용하려는 경우 placeholderData를 사용하는 것이 가장 좋습니다 placeholderData는 자리 표시자가 필요한 경우에만 사용합니다 달리 표시할 데이터가 없는 경우 사용하는 표시용 데이터일 뿐이며 다시 사용할 일이 없기 때문에 캐시에 추가하지 않습니다

initialData : initialData는 placeholderData와 반대되는 것이다 이것 또한 useQuery에 대한 옵션이며 클라이언트에서 제공됩니다 하지만 placeholderData와 달리 캐시에 추가해야 하는 데이터입니다

keepPreviousData : 쿼리 키 변형 전까지 이전 데이터를 유지

select 옵션: ex) filter === 'all' ? undefined : selectFn // 쿼리로 반환된 data가 selectFn로 들어가고 필터링된 데이터를 반환함
