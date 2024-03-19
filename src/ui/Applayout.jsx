import styled from 'styled-components'
import {Outlet} from 'react-router-dom'
import {motion} from 'framer-motion'


import { useModalContext } from '../components/context/ModalContext';
import { useDetectWidth } from '../hooks/useDetectWidth';

import Sidebar from './Sidebar'
import Modal from '../components/NavBars/Mobile/MobileNavbar';
import Footer from '../components/Footer/Footer';
import Transition from './Transition';
import { useDetectHeight } from '../hooks/useDetectHeight';
import ScrollToTop from './ScrollToTop';
import { useGetProperties } from '../components/Listing/useGetProperties';
import { SpeedInsights } from "@vercel/speed-insights/react"

const Content = styled(motion.div)`   
  width: auto;
  height: 100%;
  display:flex;
  flex-direction: column; 
  overflow: hidden;
  gap: 10px;
`


export default function Applayout() {

  const {showModal,setWidth,filterModal,mapModal,height,setHeight} =useModalContext(); 
  const {isLoading} = useGetProperties()
   
   useDetectWidth(setWidth)
   useDetectHeight(setHeight)
  
 

    return (
    <>
    {!isLoading &&
      <Content>
        <ScrollToTop/>
         { showModal  && <Modal/>}
         { height &&    <Sidebar />  } 
         <Transition content={<Outlet/>} />
       
        <SpeedInsights />
      </Content>
      }


    </>
  )
}
