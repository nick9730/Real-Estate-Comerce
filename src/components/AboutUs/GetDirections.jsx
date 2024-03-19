import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import P from '../../ui/P'
import { useTranslation } from 'react-i18next'
import StyledNavLink from '../../ui/StyledNavLink'

const Content = styled.div`
     width: 55%;
     height: 40vh;

     display: flex;
     flex-direction: row;
     
 
     @media (max-width: 1600px){
      
      width:80%;
      
      height: 100vh;

    
   }
   @media (max-width: 1200px){
        flex-direction: column;
        justify-content:   flex-start;
        align-items: center;
        width:100%;
        height: 100%;
     }    
`
const Img = styled.img`
    width: 50%;
    @media (max-width: 1200px){
  
        width:100%;

    
     }
  
`

const Direction= styled.div`
    width: 50%;

    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px){
  
  width:100%;
  padding: 20px;


}
`


export default function GetDirections() {

  const {t} = useTranslation(['aboutus','visitus,get,address'])

  return (
    <Content>
        <Img src='./aboutus1.jpg' alt='aboutus2' />
       <Direction>
        <p>{t('visitus')}</p>
        <P type='direction'>{t('address')}</P>

        <StyledNavLink type={'getdirection'} to={'https://www.google.com/maps/place/Real+Estate+Ouranoupoli/@40.3265819,23.9781215,17z/data=!3m1!4b1!4m6!3m5!1s0x14a8c85cd9bdfdc7:0xb66808bf0b5084c7!8m2!3d40.3265819!4d23.9806964!16s%2Fg%2F11bz0bgqrj?entry=ttu'}>
        {t('get')}
        </StyledNavLink>

       </Direction>

    </Content>

    
  )
}
