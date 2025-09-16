import { useTranslation } from "react-i18next";
import HeroSection from "../molecules/HeroSection";
import * as img from "./../../assets/images/images";
import * as icons from "./../../assets/icons/icons";
import HeroText from "../molecules/HeroText";
import Cart from "../molecules/Card";
import intructor1 from "../../assets/images/instructor1.png";
import Instructor from "./../organisms/Home/InstructorSection";
import CertificateSection from "../../components/organisms/Home/CertificateSection";
import BannerCard from "../organisms/Home/BannerCard";
import { ItemCard } from "../../utils/Data";
function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <HeroSection
        title1={t("HeroHome.title1")}
        title2={t("HeroHome.title2")}
        title3={t("HeroHome.title3")}
        title4={t("HeroHome.title4")}
        description={t("HeroHome.description")}
        primaryButton={{ text: t("HeroHome.btn"), href: "/register" }}
        image={img.HomeHero}
        imageRight={true} // لو خليتها true هتبدل مكان النص مع الصورة
        className="bg-gray-50"
      />
      <div className=" bg-[linear-gradient(210deg,#4775C1_0%,#5184D5_0%,#9BBdF5_40%,#AECDFD_70%,#5184D5_100%)]">
        <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {ItemCard.map((item) => (
            <BannerCard
              key={item.id}
              icon={item.icon}
              value={item.value}
              label={t(item.labelKey)}
            />
          ))}
        </div>
      </div>
      <div className="md:px-16 sm:px-10 px-4">
        <HeroText
          title={t("HeroText.title")}
          subtitle1={t("HeroText.subTitle1")}
          subtitle2={t("HeroText.subTitle2")}
          subtitle3={t("HeroText.subTitle3")}
          description={t("HeroText.description")}
          image={img.HomeAbout}
          variant="icons"
          icons={[
            {
              src: (
                <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />
              ),
              label: t("HeroText.iconTitle1"),
            },
            {
              src: (
                <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />
              ),
              label: t("HeroText.iconTitle2"),
            },
            {
              src: (
                <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />
              ),
              label: t("HeroText.iconTitle3"),
            },
          ]}
        />
      </div>
      <div className="flex flex-row container gap-4">
        <Cart
          course={{
            id: "1",
            title: "Python Course",
            level: "Advanced",
            duration: "6 Weeks",
            image: intructor1,
            rating: 4,
            totalRatings: 21,
            price: 120,
            lessons: 48,
          }}
          className=""
        />
        <Cart
          course={{
            id: "1",
            title: "Python Course",
            level: "Advanced",
            duration: "6 Weeks",
            image: intructor1,
            rating: 4,
            totalRatings: 21,
            price: 120,
            lessons: 48,
          }}
          className=""
        />
        <Cart
          course={{
            id: "1",
            title: "Python Course",
            level: "Advanced",
            duration: "6 Weeks",
            image: intructor1,
            rating: 4,
            totalRatings: 21,
            price: 120,
            lessons: 48,
          }}
          className=""
        />
      </div>

      <Instructor />
      <CertificateSection />
    </div>
  );
}

export default Home;
