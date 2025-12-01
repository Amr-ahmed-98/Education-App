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
    time: "eventList.eventList1.time",
    date: "eventList.eventList1.date",
    location: "eventList.eventList1.location",
    title: "eventList.eventList1.title",
    desc: "eventList.eventList1.desc",
    img: img.EventGridCard,
  },
  {
    id: 2,
    time: "eventList.eventList2.time",
    date: "eventList.eventList2.date",
    location: "eventList.eventList2.location",
    title: "eventList.eventList2.title",
    desc: "eventList.eventList2.desc",
    img: img.EventGridCard,
  },
  {
    id: 3,
    time: "eventList.eventList3.time",
    date: "eventList.eventList3.date",
    location: "eventList.eventList3.location",
    title: "eventList.eventList3.title",
    desc: "eventList.eventList3.desc",
    img: img.EventGridCard,
  },
  {
    id: 4,
    time: "eventList.eventList4.time",
    date: "eventList.eventList4.date",
    location: "eventList.eventList4.location",
    title: "eventList.eventList4.title",
    desc: "eventList.eventList4.desc",
    img: img.EventGridCard,
  },
  {
    id: 5,
    time: "eventList.eventList5.time",
    date: "eventList.eventList5.date",
    location: "eventList.eventList5.location",
    title: "eventList.eventList5.title",
    desc: "eventList.eventList5.desc",
    img: img.EventGridCard,
  },
  {
    id: 6,
    time: "eventList.eventList6.time",
    date: "eventList.eventList6.date",
    location: "eventList.eventList6.location",
    title: "eventList.eventList6.title",
    desc: "eventList.eventList6.desc",
    img: img.EventGridCard,
  },
];

export const ItemCard = [
  {
    id: 1,
    value: 350,
    labelKey: "ItemCard.courses",
    icon: <icon.Laptop size={22} />
  },
  {
    id: 2,
    value: "",
    labelKey: "ItemCard.instructors",
    icon: <icon.FaUser size={22} />
  },
  {
    id: 3,
    value: "",
    labelKey: "ItemCard.freeCourses",
    icon: <icon.PiCertificateBold size={22} />
  },
  {
    id: 4,
    value: 500,
    labelKey: "ItemCard.members",
    icon: <icon.Users size={22} />
  }
];

export const Students = [
  {
    id: 1,
    img: img.Instructor2,
    description: "students.student1.text",
    icons: <icon.FaStar size={22} className="text-amber-400 my-[10px]" />,
    name: "students.student1.name",
    track: "students.student1.track"
  },
  {
    id: 2,
    img: img.Instructor3,
    description: "students.student2.text",
    icons: <icon.FaStar size={22} className="text-amber-400 my-[10px]" />,
    name: "students.student2.name",
    track: "students.student2.track"
  },
];

export const SidebarMenuItems = [
  {
    id: 1,
    labelKey: "sidebar.myCourses",
    icon: icon.BookCopy,
    path: "/my-courses",
    isActive: true,
    section: "top"
  },
  {
    id: 2,
    labelKey: "sidebar.myOrders",
    icon: icon.ShoppingCart,
    path: "/my-orders",
    isActive: false,
    section: "top"
  },
  {
    id: 3,
    labelKey: "sidebar.wishlist",
    icon: icon.Heart,
    path: "/wishlist",
    isActive: false,
    section: "top"
  },
  {
    id: 4,
    labelKey: "sidebar.notifications",
    icon: icon.Bell,
    path: "/notifications",
    isActive: false,
    section: "top"
  },
  {
    id: 5,
    labelKey: "sidebar.profileSettings",
    icon: icon.User,
    path: "/profile-settings",
    isActive: false,
    section: "bottom"
  },
  {
    id: 6,
    labelKey: "sidebar.logOut",
    icon: icon.ArrowRight,
    path: "/logout",
    isActive: false,
    section: "bottom",
    isLogout: true
  }
];