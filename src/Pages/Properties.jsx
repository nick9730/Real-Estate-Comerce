import React, { useCallback }   from 'react'

import styled from 'styled-components'

import { useGetProperties } from '../components/Listing/useGetProperties'





import { useSearchParams } from 'react-router-dom'
import useSortBy from '../hooks/useSortBy'
import useFilter from '../hooks/useFilter'

import ListingContent from '../components/Listing/ListingContent'
import FiltersMobile from '../components/Filters/FiltersMobile'
import MapMobile from '../components/Filters/MapMobile'
import { useModalContext } from '../components/context/ModalContext'
import {motion} from 'framer-motion'
import usePagination from '../hooks/usePagination'
import Pagination from '../ui/Pagination'


const Content= styled(motion.div)`

display: flex;
flex-direction: column;  
 width: 100%;
 height: 100%;
 justify-content: center;

`

const Wrapper = styled(motion.div)`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
 
`
const PositionPagination = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`



export default function Properties() {

  const [searchParams,setSearchParams]=useSearchParams();
  const {data,count} = useGetProperties();
  const {filtered} = useFilter(data)
  const {sortedByItems} = useSortBy(filtered)
  const {paginated} = usePagination(sortedByItems,sortedByItems?.length) 
  const {mapModal,filterModal} = useModalContext();
 

  
const FilterTheItems = useCallback(

  (e,handler,type)=>
{ 
  
  handler(e.target.value )
  searchParams.set(`${type}`,e.target.value);
  setSearchParams(searchParams) 

},[searchParams,setSearchParams]

)


 
return (
<>
<Content>
 {mapModal  
 
 ?  <MapMobile sortedByItems={paginated}/>
  
 
 : <>
{filterModal 

?  <Wrapper>
  

  <FiltersMobile filter={FilterTheItems}/>
  </Wrapper>
: 
<Wrapper>

<ListingContent FilterTheItems={FilterTheItems}  sortedByItems={paginated}/>
<PositionPagination>

<Pagination  count={sortedByItems?.length}/>
</PositionPagination>
</Wrapper>
} 
</>
}
</Content>
</>



  )
}
