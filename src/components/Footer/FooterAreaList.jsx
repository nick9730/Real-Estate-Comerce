import styled from 'styled-components'
import FooterAreaItem from './FooterAreaItem'
import { useGetRegions } from '../Region/useGetRegions'
import { useTranslation } from 'react-i18next'
import H2 from '../../ui/H2'
import { RealEState } from '../context/Context'

const Content =styled.div`
    width: 100%;
    height: 45%;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;

`
const Wrapper= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    @media (max-width:1200px){
        flex-direction: column;
        gap: 20px;
    }
`

const Ul =styled.ul`
    width:30% ;
    height: 100%;
    background-color: black;
    gap: 20px;
`

export default function FooterAreaList() {
 
     const {t,i18n} = useTranslation(['properties','header'])
     const {setName} = RealEState();
     const {data} = useGetRegions();



  return (
    <Content> 
        <div >
        <H2 type='home'>{i18n.language==="en" ? 'PROPERTIES BY REGION ': 'AKINHTA MΕ ΒΑΣΗ ΤΗΝ ΤΟΠΟΘΕΣΙΑ'}</H2>
        </div>
        
<Wrapper>
    {data?.map((city,i)=>
       <Ul onClick={()=>setName(t('header'))} key={city?.id}>
            <FooterAreaItem city={city} key={city?.id}/>
        </Ul>
    )}
</Wrapper>
    
    </Content>
  )
}
