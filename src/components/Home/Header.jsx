

import styled from 'styled-components'
import H1 from '../../ui/H1'
import H2 from '../../ui/H2'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import MotionText from '../../ui/MotionText'
import MotionTextTest from '../../ui/MotionTextTest'
import StyledNavLink from '../../ui/StyledNavLink'


const Content = styled.header`
height: 100vh;
width: 100%;
border: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Video = styled.video`
width:100%;
height: 100%;
border: 0px;
object-fit: cover;

`




const TextTitle = styled.div`
    
    width: 70%;
    height:50%;
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    position: absolute;
    color: white;

`
export default function Header() {


  const {t,i18n}=useTranslation(["home","caption,smallcaption,button"]);


  return (
      
<Content>
    
        <Video  src={'./home.mp4'} loop autoPlay muted />

    <TextTitle >

         <H1 type={'home'}>
          {
            i18n.language==='en-US'  || i18n.language==='en' 
            ? <MotionText/>
            : <MotionTextTest/>
            }
     
  
         </H1>

         <H2  type={'home'}>
           {t('smallcaption')}
         </H2>
          
           <StyledNavLink 
           type='headerHome'
            to={'/properties'}>{t('button')}
            </StyledNavLink>
    
    </TextTitle>

</Content>
  )
}
