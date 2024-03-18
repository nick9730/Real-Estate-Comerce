import styled from 'styled-components'

import { useModalContext } from '../context/ModalContext'

import Filters from './Filters'
import Button from '../../ui/Button';


const Content = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;  
overflow-y: scroll;
overflow-x: hidden;
gap: 20px;
padding: 80px;

`



export default function FiltersMobile({filter}) {

 const {setFilterModal} = useModalContext();

    function Close()
    {
        setFilterModal(false);
    }
        
  return (
  <Content>
   <Filters filter={filter} kind={'modal'}  type={'modal'}/> 
   <Button kind='close' onClick={Close}>Filter</Button>
  </Content>
  )
}
