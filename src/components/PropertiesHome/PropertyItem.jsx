import React, { useState } from 'react'
import styled from 'styled-components'

import Caption from './Caption';
import HomeInfos from './HomeInfos';

import { useTranslation } from 'react-i18next';
import { useModalContext } from '../context/ModalContext';
import Li from '../../ui/LI';
import Button from '../../ui/Button';






const StyledDiv = styled.div`
width: 100%;

overflow: hidden;

`

const StyledInfos = styled.div`
width: 100%;
 height: 50%;
  display: flex;
  flex-direction: column;
align-items: flex-end;
justify-content: flex-end;


  `

const StyledInfoOfProperties = styled.div`
  width:100%;
  max-height: 70%;
  background-color: rgba(0, 0, 0, 0.5);
display:flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
transition: 2s;

`


const PositionButton = styled.div`
  width: 100%;
  height: 100%;
`



export default function PropertyItem({properties}) {

  const{width} = useModalContext()
  const {t} = useTranslation(['common','sale']);
  const [hover,setHover]=useState(false)
  const [ok,setOk] = useState(0)
 
  
  
  
if(width<=1200){
  if(!hover){
    setHover(true)
    setOk(1)
  }
}
else if(width>1250){
  if(hover && ok===1){
    setHover(false)
    setOk(0)
    
  }
}



if(!properties) return;



  return (

<Li type='propertyItem' style={{backgroundImage:`url(${properties.image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

  <StyledDiv>

    <StyledInfos>
      <PositionButton >
           <Button kind='propertyItem'>{t('sale')}</Button>
      </PositionButton>
    </StyledInfos>

    <StyledInfos>

 <StyledInfoOfProperties onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
 
<Caption properties={properties}/>

 {hover 
 ? <HomeInfos properties={properties}/>
 
 : ''
 }

 
 </StyledInfoOfProperties>

    </StyledInfos>

  </StyledDiv>
</Li>


   
  )
}
