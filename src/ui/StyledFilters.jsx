import styled,{css}from 'styled-components'

const StyledFilters = styled.div`

${(props)=>
props.type==='regular' && css`
  height: 100px;
  width: 100%;
  display: flex;
  gap: 20px;
`
}

${(props)=>
props.type==='modal' && css`
  height: 100%;
  width: 100%;
  display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`
}

${(props)=>
props.type==='two_buttons' && css`
width: 100%;
display: flex;
gap: 20px;
justify-content: space-between;
`
}


`
StyledFilters.defaultProps={
    type: 'regular'
}

export default StyledFilters