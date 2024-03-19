import React from 'react'
import styled from 'styled-components'

import FooterAreaList from './FooterAreaList'
import ContactInfos from './ContactInfos'
import Copyrights from './Copyrights'
import SocialMediaIcons from './SocialMediaIcons'
import { useTranslation } from 'react-i18next'

import Box from './Box'




const FooterContent = styled.footer`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background-color: black;
`

const Section = styled.section` 
  height: 100vh;
width: 100%;
border: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Video = styled.video`
width:100%;
height: 100%;
border: 0px;
object-fit: cover;
filter: brightness(100%);
`






const BoxByArea=styled.div`
  width: 100%;
  height: 70vh;
display: flex;
flex-direction: column;
gap: 50px;
@media (min-width: 1200px){
   height: 39vh;
   }
   @media (max-height: 740px){
   height: 90vh;
   }
`


export default function Footer() {


  return (
  <FooterContent>
      <Section>
        <Video autoPlay muted loop src={'../footer.mp4'} />
        <Box/>
        </Section>
 
       <BoxByArea>
         <FooterAreaList/>
        </BoxByArea>

        <BoxByArea>
          <ContactInfos/>
          <SocialMediaIcons/>
        </BoxByArea>
          <Copyrights/>
</FooterContent>
  )
}


// <StyledInfoFooter>
  
// <h4>
// <storng>
// About us
// </storng>
// </h4>
// <div>
// Το γραφείο μας δραστηριοποιείται στο χώρο του Real Estate στην ευρύτερη περιοχή του Δήμου Αριστοτέλη από το 2006.
// <NavLink to='/whyus'>
// About us
// </NavLink>
// </div>
//  </StyledInfoFooter>

// <StyledInfoFooter>

//  <h4>
// <storng>
// Contact
// </storng>
// </h4>

// <div>

// <ul>
// <StyleLi>	
//     +30 23770 71604

// </StyleLi>
// <StyleLi>+30 69477 97433</StyleLi>
// <StyleLi>
//     ouranouporealestate@gmail.com
//     </StyleLi>
// </ul>
// </div>
//  </StyledInfoFooter>

// <StyledInfoFooter>
// <h4>
// <storng>

// Location
// </storng>
// </h4>
// <div>
// Μεσιτικό γραφείο, Λυκάκη Χρύσα Ουρανούπολη Χαλκιδικής,63075
// </div>
// </StyledInfoFooter>