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
          <div className="items flex md:flex-row flex-col gap-6  items-center md:justify-between">
            <div className="flex-1 h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker1}
                alt=""
                className="rounded-xl  h-full object-fill w-[345px] md:w-full"
              />
            </div>
            <div className="flex-1 h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker2}
                alt=""
                className="rounded-xl  h-full object-fill w-[345px] md:w-full"
              />
            </div>
            <div className="flex-1 h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker3}
                alt=""
                className="rounded-xl  h-full object-fill w-[345px] md:w-full"
              />
            </div>
            <div className="flex-1 h-[400px]">
              <img
                src={Imgs.EventDetailsSpeaker4}
                alt=""
                className="rounded-xl  h-full object-fill w-[345px] md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailsSpeakers;
