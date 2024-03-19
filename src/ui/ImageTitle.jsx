import React from 'react'
import styled from 'styled-components'

import H1 from '../ui/H1';



const StyledImage = styled.div`

width: 100%;
height:60vh;

${({image}) =>

 image && `
  
background-image: url(../public/images/${image});

 `
}
background-repeat: no-repeat;
background-size: cover;
background-position:center;
filter: brightness(60%);
display: flex;
justify-content: flex-start;
align-items: flex-end;
z-index: 2;
`
export default function ImageTitle({children,image}) {
  return (

    <StyledImage image={image}>
    <H1>
      {children}
    </H1>
  </StyledImage>
  )
}
