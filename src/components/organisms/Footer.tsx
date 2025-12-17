import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "../../assets/icons/icons";

function Footer() {
  const { t } = useTranslation();
  return (
    <section className="bg-footer">
      <div className="container py-13  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div>
          <Link to="/" className="text-white text-3xl font-bold">
            SkillBase
          </Link>
          <p className=" text-gray-footer mt-5 text-[18px]">
            {t("footer.description")}
          </p>
          <div className="flex flex-row mt-5">
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center "
              to="/"
            >
              <FaLinkedinIn size={24} className="text-gray-footer" />
            </Link>
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center "
              to="/"
            >
              <FaInstagram size={24} className="text-gray-footer" />
            </Link>
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center "
              to="/"
            >
              <FaWhatsapp size={24} className="text-gray-footer" />
            </Link>
            <Link
              className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center  "
              to="/"
            >
              <FaFacebookF size={24} className="text-gray-footer" />
            </Link>
          </div>
        </div>
        <div className="text-white text-2xl">
          <h2 className="mb-5">{t("footer.servicesTitle")}</h2>
          <ul className="text-gray-footer text-base flex gap-1 flex-col">
            <li>{t("footer.services.dataScience")}</li>
            <li>{t("footer.services.leadership")}</li>
            <li>{t("footer.services.webDevelopment")}</li>
            <li>{t("footer.services.communication")}</li>
            <li>{t("footer.services.marketing")}</li>
          </ul>
        </div>

        <div className="text-white text-2xl ">
          <h2 className="mb-5">{t("footer.linksTitle")}</h2>
          <ul className="text-gray-footer  text-base flex gap-1 flex-col">
            <Link to="/">{t("footer.links.pages")}</Link>
            <Link to="/">{t("footer.links.blogs")}</Link>
            <Link to="/">{t("footer.links.events")}</Link>
            <Link to="/">{t("footer.links.courses")}</Link>
            <Link to="/">{t("footer.links.faqs")}</Link>
          </ul>
        </div>
      </div>
      <div className="copyright text-white py-[15px] text-center w-full border-t-1 border-primary ">
        <p className="text-md text-gray-footer">{t("footer.copyright")}</p>
      </div>
    </section>
  );
}

export default Footer;
