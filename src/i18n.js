import i18n from 'i18next'
import LanguageDetector from  'i18next-browser-languagedetector' 
import { initReactI18next} from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next)
.init({
    backend : 
    {
            loadPath: "/assets/i18next/{{ns}}/{{lng}}.json",
    },
    debug: false,
    fallbackLng:"en",
   ns:["home","aboutus","ammouliani","common","contact"],
   interpolation:{
    escapeValue:false,
    formatSeparator: ",",
   },
   react: {
     
        useSuspense: false,
     },

})

export default i18n;
