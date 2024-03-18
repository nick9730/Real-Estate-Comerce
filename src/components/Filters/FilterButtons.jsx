import  { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'


import { RealEState } from '../context/Context'
import ModalButtonFilter from './ModalButtonFilter'
import DesktopFilters from './DesktopFilters'
import P from '../../ui/P'
import { useModalContext } from '../context/ModalContext'




export default function FilterButtons({filter}) {

  const {width} = useModalContext();



  return (

<>
    {width<900  ? 
    <ModalButtonFilter/>
  :
    <DesktopFilters filter={filter}/>
   }
  </>
    
)}
  