import React from 'react'
import styled from 'styled-components'
import { useModalContext } from '../context/ModalContext'
import { FaFilter } from 'react-icons/fa'
import ActiveFilters from './ActiveFilters'
import Pagination from '../../ui/Pagination'
import { useGetProperties } from '../Listing/useGetProperties'
import Button from '../../ui/Button'

const PositionButton = styled.div`
  min-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
align-items: center;
color: black;
  justify-content: center;
`


const FilterButtonPagination = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`


export default function ModalButtonFilter() {

  const {filterModal,setFilterModal,width} = useModalContext()
  const {count}= useGetProperties()

  return (
   
    <PositionButton>
      <FilterButtonPagination >

    <Button kind={'filter'} onClick={()=>setFilterModal(!filterModal)}>
      <FaFilter/>
        Filters
      </Button>
      {/* {width <800 &&  <Pagination count={count}/>}  */}
      </FilterButtonPagination>
  
         <ActiveFilters/>
    </PositionButton>
  )
}
