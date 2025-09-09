import { useTranslation } from "react-i18next";
import * as Img from '../../assets/images/images';
import Button from '../atoms/Button';

function Home() {
      const { t } = useTranslation(); 
  return (
   <>
    <div >{t("nav.home")} </div>
    <img className='w-[200px]' src={Img.HomeHero} alt="error1" />
    <img className='w-[200px]' src={Img.HomeAbout} alt="error2" />
   <Button size="md" variant='secondary'>sdfsd</Button>
   </>
  )
}

export default Home