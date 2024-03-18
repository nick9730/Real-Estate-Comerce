import styled from 'styled-components'

import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom'

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { PAGE_SIZE } from '../components/Helpers/constants';
import P from './P'
import Button from './Button';
import { useTranslation } from 'react-i18next';




const StyledPagination = styled.div`
width: 60%;
height: 100%;
transition: 2s;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #C4C4C4;


@media(max-width: 600px){
justify-content: center;

  width: 100%;
}
`

const ShowResults= styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: space-between;
gap: 4px;
padding: 10px;

@media(max-width: 600px){
justify-content: center;
align-items: center;
  width: 70%;
}
@media(max-width: 400px){
justify-content: center;
align-items: center;
  width: 100%;
}


`

const PositionButton = styled.div`
  width: 45%;
  display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
gap: 10px;
@media(max-width: 600px){
  width: 70%;
}
`

export default function Pagination({count}) {

    const [searchParams,setSearchParams] = useSearchParams()
    const {t}= useTranslation(['common','showing','results','to','of'])

    const pageCount = Math.ceil(count/PAGE_SIZE);
    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
   
    function nextPage(){
        const next =page===pageCount  ? page : page+1;
        searchParams.set('page',next);
        setSearchParams(searchParams)
        window.scrollTo(0,100);

    }
    function prevPage(){
        const prev = page === 1 ? page : page-1
        searchParams.set('page',prev);
        setSearchParams(searchParams)
        window.scrollTo(0,800);

    }
   
    useMemo(
        ()=>{
            if(pageCount<=2) 
            {
             searchParams.set('page',1)   
             setSearchParams(searchParams)
        }
          
        },[searchParams,setSearchParams]
    )
   
    if(count===0) return <p>No Pagination</p>
    
  return (
    <StyledPagination>
    <ShowResults>
        <P
         type='pagination'>
          {t('showing')} {""} 
         <span>{(page-1)*PAGE_SIZE+1}</span> {""} 
         {t('to')} {""} 
         <span>{page===pageCount ? count : page * PAGE_SIZE} {""} </span> 
         {t('of')}  {""} 
         <span>{count}</span>
         {""}   {t('results')}
          </P>


{pageCount<=2 ||

<PositionButton>
        <Button 
        kind='pagination' 
        disabled={page===1} 
        onClick={prevPage}>
        <HiChevronLeft/> 
        Previous
        </Button>

         <Button 
         kind='pagination'
         disabled={page===pageCount} 
         onClick={ nextPage}>
         Next 
         <HiChevronRight/>
        </Button>
</PositionButton>
}

</ShowResults>
    </StyledPagination>
  )
}
