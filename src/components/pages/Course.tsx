import { useTranslation } from "react-i18next";
function Course() {
      const { t } = useTranslation(); 
  return (
   <>
    <div>{t("nav.course")}</div>   

   </>

  )
}

export default Course;