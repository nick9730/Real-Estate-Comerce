import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'



const StyledExpander = styled.p`

  transition: 3s;
  position: relative;
  text-align: justify;
  font-weight: 600;
  color: black;

`


export default function TextExpander({region}) {

  const {t,i18n} = useTranslation([`${region[0]?.name}`,"summary"])
  const [numberWord,setNumberWords] = useState()


useEffect(
  function(){

    setNumberWords(i18n.language==='en-US'  ||  i18n.language==='en' ? region[0]?.text : t('summary'))
  },[i18n.language,region,t]
)


  return (
    

       <StyledExpander>
         {numberWord}
        </StyledExpander>
      
      )
    }
    // {/* <Button onClick={words ? ShowLess : ShowMore}>{words ? 'Read less' : 'Read more'}</Button> */}
    // { console.log(words)}
    // const ShowMore = ()=>{
    //     setWords(true)
    //     setNumberWords(children)
      
    //   }
      
    //   const ShowLess = ()=>{
    //     setWords(false)
    //     setNumberWords(children?.slice(0,slicedwords) + '....')
    //   }{/* //     :
    //     <div>
    //         {numberWord}
    //     </div>
    
    
    // } */}
    // const  [words,setWords] = useState(true)

    // const [numberWord,setNumberWords] = useState()