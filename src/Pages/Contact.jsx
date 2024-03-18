import React from 'react'
import styled from 'styled-components'

import { HiOutlineMailOpen } from "react-icons/hi";
import { FaMobile, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import MapIframe from '../ui/MapIframe';

import ContactInfosPage from '../components/Contact/ContactInfosPage';
import H3 from '../ui/H3';

import FormContact from '../ui/FormContact';
import { useTranslation } from 'react-i18next';
import ImageTitle from '../ui/ImageTitle';
import {motion} from 'framer-motion'






const Content = styled(motion.div)`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
` 



const InfoContent = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F1F1F1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
color: #464646 ;


`



const Wrapper= styled.div`
  width: 70%;
  display: flex;
flex-wrap: wrap;
justify-content: space-around;
  
`


export default function Contact() {

const {t} = useTranslation(['contact'])

return (
  
  <Content>
          <ImageTitle image={'image3.jpg'} >
           {t('title')}
          </ImageTitle>
     

        <InfoContent >
          <H3 type='contact'> {t('title2')}</H3>
           <Wrapper>
                <ContactInfosPage
                 title= {t('caption1')}
                 icon={<FaMobile/>}
                 number_one={`+30 69477 97433`}
                 number_two={` +30 23770 71604​`}
                />
              <ContactInfosPage
                 title='EMAIL'
                 icon={<HiOutlineMailOpen/>}
                 email={'ouranoupolirealestate@gmail.com'}
                />
               <ContactInfosPage
                  title={t('caption2')}
                  icon={<FaLocationDot/>}
                  email={t('para1')}
                />
              </Wrapper>

               <FormContact/>
               
         </InfoContent>

       <MapIframe  height={'500px'}/>
   
    </Content>

  )
}
