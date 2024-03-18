import React from 'react'
import styled from 'styled-components'


import useGetOneProperty from '../Listing/useGetOneProperty'
import Infos from './Infos'
import Span from '../../ui/Span'
import FormatNumber from '../Helpers/FormatNumber'
import PropertyPositionMapGoogle from '../MapGoogle/PropertyPositionMapGoogle'
import { useTranslation } from 'react-i18next'



const Content = styled.div `
      width: 100%;
      height:100%;
     color: black;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 19px;

      @media (max-width:600px){
        padding: 10px;
        height: 900px;  
        
      }
 
`

const Header = styled.div`
  height: 100%;
 width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
 gap:15px;

`



const TitlePrice = styled.div`
width: 100%;
display: flex;
  flex-direction: row;
 justify-content: space-around;
 align-items: center;
 gap: 29px;

`

const PositionCaption = styled.div`
width:50%;
display: flex;
flex-direction: column;
font-size: 30px;


@media (max-width:600px){
  font-size: 20px;
        
      }


&:last-child{
align-items: flex-end;
}
`


export default function Card() {


const {data} = useGetOneProperty();
const  {t,i18n} = useTranslation(['property','bed','bath','sqtf','map','title'])


if(!data) return;

const {formatedNumber} = FormatNumber(data[0]?.price)



  return (

 <Content>

  <Header>
  <TitlePrice>
    <PositionCaption>
    {i18n.language==='en' ? data[0]?.location : data[0]?.GreekLocation}

    {}
    <Span type={'infos'}>{data[0]?.address}</Span>
    </PositionCaption>
    <PositionCaption>

          ${formatedNumber}
      <Span type='infos'>{data[0]?.moneyPer} per sqft</Span>
    </PositionCaption>
  </TitlePrice>
 
 <Infos />


<div style={{borderBottom:'1px solid #E7E7E7'}}>
<h2>{t('map')}    {data[0]?.id}</h2>
<PropertyPositionMapGoogle property={data}/>
<h3>{data[0]?.address}</h3>
<h3>{data[0]?.location},{data[0]?.post}</h3>

</div>

  </Header>


</Content>

 
  )
}
