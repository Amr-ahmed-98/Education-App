import { useTranslation } from "react-i18next";
import * as Imgs from "../../assets/images/images";
const EventDetailsSpeakers = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-10">
        <div className="container">
          <div
            className="flex justify-center md:justify-normal  text-4xl pb-8"
            dangerouslySetInnerHTML={{
              __html: t(`EventDetailsSpeaker.EventDetailsSpeaker`),
            }}
          />{" "}
          <div className="items flex md:flex-row flex-col gap-6 md:gap-0 items-center md:justify-between">
            <div className="w-[264px] h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker1}
                alt=""
                className="rounded-xl w-full h-full object-fill"
              />
            </div>
            <div className="w-[264px] h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker2}
                alt=""
                className="rounded-xl w-full h-full object-fill"
              />
            </div>
            <div className="w-[264px] h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker3}
                alt=""
                className="rounded-xl w-full h-full object-fill"
              />
            </div>
            <div className="w-[264px] h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker4}
                alt=""
                className="rounded-xl w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailsSpeakers;
