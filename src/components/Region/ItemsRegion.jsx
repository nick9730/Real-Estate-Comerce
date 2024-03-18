import styled from 'styled-components'

import  {  useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useModalContext } from '../context/ModalContext'

import Button from '../../ui/Button'
import StyledNavLink from '../../ui/StyledNavLink'




const Content = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  transition: 2s;
 
`




export default function ItemsRegion({city}) {

  const {t,i18n} = useTranslation([`${city.name}`,"name,density,summary,welcome,slogan"])
  const{t:region_common} = useTranslation(['region',"density,population,age,people,median,button"])

  const {width} = useModalContext();
  const [hover,setHover]=useState(false)
 
return (

   <StyledNavLink type='itemsRegion' 
    to={`/region/${city?.name}`}
    onClick={() => window.scrollTo(0, 0)} 
    data= {city.image}
    onMouseEnter={()=>setHover(true)} 
    onMouseLeave={()=>setHover(false)}>
    { i18n.language==='en-US' || i18n.language==='en'? city?.Englishname : t('name')}
    
    {width>1200 && hover 

    ?  
     <Content>
     <p style={{textAlign:'center'}}>    { i18n.language==='en-US' || i18n.language==='en' ? city?.slogan : t('slogan')}</p>
        <Button kind='itemsRegion'>
           {region_common('button')}
        </Button>
       </Content>
       : ''
       }
   </StyledNavLink>
 

    )
  }

