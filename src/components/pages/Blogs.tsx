import { useTranslation } from "react-i18next";

function Blogs() {
      const { t } = useTranslation(); 
  return (
    <>
    <div>{t("nav.blogs")}</div>
    </>
  )
}

export default Blogs;