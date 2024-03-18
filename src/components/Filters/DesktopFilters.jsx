import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'


const Content = styled.div`
width: 100%;
height: 100%;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`




export default function DesktopFilters({filter}) {


  return (
<Content>   
       <Filters type={'form'} kind={'two_buttons'}  filter= {filter}/>
 </Content>
  )
}
