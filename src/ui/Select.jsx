import React, { memo } from 'react'
import styled ,{css} from 'styled-components'
import StyledOption from './Option'

const StyledSelect = styled.select`



${(props) =>
    props.type === "form" &&
    css`
 
    width:100%;
    height: 50px;
    color:  #848484;
    font-weight: 800;
    border: 0;
    border-bottom: 1px solid #E7E7E7 ;

    
    ${({number})=>
     number!=='' && number!=='default' && css`
      color:black;
     `
     }

      
    &:hover,
    &:visited,
    &:focus{
      border-bottom: 1px solid black;
      color: black;
   }
   
    &:focus{
      outline:0 ;
    }

    `}

  

    ${(props) =>
    props.type === "modal" &&
    css`
    width:100%;
    height: 50px;
    color:  #848484;
    font-weight: 800;
     border: 0;
     border-bottom: 1px solid #E7E7E7 ;

     ${({number})=>
     number && number!=='default' && css`
      color:black;
     `
     }
     
      &:focus{
       outline:0;
      }
      &:hover,
      &:visited,
      &:focus{
        border-bottom: 1px solid black;
        color: black;
      }
    
     
    `}


    ${(props)=>

     props.type==='main_search'&& css`

    width:250px;
    height: 50px;
    color:  #848484;
    font-weight: 800;
    border: 0;
    border-bottom: 1px solid #E7E7E7 ;
    &:focus{
       outline:0 ;
      } 
    &:hover,
    &:visited,
    &:focus{
        border-bottom: 1px solid black;
        color: black;
    }
    
    
`
}

${(props)=>

props.type==='translator'&& css`

     background-color: transparent;
     width: 50px;
     min-height: 60px;
     border: 0;
     text-align: center;
     
     &:hover{
      text-decoration: underline;
     }
     &:focus{
      outline: 0;
     }
`
}

`
StyledSelect.defaultProps= {
  type: "translator",
}


const  Select = ({options,handler,valuee,type,style}) =>{


            


  return (
    <StyledSelect style={style} number={valuee}  type={type} value={valuee}  onChange={handler} >
{options.map((option)=>(
    <StyledOption key={option?.value} value={option?.value}>
        {option.label}
    </StyledOption>
))}
    </StyledSelect>

  )

}


export default memo(Select)
