import styled from 'styled-components'
import React from 'react'
import Propertylist from '../PropertiesHome/Propertylist'
import {motion} from 'framer-motion'

const Content = styled(motion.div)`
      
      width: 100%;
      height: 120vh;
      
      @media (max-width: 1200px) {
        height: 170vh;
      }

`

export default function PropertyListHomePage() {
  

  return (
<Content 
initial={{opacity:0,scale:0}}
whileInView={{opacity:1,scale:0.8}}
transition={{ duration : 2}}
viewport={{once:true}}
>
    <Propertylist/>
</Content>
  )
}
