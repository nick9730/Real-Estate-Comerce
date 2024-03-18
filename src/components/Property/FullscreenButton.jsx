import React from 'react'
import styled from 'styled-components'


import { useModalContext } from '../context/ModalContext';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Button from '../../ui/Button';




const Img= styled.img`

width: 100%;
transition:2s;
height: 80%;

@media (max-width: 800px)
{
 height: 100%;
}

`


export default function FullscreenButton() {
    const {indexArrow,Next,Prev,filterValue,setLen} =useModalContext(); 


  return (
    <>
    <Button
     kind='fullscreenLeft'  
     onClick={()=>(setLen(filterValue.length),Prev())}>
    <IoIosArrowDropleftCircle size={60}/>
     </Button>

     
     <Img  src={`${filterValue[indexArrow]?.image}`} alt='ffdsfa'/>

     <Button
      kind='fullscreenRight'  
      onClick={()=>(setLen(filterValue.length),Next())}>
        <IoIosArrowDroprightCircle  size={60} />
    </Button>
    </>
  )
}

