import { NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { GreekType, Type } from '../../data/options'
import { RealEState } from '../context/Context'
import { useTranslation } from 'react-i18next'
import StyledNavLink from '../../ui/StyledNavLink'
import Li from '../../ui/LI'




export default function FooterAreaItem({city}) {
 

const {SetQuery,setNumber} = RealEState()
const {t,i18n} = useTranslation([`${city.name}`,'name'])
const {t:common} = useTranslation(['common','forsale'])


function HandleChange(name,place){

  if(i18n.language==='en-US' || i18n.language==='en' ){
         name = city.Englishname
  }
    else{
    name = city.GreekName;
    }

  SetQuery(name);
  setNumber(place)
   window.scrollTo(0,0)

}






  return (
<Li type='footer'>
  
<StyledNavLink type='footer' 
onClick={()=>HandleChange(city.name,Type[1]?.value)} 
to={`/properties`}>
{i18n.language==='en-US' || i18n.language==='en' ? city.Englishname : t('name')}
{i18n.language==='en-US' || i18n.language==='en' ?   Type[1]?.label : GreekType[1]?.label} {common('forsale')}
</StyledNavLink>

<StyledNavLink type='footer' 
onClick={()=>HandleChange(city.name,Type[2]?.value)}   
to={`/properties`} >
{i18n.language==='en-US' || i18n.language==='en' ? city.Englishname : t('name')}
{i18n.language==='en-US' || i18n.language==='en' ?   Type[2]?.label : GreekType[2]?.label} {common('forsale')}
</StyledNavLink>

<StyledNavLink type='footer' 
onClick={()=>HandleChange(city.name,Type[3]?.value)} 
to={`/properties`}>
{i18n.language==='en-US' || i18n.language==='en' ? city.Englishname : t('name')}
{i18n.language==='en-US' || i18n.language==='en' ?   Type[3]?.label : GreekType[3]?.label} {common('forsale')}
</StyledNavLink>


</Li>
  )
}
