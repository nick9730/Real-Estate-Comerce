import React, { useState } from 'react'
import styled from 'styled-components'
import {motion,useMotionValue} from 'framer-motion'
import { useModalContext } from '../context/ModalContext'
const Img = styled(motion.img)`
    width: 100%;
    height: 80vh;

    @media (max-width: 800px){
 height: 40vh;

}
`


export default function CarouselItem({indexArrow,images}) {

  
  const dragX = useMotionValue(0)

  const [dragging,setDragging] = useState(false)
  const {Next,Prev,setLen} = useModalContext();
  if(!images) return



  
const onDragStart = ()=>{
  setDragging(true)
}
const onDragEnd=()=>{
  setDragging(false)
  const axisX= dragX.get()

  if(axisX<0){
    setLen(images?.length);
    Next();
  }
  else{
    setLen(images?.length);
    Prev();
  }
}
  
  return (
       
    <Img 
    onClick={()=>setLen(images?.length)}
        drag={'x'}
        dragConstraints={{
        left:dragX<0 ? 100 : 0,
        right:0
     }}

      style={{
        x:dragX
      }}
      src={`${images[indexArrow]?.image}`}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      />
 
  )   
}
