import styled,{css} from 'styled-components'


const Span = styled.span`

${(props)=>
    props.type === 'regular' && css`
        font-size: 70px;
    `

}

${(props)=>
    props.type === 'contact' && css`
         height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  &:nth-child(2){
    height: 40px;
  }
    `

}

${(props)=>
    props.type === 'infos' && css`
         font-size: 14px;
             color: #80808063;

    `

}


${(props)=>
    props.type === 'contactModal' && css`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:nth-child(2){
  height: 40px;
}


    `

}


`




Span.defaultProps={
    type:'contact'
}

export default  Span;