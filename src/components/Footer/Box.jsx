import styled from 'styled-components'
import H1 from '../../ui/H1'
import P from '../../ui/P'
import { useTranslation } from 'react-i18next'
import { useModalContext } from '../context/ModalContext'
import { NavLink } from 'react-router-dom'
import StyledNavLink from '../../ui/StyledNavLink'

const StyledBox = styled.div`
   width: 40%;
   height: 35%;
   background: #101214ca;
   position: absolute;
   z-index: 5;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   padding: 15px;
   border-radius: 20px;

   @media (max-width: 1200px){
    height: 40%;
    width: 90%;
   }

   @media (max-width: 800px){
    height: 50%;

   }
  
`


export default function Box(){

  const{t}=useTranslation('footer','boxsummary,work,contact')
  const {setContactModal} = useModalContext();


  return (
    <StyledBox>
    <H1 type= 'footer'>{t('work')}</H1>
    <P type='footer'>{t('boxsummary')}</P>
    <StyledNavLink type='box'
     to={'/contact'} 
    onClick={()=>
    (setContactModal(true),
    window.scrollTo(0,0))}> {t('contact')}
      </StyledNavLink>
    </StyledBox>
  )
}
