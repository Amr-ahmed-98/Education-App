import Button from "../atoms/Button";
import * as Icons from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { eventsListEn } from "@/utils/Data";
type Event = {
  id: number;
  time: string;
  date: string;
  location: string;
  title: string;
  desc: string;
  img: string;
};
const EventDetailsDesc = () => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    const updated = eventsListEn.filter(event => event?.id === Number(id));
    setEventData(updated);
  }, [id]);
  return (
    <>
      <section className="py-10">
        <div className="container">
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <Icons.CiCalendarDate className="text-secondary" />
              {t(eventData[0]?.date)}
            </li>
            <li className="flex gap-2 items-center">
              <Icons.TbClockHour4 className="text-secondary" />
              {t(eventData[0]?.time)}
            </li>
            <li className="flex gap-2 items-center">
              <Icons.CiLocationOn className="text-secondary" />{" "}
              {t(eventData[0]?.location)}
            </li>
          </ul>
          <div className="items flex flex-col md:flex-row gap-8  mt-1">
            <div className="w-full md:w-1/2 flex flex-col gap-6 pt-7">
              <div className="">
                <h3
                  className="text-4xl pb-4"
                  // dangerouslySetInnerHTML={{
                  //   __html: t(`EventDetailsDesc.eventHeadline`),
                  // }}
                
                >
                  {t(eventData[0]?.title)}
                </h3>
                <p className="darK:text-[#BBBBBB]">
                  {t(`EventDetailsDesc.eventHeadlineContent`)}
                </p>
              </div>
              <div className="">
                <h3
                  className="text-4xl pb-4"
                  dangerouslySetInnerHTML={{
                    __html: t(`EventDetailsDesc.eventDescription`),
                  }}
                />
                <p
                  className="dark:text-[#BBBBBB]"
                  // dangerouslySetInnerHTML={{
                  //   __html: t(`EventDetailsDesc.eventDescriptionContent`),
                  // }}
                >
                  {t(eventData[0]?.desc)}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="dark:bg-[#1C242F] bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-[36px]">
                  Event <span className="text-secondary font-bold">Info</span>
                </h2>
                <ul className="flex flex-col gap-4 my-4 p-4">
                  <li className="flex justify-between border-b-1 py-4 border-gray-300">
                    <span>{t(`EventDetailsDesc.eventInfo.cost`)}</span>
                    <span className="text-secondary font-bold">100$</span>
                  </li>
                  <li className="flex justify-between border-b-1 py-4 border-gray-300">
                    <span className="">
                      {t(`EventDetailsDesc.eventInfo.totalCost`)}
                    </span>
                    <span className="text-secondary font-bold">22</span>
                  </li>
                  <li className="flex justify-between border-b-1 py-4 border-gray-300">
                    <span>{t(`EventDetailsDesc.eventInfo.bookedSlot`)}</span>
                    <span className="text-secondary font-bold">2</span>
                  </li>
                </ul>
                <Button className="w-full">
                  {t(`EventDetailsDesc.bookNow`)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailsDesc;
