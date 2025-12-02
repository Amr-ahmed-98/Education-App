import * as img from "../assets/images/images";
import * as icon from '../assets/icons/icons';
import { courseProfile, course1, course2, course3 } from "@/assets/images/images";
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
    path: "/cart",
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

interface CourseCard {
  id: number;
  category: string;
  title: string;
  instructor: string;
  progress: number;
  status: "notStarted" | "inProgress" | "completed";
  image: string;
}

export const courses: CourseCard[] = [
  {
    id: 1,
    category:"myCourses.category",
    title:"myCourses.courseTitle",
    instructor:"myCourses.instructor",
    progress: 0,
    status: "notStarted",
    image: courseProfile,
  },
  {
    id: 2,
    category:"myCourses.category",
    title:"myCourses.courseTitle",
    instructor:"myCourses.instructor",
    progress: 30,
    status: "inProgress",
    image: courseProfile,
  },
  {
    id: 3,
    category:"myCourses.category",
    title:"myCourses.courseTitle",
    instructor:"myCourses.instructor",
    progress: 60,
    status: "inProgress",
    image: courseProfile,
  },
  {
    id: 4,
    category:"myCourses.category",
    title:"myCourses.courseTitle",
    instructor:"myCourses.instructor",
    progress: 100,
    status: "completed",
    image: courseProfile,
  },
  {
    id: 5,
    category:"myCourses.category",
    title:"myCourses.courseTitle",
    instructor:"myCourses.instructor",
    progress: 20,
    status: "inProgress",
    image: courseProfile,
  },
  {
    id: 6,
    category:"myCourses.category",
    title:"myCourses.courseTitle",
    instructor:"myCourses.instructor",
    progress: 30,
    status: "inProgress",
    image: courseProfile,
  },
];

export const getStatusColor = (status: string) => {
  switch (status) {
    case "notStarted":
      return "bg-green-500";
    case "inProgress":
      return "bg-blue-500";
    case "completed":
      return "bg-gray-500";
    default:
      return "bg-green-500";
  }
};

export interface CartItem {
  id: number;
  title: string;
  instructor: string;
  instructorTitle: string;
  price: number;
  image: string;
}

export const cartItems: CartItem[] = [
  {
    id: 1,
    title: "cart.course1.title",
    instructor: "cart.course1.instructor",
    instructorTitle: "cart.course1.instructorTitle",
    price: 200,
    image: courseProfile,
  },
  {
    id: 2,
    title: "cart.course2.title",
    instructor: "cart.course2.instructor",
    instructorTitle: "cart.course2.instructorTitle",
    price: 200,
    image: courseProfile,
  },
  {
    id: 3,
    title: "cart.course3.title",
    instructor: "cart.course3.instructor",
    instructorTitle: "cart.course3.instructorTitle",
    price: 300,
    image: courseProfile,
  },
];

export interface WishlistItem {
  id: number;
  category: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  image: string;
}

export const wishlistItems: WishlistItem[] = [
  {
    id: 1,
    category: "wishlist.course1.category",
    title: "wishlist.course1.title",
    instructor: "wishlist.course1.instructor",
    rating: 4.8,
    reviewCount: 189,
    price: 79.00,
    image: course1,
  },
  {
    id: 2,
    category: "wishlist.course2.category",
    title: "wishlist.course2.title",
    instructor: "wishlist.course2.instructor",
    rating: 4.9,
    reviewCount: 1204,
    price: 49.99,
    image: course2,
  },
  {
    id: 3,
    category: "wishlist.course3.category",
    title: "wishlist.course3.title",
    instructor: "wishlist.course3.instructor",
    rating: 4.7,
    reviewCount: 756,
    price: 99.99,
    image: course3,
  },
  {
    id: 4,
    category: "wishlist.course4.category",
    title: "wishlist.course4.title",
    instructor: "wishlist.course4.instructor",
    rating: 4.8,
    reviewCount: 980,
    price: 120.00,
    image: courseProfile,
  },
];