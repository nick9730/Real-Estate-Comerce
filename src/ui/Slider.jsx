import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  

  
const WrapperPhotos = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
gap:7px;
overflow: visible;
margin-top: 200px;

@media (max-width: 750px){
align-items: center;
justify-content: center;
  height: 700px;
  width: 90%;
  margin-left: 20px;
  overflow: visible;
}


`

const CityImage = styled.img`

height: 500px;
width: 40%;
border-radius: 20px;
z-index: 3;

@media (max-width: 800px){
width: 800px;
width: 70%;
margin-left: 20px;


}
@media (max-width: 1250px){
width: 800px;
width: 80%;


}
` 

const Images = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
 
`

const Thumbnail = styled.img`
height: 60%;
width: 200px;
margin-right: 10px;
border-radius: 20px;
filter: blur(1px);



&:nth-child(6){
  display: none;
}


@media (max-width: 750px) {
  display: none;
  
}

@media (max-width: 1350px) {
  &:nth-child(1){
    display: none;
  }
  
}



`
const WrapperCityImage = styled.div`

height: 500px;
width:500px;
display:flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
gap: 10px;  
margin-left: 10px;



`
const WrapperButton = styled.div`
width:30%;
display: flex;
flex-direction: row;
justify-content: space-around;

z-index:10;


@media (min-width:1430px){

  width:40%
}


@media (max-width:1429px){

  width:84%;
  justify-content: center;

}


@media (max-width: 790px) {

  width:100%;
  justify-content:center;
  margin-right:50px;
}

@media (max-width: 600px) {
  flex-direction: row;
justify-content:center;
  width:100%;
  margin-left: 40px;
}

@media (min-width: 2000px){
  width: 50%;
}



`
const Button = styled.button`
 background-color: transparent;
outline: 0;
 width: 5rem;
 height: 4rem;
border-radius:4px;
border: 0;
color: wheat;

&:hover{
  background-color: #37608b;

}
&svg{
  color: black;
}

&:nth-child(2){
}
`

export default function Slider() {

    const [index,setIndex] = useState(0)

    const NextButton = ()=>{
      if(index===images.length-1  ){
       setIndex(0)

      }
      else{
        setIndex(index+1)
       
      } 
    }

    
    const PreviousButton = ()=>{
      if(index===0){
      setIndex(2)
      }
      else{
        setIndex(index-1)

    
      }


    }
    

  return (
    <WrapperPhotos>
<Images>
      <CityImage src={images[index].original}/> 
      <WrapperCityImage>
       {images.map((_,i)=> i===index ? ''  : <Thumbnail src={images[i].original}/>)}
      {/* <Thumbnail src={images[secondIndex].original} />
  */}

     
    </WrapperCityImage>
</Images>
<WrapperButton>
<Button onClick={PreviousButton}><IoIosArrowDropleft size={'40px'} /></Button>
<Button onClick={NextButton}><IoIosArrowDropright size={'40px'} /></Button>
</WrapperButton>
  </WrapperPhotos>
  )
}
