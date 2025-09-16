import { useTranslation } from "react-i18next";
import SectionTitle from "../molecules/SectionTitle";
import CourseList from "../molecules/CourseList";
import type { ICourse } from "../molecules/CourseList";

function Course() {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle
        heading1={t("SectionTitle.Course.title1")}
        heading2={t("SectionTitle.Course.title2")}
        breadcrumbs1={t("SectionTitle.Course.breadcrumbs1")}
        breadcrumbs2={t("SectionTitle.Course.breadcrumbs2")}
        breadcrumbs3={t("SectionTitle.Course.breadcrumbs3")}
      />
      <CourseList
        courses={sampleCourses}
        className=""
      />
      <div>{t("nav.course")}</div>
    </>
  );
}

export default Course;

const sampleCourses: ICourse[] = [
  {
    id: "1",
    title: "Introduction To Artificial Intelligence And Machine Learning",
    description:
      "Learn the fundamentals of AI and ML with hands-on projects and real-world applications.",
    price: 40.99,
    originalPrice: 55.99,
    rating: 4.5,
    reviewCount: 1245,
    lessons: 20,
    duration: "6 Weeks",
    level: "Beginner",
    category: "Artificial Intelligence",
    image:
      "https://images.pexels.com/photos/5474293/pexels-photo-5474293.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Dr. Sarah Johnson",
  },
  {
    id: "2",
    title:
      "Delve into structures (lists, dictionaries, functions), and build small practical projects",
    description:
      "Master Python data structures and build practical applications from scratch.",
    price: 35.0,
    originalPrice: 49.99,
    rating: 4.6,
    reviewCount: 892,
    lessons: 20,
    duration: "5 Weeks",
    level: "Intermediate",
    category: "Programming",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Mike Chen",
  },
  {
    id: "3",
    title:
      "Dealing with OOP, advanced libraries, and implementing complete professional projects",
    description:
      "Advanced Python programming with object-oriented design and professional development practices.",
    price: 50.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviewCount: 567,
    lessons: 20,
    duration: "8 Weeks",
    level: "Advanced",
    category: "Programming",
    image:
      "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Emma Rodriguez",
  },
  {
    id: "4",
    title: "Complete Web Development Bootcamp",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js and build full-stack web applications.",
    price: 22.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviewCount: 2156,
    lessons: 25,
    duration: "12 Weeks",
    level: "Beginner",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Alex Thompson",
  },
  {
    id: "5",
    title: "Advanced React and Modern JavaScript",
    description:
      "Master React hooks, context, advanced patterns, and build production-ready applications.",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewCount: 743,
    lessons: 18,
    duration: "6 Weeks",
    level: "Advanced",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Jessica Kim",
  },
  {
    id: "6",
    title: "Data Science Fundamentals with Python",
    description:
      "Learn data analysis, visualization, and machine learning using Python and popular libraries.",
    price: 55.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviewCount: 1089,
    lessons: 22,
    duration: "10 Weeks",
    level: "Intermediate",
    category: "Data Science",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Dr. Robert Martinez",
  },
  {
    id: "7",
    title: "Digital Marketing Mastery",
    description:
      "Complete guide to digital marketing including SEO, social media, PPC, and content marketing.",
    price: 29.99,
    originalPrice: 44.99,
    rating: 4.4,
    reviewCount: 1567,
    lessons: 16,
    duration: "8 Weeks",
    level: "Beginner",
    category: "Marketing",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Maria Gonzalez",
  },
  {
    id: "8",
    title: "Leadership and Team Management",
    description:
      "Develop essential leadership skills, team management strategies, and communication techniques.",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviewCount: 456,
    lessons: 14,
    duration: "4 Weeks",
    level: "Intermediate",
    category: "Leadership",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "David Wilson",
  },
  {
    id: "9",
    title: "Cloud Computing with AWS",
    description:
      "Master Amazon Web Services, deploy scalable applications, and earn your AWS certification.",
    price: 65.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviewCount: 892,
    lessons: 28,
    duration: "12 Weeks",
    level: "Advanced",
    category: "Cloud Computing",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Andrew Lee",
  },
  {
    id: "10",
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile apps for iOS and Android using React Native and JavaScript.",
    price: 48.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewCount: 634,
    lessons: 24,
    duration: "10 Weeks",
    level: "Intermediate",
    category: "Mobile Development",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Sophie Chang",
  },
  {
    id: "11",
    title: "Cybersecurity Fundamentals",
    description:
      "Learn network security, ethical hacking, risk assessment, and cybersecurity best practices.",
    price: 52.99,
    originalPrice: 74.99,
    rating: 4.6,
    reviewCount: 789,
    lessons: 26,
    duration: "8 Weeks",
    level: "Beginner",
    category: "Cybersecurity",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Michael Brown",
  },
  {
    id: "12",
    title: "Advanced UI/UX Design",
    description:
      "Create stunning user interfaces and experiences using design thinking and modern tools.",
    price: 41.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewCount: 1234,
    lessons: 19,
    duration: "7 Weeks",
    level: "Advanced",
    category: "Design",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    instructor: "Lisa Anderson",
  },
];
