import React from 'react'
import Span from '../../ui/Span'
import styled from 'styled-components'
import H2 from '../../ui/H2'

const StyledInfo = styled.div`
width: 250px;
height: 200px;
 display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: center;
gap: 15px;

&:nth-child(2){
  width: 500px;
  border-right:1px solid #464646; 
  border-left: 1px solid #464646;
}

svg{
  font-size: 50px;
}

@media (max-width: 1200px){
  border-right: 0;
  &:nth-child(2){
border: 0;
}
}

`
export default function ContactInfosPage({title,icon,number_one,number_two,email}) {



  return (
    <StyledInfo >

    <H2 type='contact'>{title}</H2>

    <Span>
       {icon}
    </Span>
{email 
? <p>{email}</p>
: 
<>
<p> {number_one}</p>
<p> {number_two}</p>
 </>
}
   </StyledInfo>
  )
}
