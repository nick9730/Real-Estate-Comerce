import React from 'react'
import styled from 'styled-components'
import H1 from '../ui/H1'
import H3 from '../ui/H3'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #AAA4CE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    z-index: 999;
    @media (max-width: 1200px){
        flex-direction: column-reverse;
    }
`

const Img=styled.img`
width: 50%;
height: 100%;

@media (max-width: 1200px){
    width: 100%;
height: 600px;
    }

`
const NotFound= styled.div`
 width: 30%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;

    @media (max-width: 1200px){
    width: 100%;
  height: 30%;

    }
`

const Button = styled(NavLink)`
 
 border: 0;
 background-color: #DA5C65;
 padding: 0.8rem 1.3rem;
 border-radius: 20px;
 &:hover{
    background-color: #ff4551;
 }

`

export default function NotPageFound() {

  const {t} =useTranslation(['common','notfound,back'])
  return (
    <Content>
  
     <NotFound>
    <H3
    type= 'notfound'
    >
        {t('notfound')}
    </H3>    

    <Button 
    to='/home'
    >
     {t('back')}
    </Button>

     </NotFound>
     
    <Img src='./images/47.jpg' alt='404' />

  
    </Content>
  )
}
