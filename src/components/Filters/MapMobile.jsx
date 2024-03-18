import React from 'react'
import styled from 'styled-components'



import { useModalContext } from '../context/ModalContext';
import MapGoogle from '../MapGoogle/MapGoogle';
import Button from '../../ui/Button';

const Content = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`


export default function MapMobile({sortedByItems}) {
 
    const {setMapModal} = useModalContext();

  return (
    <Content>
    <MapGoogle type='mobile' properties={sortedByItems}/>
    <Button 
    kind='openModal' 
    onClick={()=>setMapModal(false)}>
      View Listings
    </Button>


    </Content>
  )
}
