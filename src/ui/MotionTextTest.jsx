
import React from 'react'
import {motion,AnimatePresence } from 'framer-motion'



export default function MotionTextTest() {

    const y = 'Η αναζητηση σας προτεραιοτητα μας';
  
    return (
      < >
  
      {  y?.split("").map((letter, index) => (
        
          <motion.span
  
          key={index}
          initial={{opacity:0}}
          animate={{ opacity: 1}}
          transition={{ duration: 5 ,delay:index*0.1,repeat: Infinity,repeatDelay:5 }}
        
          >
              
            { letter}
           </motion.span>
        ))
      
      
      
      } 
        </>
    )
  }
  
  

