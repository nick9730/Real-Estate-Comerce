import React, {useState} from 'react'
import styled from 'styled-components'

import {Map} from "@vis.gl/react-google-maps";
import {motion} from "framer-motion"


import { useTranslation } from 'react-i18next';
import StyledMap from '../../ui/StyledMap';
import { useModalContext } from '../context/ModalContext';
import { RealEState } from '../context/Context';
import InfosWindowsGoogle from './InfosWindowsGoogle';
import AdvancedMarkerItem from './AdvancedMarkerItem';
import NotResultsFound from '../../ui/NotResultsFound';
import Button from '../../ui/Button';



const Content = styled(motion.div)`
    width: 60%;
    height: 100%;
    transition: 2s;
    z-index: 999;
    @media (max-width: 1200px){
    width: 100%;
    height: 70%;
    }

`




export default function MapGoogle({properties,type}) {

   const [open, setOpen] = useState(false);
   const {t} =useTranslation(['common','map,listing']);
   const {mapModal,setMapModal,width} =useModalContext();
   const {setIndex,index} =RealEState();

     if(!properties) return;

  return (  	
<>
{properties.length===0 ? <NotResultsFound map={'map'}/> : '' }
{ 
width<900 && !mapModal 
?  
<Button kind='openModal' 
      onClick={()=>setMapModal(true)} 
    >
        {t('map')}
</Button>
:

<Content>

 <StyledMap 
  type={type}
  >

 <Map
    defaultCenter={{lat:properties[0]?.position_x,lng:properties[0]?.position_y}}
    defaultZoom={9}
    mapId={'ce5d7c7d5c3a8c26 '}
    fullscreenControlOptions={'bottom'}
    >
      

{properties?.map((property,i)=>(

    <AdvancedMarkerItem
    property={property}  
    key={property.id} 
    index={i} 
    open={setOpen} 
    showIndex={setIndex}
    />
) 
)}
  
{open && 
  <InfosWindowsGoogle
   index={index} 
   properties={properties}/>
}
   </Map>
 </StyledMap>
</Content>


}
    
  </>
  )
}
