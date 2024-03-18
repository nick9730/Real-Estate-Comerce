import {motion} from 'framer-motion'
import styled from 'styled-components'
import { useLocation,useParams } from 'react-router-dom'

import useShowTitles from '../hooks/useShowTitles'



const SlideIn=styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: black;
transform-origin: bottom;
z-index: 999;
overflow: hidden;


`

const SlideOut=styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: black;
transform-origin: top;
z-index: 999;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-size: 100px;
overflow: hidden;
font-family: 'Cormorant Garamond';

@media  (max-width: 1200px) 
{
  font-size: 50px;
}



`

const Transition = ({content})=>{
    
   const location = useLocation();
   const {name}=useParams()
   const {titles} = useShowTitles(location,name);
    


return(

    <>
    
    {content}
      
    <SlideIn
    initial={{scaleY:0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:1,ease:[0.22,1,0.36,1]}}
    />

<SlideOut
    initial={{scaleY:1}}
    animate={{scaleY:0}}
    exit={{scaleY:0}}
    transition={{duration:2,delay:1.5,ease:[0.22,1,0.36,1]}}
    >
        <motion.span
        initial={{opacity:1}}
        animate={{opacity:0}}
         transition={{duration:2}}
        >
        {titles}
        </motion.span>

    </SlideOut>

  
    </>
    )
}

export default Transition;