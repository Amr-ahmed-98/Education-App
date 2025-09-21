import * as img from "../assets/images/images";
import * as icon from '../assets/icons/icons';
export const NavbarList = [
  {
    list: "Home",
  },
  {
    list: "Features",
  },
  {
    list: "Pricing",
  },
  {
    list: "FAQ",
  },
];
export const secondSecHome = [
  {
    img: img.HomeAbout,
    title: "access your files, anywhere",
  },
  {
    img: img.HomeHero,
    title: "Security you can trust",
  },
];
// dummy events data
export const eventsListEn = [
  {
    id: 1,
    time: "09:00 AM",
    date: "2025-09-15",
    location: "New York, USA",
    title: "Tech Conference",
    desc: "Career Talks is a live session where experts share their career stories and tips to help you grow and get inspired.",
    img: img.EventGridCard,
  },
  {
    id: 2,
    time: "11:30 AM",
    date: "2025-09-16",
    location: "San Francisco, USA",
    title: "AI & Machine Learning Summit",
    desc: "Career Talks is a live session where experts share their career stories and tips to help you grow and get inspired.",
    img: img.EventGridCard,
  },
  {
    id: 3,
    time: "02:00 PM",
    date: "2025-09-18",
    location: "London, UK",
    title: "Design Workshop",
    desc: "Career Talks is a live session where experts share their career stories and tips to help you grow and get inspired.",
    img: img.EventGridCard,
  },
  {
    id: 4,
    time: "04:00 PM",
    date: "2025-09-19",
    location: "Berlin, Germany",
    title: "Cybersecurity Forum",
    desc: "Career Talks is a live session where experts share their career stories and tips to help you grow and get inspired.",
    img: img.EventGridCard,
  },
  {
    id: 5,
    time: "06:30 PM",
    date: "2025-09-20",
    location: "Tokyo, Japan",
    title: "Startup Pitch Night",
    desc: "Career Talks is a live session where experts share their career stories and tips to help you grow and get inspired.",
    img: img.EventGridCard,
  },
  {
    id: 6,
    time: "08:00 PM",
    date: "2025-09-22",
    location: "Dubai, UAE",
    title: "Future of Business Expo",
    desc: "Career Talks is a live session where experts share their career stories and tips to help you grow and get inspired.",
    img: img.EventGridCard,
  },
];
export const eventsListAr = [
  {
    id: 1,
    time: "09:00 AM",
    date: "30 يوليو 2025",
    location: "الزمالك، القاهرة، مصر",
    title: "محادثات مهنية",
    desc: "المحادثات المهنية عبارة عن جلسة مباشرة يشارك فيها الخبراء قصصهم المهنية ونصائحهم لمساعدتك على النمو والحصول على الإلهام.",
    img: img.EventGridCard,
  },
  {
    id: 2,
    time: "11:30 AM",
    date: "2025-09-16",
    location: "الزمالك، القاهرة، مصر",
    title: "محادثات مهنية",
    desc: "المحادثات المهنية عبارة عن جلسة مباشرة يشارك فيها الخبراء قصصهم المهنية ونصائحهم لمساعدتك على النمو والحصول على الإلهام.",
    img: img.EventGridCard,
  },
  {
    id: 3,
    time: "02:00 PM",
    date: "30 يوليو 2025",
    location: "الزمالك، القاهرة، مصر",
    title: "محادثات مهنية",
    desc: "المحادثات المهنية عبارة عن جلسة مباشرة يشارك فيها الخبراء قصصهم المهنية ونصائحهم لمساعدتك على النمو والحصول على الإلهام.",
    img: img.EventGridCard,
  },
  {
    id: 4,
    time: "04:00 PM",
    date: "30 يوليو 2025",
    location: "الزمالك، القاهرة، مصر",
    title: "محادثات مهنية",
    desc: "المحادثات المهنية عبارة عن جلسة مباشرة يشارك فيها الخبراء قصصهم المهنية ونصائحهم لمساعدتك على النمو والحصول على الإلهام.",
    img: img.EventGridCard,
  },
  {
    id: 5,
    time: "06:30 PM",
    date: "30 يوليو 2025",
    location: "الزمالك، القاهرة، مصر",
    title: "محادثات مهنية",
    desc: "المحادثات المهنية عبارة عن جلسة مباشرة يشارك فيها الخبراء قصصهم المهنية ونصائحهم لمساعدتك على النمو والحصول على الإلهام.",
    img: img.EventGridCard,
  },
  {
    id: 6,
    time: "08:00 PM",
    date: "30 يوليو 2025",
    location: "الزمالك، القاهرة، مصر",
    title: "محادثات مهنية",
    desc: "المحادثات المهنية عبارة عن جلسة مباشرة يشارك فيها الخبراء قصصهم المهنية ونصائحهم لمساعدتك على النمو والحصول على الإلهام.",
    img: img.EventGridCard,
  },

];

export const ItemCard = [
 {
    id: 1,
    value: 350,
    labelKey: "ItemCard.courses",
    icon: <icon.Laptop size={32} />
  },
  {
    id: 2,
    value: "",
    labelKey: "ItemCard.instructors",
    icon: <icon.FaUser size={32} />
  },
  {
    id: 3,
    value: "",
    labelKey: "ItemCard.freeCourses",
    icon: <icon.PiCertificateBold size={32} />
  },
  {
    id: 4,
    value: 500,
    labelKey: "ItemCard.members",
    icon: <icon.Users size={32} />
  }
];

export const Students = [
  {
    id:1,
    img: img.Instructor2,
    description :"students.student1.text",
    icons: <icon.FaStar size={22} className="text-amber-400 my-[10px]" />,
    name: "students.student1.name",
    track:"students.student1.track"
  },
    {
    id:2,
    img: img.Instructor3,
    description :"students.student2.text",
    icons: <icon.FaStar size={22} className="text-amber-400 my-[10px]" />,
    name: "students.student2.name",
    track:"students.student2.track"
  },
]