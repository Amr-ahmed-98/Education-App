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
    path: "/notification",
    isActive: false,
    section: "top"
  },
  {
    id: 5,
    labelKey: "sidebar.profileSettings",
    icon: icon.User,
    path: "/edit-profile-student",
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

export const SidebarMenuItemsInstructor = [
  {
    id: 1,
    labelKey: "sidebarInstructor.addCourse",
    icon: icon.CirclePlus,
    path: "/add-course",
    isActive: false,
    section: "top"
  },
  {
    id: 2,
    labelKey: "sidebarInstructor.manageCourse",
    icon: icon.Video,
    path: "/manage-courses",
    isActive: false,
    section: "top"
  },
  {
    id: 3,
    labelKey: "sidebarInstructor.studentsEnrolled",
    icon: icon.Users,
    path: "/students-enrolled",
    isActive: false,
    section: "top"
  },
  {
    id: 4,
    labelKey: "sidebarInstructor.personalInfo",
    icon: icon.CircleUser,
    path: "/edit-profile-instructor",
    isActive: false,
    section: "bottom"
  },
  {
    id: 5,
    labelKey: "sidebarInstructor.earningsReports",
    icon: icon.ChartNoAxesColumn,
    path: "/earnings-reports",
    isActive: false,
    section: "bottom"
  },
  {
    id: 6,
    labelKey: "sidebarInstructor.logOut",
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

export interface NotificationItem {
  id: number;
  type: "enrollment" | "payout" | "review" | "security" | "enrollment";
  isRead: boolean;
  iconType: "avatar" | "dollar" | "alert" | "user";
  iconColor: string;
  content: string;
  boldText?: string;
  timestamp: string;
  actionButton?: string;
}

export const notificationItems: NotificationItem[] = [
  {
    id: 1,
    type: "enrollment",
    isRead: false,
    iconType: "avatar",
    iconColor: "bg-pink-200",
    content: "notification.item1.content",
    boldText: "notification.item1.boldText",
    timestamp: "notification.item1.timestamp",
  },
  {
    id: 2,
    type: "payout",
    isRead: false,
    iconType: "dollar",
    iconColor: "bg-green-200",
    content: "notification.item2.content",
    boldText: "notification.item2.boldText",
    timestamp: "notification.item2.timestamp",
  },
  {
    id: 3,
    type: "review",
    isRead: false,
    iconType: "avatar",
    iconColor: "bg-gray-200",
    content: "notification.item3.content",
    boldText: "notification.item3.boldText",
    timestamp: "notification.item3.timestamp",
    actionButton: "notification.item3.actionButton",
  },
  {
    id: 4,
    type: "security",
    isRead: true,
    iconType: "alert",
    iconColor: "bg-yellow-200",
    content: "notification.item4.content",
    timestamp: "notification.item4.timestamp",
  },
  {
    id: 5,
    type: "enrollment",
    isRead: true,
    iconType: "avatar",
    iconColor: "bg-blue-200",
    content: "notification.item5.content",
    boldText: "notification.item5.boldText",
    timestamp: "notification.item5.timestamp",
  },
];

export interface UserProfile {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  profilePhoto?: string;
}

export const defaultUserProfile: UserProfile = {
  fullName: "Frederick Hane",
  email: "frederick.hane@example.com",
  phoneNumber: "+1 (555) 234-5678",
  country: "United States",
};

export interface InstructorCourse {
  id: number;
  image: string;
  status: "published" | "draft" | "pending";
  category: string;
  title: string;
  enrollments: number;
  rating: number | null;
  price: number;
  actionButton: string;
}

export const instructorCourses: InstructorCourse[] = [
  {
    id: 1,
    image: img.ManageCourse0,
    status: "published",
    category: "manageCourse.category1",
    title: "manageCourse.course1.title",
    enrollments: 1204,
    rating: 4.9,
    price: 49.99,
    actionButton: "manageCourse.editCourse"
  },
  {
    id: 2,
    image: img.ManageCourse1,
    status: "published",
    category: "manageCourse.category2",
    title: "manageCourse.course2.title",
    enrollments: 876,
    rating: 4.8,
    price: 79.99,
    actionButton: "manageCourse.editCourse"
  },
  {
    id: 3,
    image: img.ManageCourse2,
    status: "draft",
    category: "manageCourse.category3",
    title: "manageCourse.course3.title",
    enrollments: 0,
    rating: null,
    price: 99.99,
    actionButton: "manageCourse.continueEditing"
  },
  {
    id: 4,
    image: img.ManageCourse3,
    status: "pending",
    category: "manageCourse.category1",
    title: "manageCourse.course4.title",
    enrollments: 0,
    rating: null,
    price: 89.99,
    actionButton: "manageCourse.editCourse"
  }
];

// add course data

export const levelOptions = [
  { value: 'beginner', labelKey: 'addCourse.level.beginner' },
  { value: 'intermediate', labelKey: 'addCourse.level.intermediate' },
  { value: 'advanced', labelKey: 'addCourse.level.advanced' },
];

export const categoryOptions = [
  { value: 'development', labelKey: 'addCourse.category.development' },
  { value: 'design', labelKey: 'addCourse.category.design' },
  { value: 'business', labelKey: 'addCourse.category.business' },
];

export const languageOptions = [
  { value: 'en', labelKey: 'addCourse.language.english' },
  { value: 'ar', labelKey: 'addCourse.language.arabic' },
];

export const pricingOptions = [
  { value: 'free', labelKey: 'addCourse.pricingOptions.free' },
  { value: 'fixed', labelKey: 'addCourse.pricingOptions.fixed' },
  { value: 'subscription', labelKey: 'addCourse.pricingOptions.subscription' },
];

// Add this to your Data.tsx file

export interface EarningsCard {
  id: number;
  labelKey: string;
  amount: number;
  icon: any;
  iconBg: string;
}

export interface PayoutHistory {
  id: number;
  date: string;
  transactionId: string;
  amount: number;
  status: "paid" | "pending" | "processing";
}

export const earningsCards: EarningsCard[] = [
  {
    id: 1,
    labelKey: "earningsReports.lifetimeEarnings",
    amount: 12480.50,
    icon: icon.DollarSign,
    iconBg: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    id: 2,
    labelKey: "earningsReports.thisMonth",
    amount: 1820.00,
    icon: icon.Calendar,
    iconBg: "bg-green-100 dark:bg-green-900/30"
  },
  {
    id: 3,
    labelKey: "earningsReports.nextPayout",
    amount: 950.00,
    icon: icon.Wallet,
    iconBg: "bg-yellow-100 dark:bg-yellow-900/30"
  },
  {
    id: 4,
    labelKey: "earningsReports.available",
    amount: 430.25,
    icon: icon.CheckCircle,
    iconBg: "bg-purple-100 dark:bg-purple-900/30"
  }
];

export const payoutHistory: PayoutHistory[] = [
  {
    id: 1,
    date: "Mar 15, 2024",
    transactionId: "PAY-20240315A8B",
    amount: 950.00,
    status: "paid"
  },
  {
    id: 2,
    date: "Feb 15, 2024",
    transactionId: "PAY-20240215C4D",
    amount: 1230.75,
    status: "paid"
  },
  {
    id: 3,
    date: "Jan 15, 2024",
    transactionId: "PAY-20240115E9F",
    amount: 880.25,
    status: "paid"
  }
];

export const last6MonthsEarnings = [
  { month: "Month 1", amount: 1250 },
  { month: "Month 2", amount: 1650 },
  { month: "Month 3", amount: 980 },
  { month: "Month 4", amount: 1420 },
  { month: "Month 5", amount: 1820 },
  { month: "Month 6", amount: 1180 }
];
