import styled,{css} from 'styled-components'


const H3 = styled.h3`

${(props)=>
    props.type === 'regular' && css`
        font-size: 70px;
    `

}
${(props)=>
    props.type === 'caption' && css`
        font-size: 20px;
    `

}
${(props)=>
    props.type === 'modal' && css`
        font-size: 70px;
    `

}

${(props)=>
  props.type==='contact' &&css`
    
    width: 100%;
  height: 50px;
  display: flex;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 60px;
justify-content: center;
align-items: center;
  `
}

${(props)=>
  props.type==='notfound' &&css`
    
    width: 70%;
  height: 100%;
  font-size: 30px;
  text-align: center;
  @media (max-width: 1200px){
  width: 90%;

    }

  `
}


`
H3.defaultProps={
    type:'regular'
}

export default  H3;