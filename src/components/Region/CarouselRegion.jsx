import React, { useState } from 'react'
import styled from 'styled-components'
import { useGetImagesRegion } from './useGetImagesRegion';

const Carousel = styled.div`
width: 100%;
height: 96vh;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
border-radius: 20px;
margin: 0;
overflow: hidden;
padding: 20px;


@media (max-width: 1300px){
        width:100%;
      padding: 10px;
      height: 60vh;
   
    }
`
const Image = styled.img`
width:10%;
height: 80%;
border-radius: 20px;
overflow: hidden;
filter: blur(2px);
cursor: pointer;
transition: 2s;


${({active})=>
active  && `
width: 80%;
filter: blur(0px);

`
}
${({index})=>
index===0 && `
&:first-child{
  width: 80%;
filter: blur(0px);
}
`
}

@media (max-width: 1200px){
   height:100%;
     overflow-x: hidden;
    }

`


export default function CarouselRegion() {

  const {data:images} = useGetImagesRegion();
  const [index,setIndex] = useState(0);


  return (
    <Carousel>
    {images?.map((img,i)=>
        <Image 
        key={img?.id}
        onClick={()=>(setIndex(img?.id))}
        index={index}
        active = {img.id===index ? index : '' }
        src={img?.image} alt='CityImage' />
        )}
  </Carousel>
 
  )
}
