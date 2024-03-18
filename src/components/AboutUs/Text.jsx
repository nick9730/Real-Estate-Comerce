import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useTranslation } from 'react-i18next'

import H2 from '../../ui/H2'

const Content= styled(motion.div)`
    flex-basis: 400px;
    text-align: justify;
    color: black;
    padding: 19px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size:2.5rem;
    gap: 20px;
    font-family: 'adobe-garamond-pro';
   background-color: white;
   overflow: hidden;


   @media (max-width: 1200px){
        width: 90%;
        justify-content: center;
    }
   
    @media (max-width: 800px){
      margin-top: 50px;
        flex-basis: 500px;
        width: 100%;
        padding: 21px;
        font-size:1.6rem;
    }
    
    
`

export default function Text() {
const {t} = useTranslation(['aboutus','title,label,summary,agentname,address,visitus,get'])

  return (
  <Content
    initial={{x:200,opacity:0}}
    whileInView={{x:0,opacity:1}}
    transition={{duration:2,delay:1}}
    >
   <H2>
   {t('label')}

    </H2> 
           {t('summary')}
  </Content>
  )
}
