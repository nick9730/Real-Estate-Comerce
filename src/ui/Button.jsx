import styled,{css} from 'styled-components'


const Button = styled.button`

${(props)=>
   props.kind === 'form' && css`
       
 border: 1px solid #464646;
 border-radius:  50px solid;
 background-color: var(--color-grey-0);
 border-radius: var(--border-radius-sm);
 padding: 0.8rem 1.2rem;
 width:240px;
 background-color: #e6e6e6;
 transition: 1s;

&:hover{
  filter: blur(1px);
}
`
}
    
${(props)=>
   props.kind === 'form' && css`
       
 border: 1px solid #464646;
 border-radius:  50px solid;
 background-color: var(--color-grey-0);
 border-radius: var(--border-radius-sm);
 padding: 0.8rem 1.2rem;
 width:240px;
 background-color: #e6e6e6;
 transition: 1s;

&:hover{
  filter: blur(1px);
}
`
}

${(props)=>
props.kind === 'carouselright' && css`
       
background-color: transparent;
border: 0;
width: 60px;
font-size: 20px;
position: absolute;
z-index: 7;
right: 90px;
`}

${(props)=>
props.kind === 'carouselleft' && css`
background-color: transparent;
border: 0;
width: 60px;
font-size: 20px;
position: absolute;
z-index: 7;
left: 90px;
color: #BAB4AB;
`
}

${(props)=>
props.kind === 'fullscreen' && css`
position: absolute;
background-color: transparent;
z-index: 7;
left: 30px;
top: 70%;
font-size: 50px;
border: 0;
color: black;
svg{
  color: black;
}

@media (max-width: 800px){
  top: 30%;
}
`
}


${(props)=>

props.kind === 'close' && css`
position: absolute;
bottom: 19px;
width:90%;
height: 60px;
color: black;
border-radius: 20px;
&:hover{
  background-color: wheat;
}

`}

${(props)=>

props.kind === 'openModal' && css`
  position: fixed;
  width: 30%;
  bottom: 2px;
  z-index: 999;
  background-color: black;
  border-radius: 10px;
  border: 0;
  padding: 10px;
`}
${(props)=>

props.kind === 'filter' && css`
 width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: transparent;
  border: 1px solid silver;
  font-weight: 900;
  border-radius: 20px;
  svg{
 color: wheat;
  }
&:focus{
  outline: 0;
}
&:hover{
  background-color: silver;
}
`}


${(props)=>

props.kind === "open" && css`
background-color: transparent;
border-color: transparent;
margin-right: 10px;
z-index: 999;

`}

${(props)=>
props.kind === "MobileClose" && css`
background-color: transparent;
border-color: transparent;
margin-right: 10px;
position: absolute;
top: 0;
right: 2px;
z-index: 999;

`}

${(props)=>

props.kind === "propertyItem" && css`
border-radius:3px;
padding: 9px 15px;
color: black;
margin: 4px;
background-color: rgba(255, 255, 255, 0.548);
border: 0;

&:focus{
  outline: 0;
}

`}
${(props)=>

props.kind === "closeFullscreen" && css`
background-color: transparent;
border: 0;
width: 40px;
font-size: 60px;
color: black;
position: absolute;
z-index: 7;
top: 0;
right:90px;
color: white;

@media (max-width: 1200px){
    right: 40px;
}




`}


${(props)=>

  
props.kind === 'fullscreenLeft' && css`
background-color: transparent;
border: 0;

width: 60px;
font-size: 60px;

position: absolute;
z-index: 10;
left: 100px;



`
}


${(props)=>
props.kind==='fullscreenRight' && css`

background-color: transparent;
border: 0;
width: 60px;
font-size: 60px;
color: black;
position: absolute;
z-index: 7;
right: 100px;

svg{
color: #ffffff57;
transition: 1s;

@media (max-width: 900px){
  display:none;
}

&:hover
{
color: #ffffff73;
}

}

@media (max-width: 900px){
   width: 50%;
   height: 50%;
   right: 0;
  }
  `
}



${(props)=>
props.kind==='itemsRegion' && css`
  border: 0;
  background-color: transparent;
  font-size: 20px;
  &:hover{
    text-decoration: underline;
    color: wheat;
  }
  `
}


${(props)=>

props.kind === "pagination" && css`
  background-color: transparent;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
 width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 1rem;
  color: black;

  svg{
    color: black;
    width: 2rem;
    height: 2rem;

  }
  &:hover{
    background-color: gray;
  }
  
  &:disabled{
    background-color: gray;
    
  }

  @media (max-width:600px){
      min-width: 50px;
      font-size: 1rem;
    }

  


`}


`
Button.defaultProps={
    kind:'home'
}



export default Button;

