import { createContext, useContext,useMemo,useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideCalling";




const ModalOuranoupoli = createContext()


export default function Modal({children}){
    
  
    const [contactModal,setContactModal] = useState(false)
    const [fullscreen,setFullSreen] = useState(false)
    const [indexArrow,setIndexArrow] = useState(0)
    const [len,setLen] = useState()
    const [mapModal,setMapModal] = useState(false)
    const [filterModal,setFilterModal] = useState(false)
    const [filterValue,SetFilterValue]= useState();
    const [showModal,setShowModal] = useState(false)
    const [showTheFilters,setShowTheFilters] = useState(false)
    const [width,setWidth]=useState(document.documentElement.clientWidth)
    const [height,setHeight] = useState(document.documentElement.clientHeight)
    const [navColor,setNavColor] = useState('transparent')

    


  function Next(){
    setIndexArrow(indexArrow+1)
    if(indexArrow === len-1){
            setIndexArrow(0)
        }
  }
  
  function Prev(){
    setIndexArrow(indexArrow-1)
    if(indexArrow===0){
          setIndexArrow(len-1)
        }
  }
  
  const HandleClose  = ()=>
    {
       setContactModal(false)
       document.body.style.overflow='unset'
  }
   
 const close  = ()=>
 {
    setShowModal(false)
    document.body.style.overflow='unset'
 }

 useMemo(
  function(){
    if(width>1201) setMapModal(false);
  },[setMapModal,width]
  )
  
 useMemo(
    function(){
      if(width>901){
        setFilterModal(false)
      } 
    },[setFilterModal,width]
    )


    
 const ModalRef =  useOutsideClick(close)


    return(
        <ModalOuranoupoli.Provider value={{
        ModalRef,
        width,
        setWidth,
        close,
        Next,
        Prev,
        navColor,
        setNavColor,
        height,
        setHeight,
        mapModal,
        setMapModal,
        filterModal,
        setFilterModal,
        HandleClose,
        contactModal,
        setContactModal,
        fullscreen,
        setFullSreen,
        indexArrow,
        len,
        setLen,
        setIndexArrow,
        filterValue,
        SetFilterValue,
        showModal,
        setShowModal,
     
        showTheFilters,
        setShowTheFilters
        
        }}>
          {children}
        </ModalOuranoupoli.Provider>

    )


}

function useModalContext(){
    const context = useContext(ModalOuranoupoli)
    if(context===undefined) throw new  Error("CiitiesContext was used outside the CitiesProvider");
    return context
}


export{useModalContext,Modal}