import { InfoWindow } from '@vis.gl/react-google-maps'
import React, { useState } from 'react'
import ItemProperties from '../Listing/ItemProperties'

export default function InfosWindowsGoogle({properties,index}) {
    
    const [setOpen] = useState(false);

  return (
    <InfoWindow
        position={{lat:properties[index]?.position_x,lng:properties[index]?.position_y}}
        onCloseClick={()=>setOpen(false)}
    >

       <ItemProperties 
       type='google' 
       property={properties[index]}/>

    </InfoWindow>
  )
}
