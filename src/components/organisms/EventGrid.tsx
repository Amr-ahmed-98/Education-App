import {Button} from "../atoms/Button"
import * as Icons from "../../assets/icons/icons"
import { eventsListEn } from "@/utils/Data"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import EventGridCard from "../molecules/EventGridCard"

const EventGrid = () => {
    const [show, setShow] = useState('grid');
    const handleShowItems = (type: string) => {
        setShow(type)
    }
    const { t } = useTranslation();
    type Event = {
        id: number;
        time: string;
        date: string;
        location: string;
        title: string;
        desc: string;
        img: string;
    };

    const [data, setData] = useState<Event[]>([]);

    
    useEffect(() => {
        setData(eventsListEn)
    }, [])

    return (
        <>
            <section className='py-16'>
                <div className='container'>
                    <div className="text-center mb-14">
                        <h1 className="text-[32px]  font-medium" dangerouslySetInnerHTML={{ __html: t(`EventGrid.featuredEvents`) }} />
                    </div>
                    <div className="flex justify-end gap-4 mb-10">
                        <Button onClick={() => handleShowItems("grid")} className="px-4 md:px-8 flex gap-2"><Icons.BsGrid3X3 /> <span className="hidden md:flex">{t(`EventGrid.eventGrid`)}</span></Button>
                        <Button onClick={() => handleShowItems("list")} className="px-4 md:px-8 flex gap-2" variant="outline1"><Icons.FaBars /> <span className="hidden md:flex">{t(`EventGrid.eventList`)}</span></Button>
                    </div>
                    <div className={`items ${show == "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  " : "grid grid-cols-1 gap-8"}   `}>
                        {data.map(event => (
                            <EventGridCard event={event} show={show} />))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventGrid
