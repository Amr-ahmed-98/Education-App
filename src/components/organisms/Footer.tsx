import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as icon from "../../assets/icons/icons";
import SlideInOnScroll from '@/animation/GetX';

function Footer() {
  const { t } = useTranslation();
  return (
    <section className="bg-[linear-gradient(90deg,#052861_0%,#0F377B_30%,#001B4B_70%)]">
      <div className="container py-[80px]  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div>
          <SlideInOnScroll direction="left">
          <Link to="/" className="text-primary text-[30px]">
            Skill<span className="text-secondary">Base</span>
          </Link>
          </SlideInOnScroll>
          <p className=" text-light-primary mt-[20px] text-[18px]">
            {t("footer.description")}
          </p>
          <div className="flex flex-row mt-[20px]">
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
              to="/"
            >
              <icon.FaLinkedinIn size={24} className="text-amber-50" />
            </Link>
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
              to="/"
            >
              <icon.FaInstagram size={24}  className="text-amber-50" />
            </Link>
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
              to="/"
            >
              <icon.FaWhatsapp size={24}  className="text-amber-50" />
            </Link>
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
              to="/"
            >
              <icon.FaFacebookF size={24} className="text-amber-50" />
            </Link>
          </div>
        </div>
        <div className="text-secondary text-[30px]">
          <h2 className="mb-[20px]">{t("footer.servicesTitle")}</h2>
          <ul className="text-light-primary text-[20px]">
            <li>{t("footer.services.dataScience")}</li>
            <li>{t("footer.services.leadership")}</li>
            <li>{t("footer.services.webDevelopment")}</li>
            <li>{t("footer.services.communication")}</li>
            <li>{t("footer.services.marketing")}</li>
          </ul>
        </div>

        <div className="text-secondary text-[30px]">
          <h2 className="mb-[20px]">{t("footer.linksTitle")}</h2>
          <ul className="text-light-primary text-[20px] flex flex-col">
            <Link to="/">{t("footer.links.pages")}</Link>
            <Link to="/">{t("footer.links.blogs")}</Link>
            <Link to="/">{t("footer.links.events")}</Link>
            <Link to="/">{t("footer.links.courses")}</Link>
            <Link to="/">{t("footer.links.faqs")}</Link>
          </ul>
        </div>
      </div>
      <div className="copyright text-light-primary py-[15px] text-center w-full bg-[#d9d9d92c]">
        <p className="text-[20px]">{t("footer.copyright")}</p>
      </div>
    </section>
  );
}

export default Footer;
