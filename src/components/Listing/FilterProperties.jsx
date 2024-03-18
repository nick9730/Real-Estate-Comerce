// import {  useSearchParams } from 'react-router-dom'
import ListProperties from './ListProperties';





// const StyledSquare = styled.div `
//     width: 50%;
//     height: 100%;
//   display: flex;
//   flex-direction: row;
// margin-top: 20px;
// background-color: red;
// `

export default function FilterProperties({properties,filter}) {

  return (
    <ListProperties filter={filter} properties={properties}/>
  )
}
