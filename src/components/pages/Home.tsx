import { useTranslation } from "react-i18next";
// import Button from '../atoms/Button';
import Cart from '../molecules/Card';
import intructor1 from '../../assets/images/instructor1.png';

function Home() {
      const { t } = useTranslation(); 
  return (
   <>
    <div >{t("nav.home")} </div>
    <Cart course={{ id: "1", title: "Python Course", level: "Advanced", duration: "6 Weeks", image: intructor1, rating: 4, totalRatings: 21, price: 120, lessons: 48 }} className="" />
   </>
  )
}

export default Home