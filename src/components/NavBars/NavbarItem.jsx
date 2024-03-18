
import Li from '../../ui/LI'
import StyledNavLink from '../../ui/StyledNavLink'



export default function NavbarItem({address,content,onClick,type}) {
  return (
    <Li type='ListNavbar'>
      <StyledNavLink  
      type={type}
      onClick={onClick}  
      to={`${address}` }
       >
           {content}
      </StyledNavLink>
    </Li>
  )
}
