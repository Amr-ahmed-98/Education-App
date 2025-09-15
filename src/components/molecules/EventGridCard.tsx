import * as Icons from "../../assets/icons/icons"
import { Link } from "react-router-dom";
type Event = {
    id: number;
    time: string;
    date: string;
    location: string;
    title: string;
    desc: string;
    img: string;
};
const EventGridCard = ({ event, show }: { event: Event, show: string }) => {
    return (
        <>
            <div key={event?.id} className={`${show === "grid" ? "flex flex-col" : "flex flex-col gap-0 md:flex-row md:gap-5"}   rounded-lg  `}>
                <div className={`h-[246px] relative shrink-0 ${show === "list" && "  md:flex-2"} `}>
                    <img src={event?.img} alt="" className="w-full h-full object-fill rounded-lg" />
                    <div className=" absolute top-10 left-10 flex gap-2 text-white bg-primary rounded items-center py-0.5 px-2" ><Icons.TbClockHour4 /> {event?.time}</div>
                </div>
                <div className={`p-8 flex flex-col gap-2 dark:bg-[#1C242F] bg-white w-full rounded-lg ${show === "list" ? "  md:flex-3" : "mt-[-9px] z-10 "} `}>
                    <ul className="flex mb-2  justify-between">
                        <li className="flex gap-2 items-center text-secondary"><Icons.CiCalendarDate />{event?.date}</li>
                        <li className="flex gap-2 items-center text-secondary"><Icons.CiLocationOn /> {event?.location}</li>
                    </ul>
                    <h2 className="text-[#002B5B] dark:text-white text-2xl font-bold">{event?.title}</h2>
                    <p className="dark:text-[#A4A4A4]">{event?.desc}</p>
                    <Link to={`/events/${event?.id}`} className="mt-3 bg-primary p-3 text-center text-white rounded-xl font-medium">View Details</Link>
                </div>
            </div>
        </>
    )
}

export default EventGridCard
