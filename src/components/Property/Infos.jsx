import styled from 'styled-components'

import Li from '../../ui/LI'
import { FaBath, FaBed, FaSquareFull, FaTruckMonster } from 'react-icons/fa'
import useGetOneProperty from '../Listing/useGetOneProperty'
import { BsFillHousesFill } from "react-icons/bs";
import P from '../../ui/P'
import useTakeValue from '../../hooks/useTakeValue';
import { useTranslation } from 'react-i18next';

const ListInfosParagraph =styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid #E7E7E7;
  border-bottom: 1px solid #E7E7E7;
  

 
`


const StyledUl = styled.ul`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;



 
  @media (max-width: 1200px){
    width: 100%;
  }
`

export default function Infos() {

  const {data} = useGetOneProperty();
  const  {t,i18n} = useTranslation(['property','bed','bath','sqtf','map','title'])
  const {translation} = useTakeValue(data[0]?.type)
   

  if(!data)return

  


  return (
    <ListInfosParagraph>
  
    <StyledUl>
    <Li type='property'>
      <FaBed/>
      {data[0]?.bed} {t('bed')}
    </Li>
    <Li type='property'>
      <FaBath/>
      {data[0]?.baths} {t('bath')}
      </Li>
    <Li type='property'>
      <FaSquareFull/>
      {data[0]?.area} {t('sqtf')}
    </Li >

    <Li type='property'>
       <BsFillHousesFill/>
      {translation} 
       
    </Li>

    <Li type='property'>
      <FaTruckMonster/>
      {data[0]?.date} 
    </Li>

    </StyledUl>
   
 <div style={{padding: '10px'}}>
    <P>
      {i18n.language==='gr' ? data[0]?.summary : data[0]?.english_summary}
    </P>
 </div>
  

  </ListInfosParagraph>
  )
}
