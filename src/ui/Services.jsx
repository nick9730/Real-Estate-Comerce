import React from 'react'
import styled from 'styled-components'
import { BiSolidLandscape } from "react-icons/bi";
import { FaHome, FaLandmark } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Service from './Service';

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     background-color:#f1f1f1;
     font-weight: 900;
     color: #464646;

    
`

const Title = styled.section`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;


`
const ServiceContent = styled.section`
   width: 100%;
   height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 24px;
      gap: 50px;
      @media (max-width: 1300px){
        height: 100%;
     
      }
`


export default function Services() {

const {t} =useTranslation('services',"title1,title2,caption1,caption2,caption3,para1,para2,para3")

  return (
    <Content>
    
        <Title>
            <h3 style={{textAlign:'center'}}>{t('title1')}</h3>
            <h2 style={{textAlign:'center'}}>{t('title2')}</h2>
        </Title>

        <ServiceContent>
        <Service caption={t('caption1')} paragraph={t('para1')} icon= {<BiSolidLandscape size={80}/>}    delay={0}/>
        <Service caption={t('caption2')} paragraph={t('para2')} icon={<FaHome size={80}/>}  delay={1}/>
        <Service caption={t('caption3')} paragraph={t('para3')} icon={ <FaLandmark size={80}/> } delay={2}/>
        </ServiceContent>

    </Content>
  )
}
