import styled,{css} from 'styled-components'




const P = styled.p`

${(props)=>

  
  props.type=== 'properties' && css`
        width:100%;
       
        text-align: justify;
        color: black;
        font-size: large;
        font-weight: 400;
  `


}

    
${(props)=>
  
  props.type=== 'agentname' && css`
        font-size: 21px;
        text-align: center;
        width: 100%;
  `
}

${(props)=>
  
  props.type=== 'whyus' && css`
      font-size: 20px;
      font-weight: bold;
      color:black;
    
  `
}

${(props)=>
  
  props.type=== 'direction' && css`
      font-size: 15px;
      font-weight: bold;
    color: white;
    width: 260px;
    text-align: center;
  `
}

${(props)=>
  
  props.type=== 'label' && css`
      font-size: 15px;
      color: #4d4d4d;
    
  `
}
${(props)=>
  
  props.type=== 'footer' && css`
      
   text-align:justify;
   width:100%
   font-size: 20px; 
   color: white;
   font-weight: 400;

        
       
    
  `
}


${(props)=>
  
  props.type==='services' && css`
  height: 200px;
  width: 100%;
  text-align: justify;
  color: black;
  font-size: large;
  font-weight: 400;
    
  `
}

${(props)=>
  
  props.type=== 'caption' && css`
  letter-spacing: 2px;
  font-size: 50px;
  
  @media (max-width: 1200px){ 
    font-size: 20px;
}
  `
}

${(props)=>
  
  props.type=== 'pagination' && css`
     
    font-size: medium;
    color: black;
    text-align: center;
    
    @media (max-width:600px){
      width: 100%;
      font-size: small;
    }
   
`}



`




P.defaultProps= {
    type:'properties'
}


export default P