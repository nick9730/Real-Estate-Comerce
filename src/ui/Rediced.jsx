
import styled from 'styled-components'
import { useModalContext } from '../components/context/ModalContext'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'


const Main = styled(motion.main)`
height: 100%;
width: 100%;
background-color: black;
z-index: 999;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

`
const Img = styled.img`

`
export default function Rediced() {
  const [redicred,setRedicred] = useState(true)


  useEffect(
    ()=>{
      setInterval(
        ()=>{
          setRedicred(false)
         
        },(3000)
      )
    }
  )
  
  


   


    
return(
 
    <Main 
    initial={{y:0}}
    animate={{y:-3000}}
    transition={{duration: 7, delay:1}}    >
    <Img src='../images/lol.png' alt='sad'/>
    </Main>
     
)}
