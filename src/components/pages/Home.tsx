import { useTranslation } from "react-i18next";
import * as Img from '../../assets/images/images';
import Button from '../atoms/Button';

function Home() {
      const { t } = useTranslation(); 
  return (
   <>
    <div >{t("nav.home")} </div>
    <Button variant="outline1">{t("Testimonials.Btn1")}</Button>
    <h2>{t("Testimonials.Title")}</h2>
    <p>{t("Testimonials.Description")}</p>
    <Button variant="primary">{t("Testimonials.Btn2")}</Button>
    <Button variant="secondary">{t("Testimonials.Btn3")}</Button>

    <div className="bg-primary dark:bg-dark-secondary">
      <p className="">what is your name</p>
      <h5>eslam</h5>
    </div>
    
   </>
  )
}

export default Home