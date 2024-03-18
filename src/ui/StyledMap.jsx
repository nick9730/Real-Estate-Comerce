import styled,{css} from 'styled-components'



const StyledMap = styled.div`

${(props)=>

props.type==='regular' && css`
height: 50vh;
  width: 100%;
  @media (max-width:1100px){
    overflow: hidden;
  }
  `
  }

${(props)=>
props.type === 'mobile' && css`
  
  height: 100vh;
`
 
}

`

StyledMap.defaultProps={
  type:'regular'
}


export default StyledMap;