import styled from 'styled-components'

import Li from '../../ui/LI'

import { FaBath, FaBed } from 'react-icons/fa6'
import { FaTruckMonster } from 'react-icons/fa'


const Content= styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
`

const UL = styled.ul`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  

    @media (max-width:1300px){
width:35%
}
@media (max-width:700px){
width:100%
}

  
`
export default function ListInfos({properties}) {



  return (
    <Content>
    <p >{properties.GreekName}</p>

 <UL>
    <Li type='propertyHome'>
     <FaTruckMonster/>
     {properties.date}
     </Li>
   <Li type='propertyHome'>
     <FaBed/>
     {properties.bed}</Li>

   <Li  type='propertyHome'>
   <FaBath/>
     {properties.baths}</Li>
 </UL>
 </Content>
  )
}
