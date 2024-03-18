import React from 'react'
import styled from 'styled-components'
import H1 from '../../ui/H1';
import { useTranslation } from 'react-i18next';


const ImageContent = styled.div`

    width:100%;
    height:500px;
    background-position-y: 30%;
    zoom: 120%;
   filter: brightness(90%);
   display: flex;
   flex-direction:column ;
   justify-content: flex-end;
   align-items: flex-start;

${({active})=>
  active &&  `
   background-image:url(${active});
   background-repeat: no-repeat;
   background-size: cover;
  `
}

@media (max-width: 1200px){
  text-align:center;
  padding:20px;
}

`


export default function ImageContentRegion({region}) {

    const {t,i18n} = useTranslation([`${region[0]?.name}`,"name,density,summary,welcome,slogan"])

    
    return (
    <ImageContent active={region[0]?.image}>
        <H1 >
          { i18n.language==='en-US' || i18n.language==='en' ?  region[0]?.Englishname : t("name")}
          </H1>
        <h5>
        { i18n.language==='en-US' || i18n.language==='en' ?  region[0]?.slogan : t("slogan")}
          
    
        </h5>
      </ImageContent>
  )
}
