import { useTranslation } from "react-i18next";
import Button from '../atoms/Button';

function Home() {
      const { t } = useTranslation(); 
  return (
   <>
    <div >{t("nav.home")} </div>
   </>
  )
}

export default Home