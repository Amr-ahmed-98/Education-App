import { useTranslation } from "react-i18next";
import Button from './../atoms/Button';
function Course() {
      const { t } = useTranslation(); 
  return (
   <>
    <div>{t("nav.course")}</div>   
    <Button variant="primary" size="sm">one</Button>
    <Button variant="secondary" size="md">two</Button>
    <Button variant="outline1" size="lg">two</Button>
    <Button variant="secondary" size="xl">four</Button>
    
   </>

  )
}

export default Course;