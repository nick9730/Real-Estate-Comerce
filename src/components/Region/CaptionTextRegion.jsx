import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ListInfosRegion from './ListInfosRegion'
import TextExpander from '../../ui/TextExpander'
import { Trans, useTranslation } from 'react-i18next'
import P from '../../ui/P'
import H2 from '../../ui/H2'


const InfoContent =styled.div`
    width: 86%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding:50px;
    gap: 40px;
    color: black;
    
    @media (max-width: 1300px){
      width:100%;
      padding:10px;

      
      }
`

const StyledCenterText = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 40px;

`


export default function CaptionTextRegion({region}) {
  
  const{t:region_common,} = useTranslation(['region',"density,population,age,people,median"])
  const {t,i18n} = useTranslation([`${region[0]?.name}`,"name,density,summary,welcome,text"])
  const [numberWord,setNumberWords] = useState()
  
  
  useEffect(
    function(){
      setNumberWords(i18n.language==='en-US'  ||  i18n.language==='en' ? region[0]?.text : t('summary'))
    },[i18n.language,region,t]
    )
    
  


  return (
    <InfoContent>
    <H2 type='caption'>
      {i18n.language==='en' ?
     ` Welcome to ${region[0]?.Englishname}` :
      t('welcome')
}
      </H2>
  
  
     <StyledCenterText>

 <ListInfosRegion region={region}/>
 
      <P type='properties'>
      {numberWord}
      </P>
    </StyledCenterText>



  </InfoContent>
  )
}
