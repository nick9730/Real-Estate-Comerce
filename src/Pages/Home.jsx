
import styled from 'styled-components'
import ListRegion from '../components/Region/ListRegion';
import Footer from '../components/Footer/Footer';
import Services from '../ui/Services';
import H1 from '../ui/H1';
import Header from '../components/Home/Header';
import PropertyListHomePage from '../components/Home/PropertyListHomePage';
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion'
import { useModalContext } from '../components/context/ModalContext';
import { useDetectHeight } from '../hooks/useDetectHeight';










const Content = styled(motion.div)`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

` 




// const Overlay = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   background-color: #4747478b;
//   top:0 ;

// `
// const Available = styled.section`
// height: 100%;
// width: 100%;
// background-color: red; 
// margin-top: 300px;
// `






const Home=()=>{

const {height,setHeight} =useModalContext(); 
const {t} =useTranslation(['common','titleRegion'])


return (
   <Content>
         <Header/>    
         <PropertyListHomePage />
         <Services/>
         <H1 type='regions'>{t('titleRegion')}</H1>
         <ListRegion/>
  </Content>
         

  )}

  export default Home;
