import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { FaCircleXmark } from "react-icons/fa6";

const Content = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  svg{
    color: red;
  }
    
`

export default function Required() {

    const {t} = useTranslation(['common','required'])

  return (
     
    <Content>
        <FaCircleXmark size={20} />
        {t('required')}
    </Content>
    
    
    )
}
