import { useTranslation } from "react-i18next"





export default function useTakeValue(value){

    const {i18n} = useTranslation();

    let translation;

    if(value==='monokatoikia'){
        if( i18n.language==='en'){
            translation='Monokatoikia'
        }
        else {
            translation='Μονοκατοικία'
        }
    }
   else if(value==='diamerisma'){
        if( i18n.language==='en'){
            translation='Diamerisma'
        }
        else {
            translation='Διαμέρισμα'
        }
    }
    else if(value==='agrotemaxio'){
        if( i18n.language==='en'){
            translation='Agrotemaxio'
        }
        else {
            translation='Αγροτεμάχιο'
        }
    }
    
    return {translation}



}