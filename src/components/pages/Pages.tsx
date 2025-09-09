import { useTranslation } from "react-i18next";
function Pages() {
      const { t } = useTranslation(); 
  return (
    <>
     <h2>{t("nav.category")} </h2> 
     <h2 className=' dark:text-blue-600 text-amber-600 '>this is text</h2>
    </>
  )
}

export default Pages