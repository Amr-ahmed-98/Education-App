import {createBrowserRouter } from 'react-router-dom';

import Home from '../components/pages/Home';
import Course from '../components/pages/Course';
import Pages from '../components/pages/Pages';
import About from '../components/pages/About';
import AddCourse from '../components/pages/AddCourse';
import Cart from '../components/pages/Cart';
import BlogDetails from '../components/pages/BlogDetails';
import Blogs from '../components/pages/Blogs';
import ContactMe from '../components/pages/ContactMe';
import ContactUs from '../components/pages/ContactUs';
import CourseDetails from '../components/pages/CourseDetails';
import Dashboard from '../components/pages/Dashboard';
import EarningsReports from '../components/pages/EarningsReports';
import EditProfileInstructor from '../components/pages/EditProfileInstructor';
import EditProfileStudent from '../components/pages/EditProfileStudent';
import Event from '../components/pages/Event';
import EventDetails from '../components/pages/EventDetails';
import FAQ from '../components/pages/FAQs';
import Forget from '../components/pages/Forget';
import Instructor from '../components/pages/Instructor';
import ManageCourse from '../components/pages/ManageCourse';
import NewPassword from '../components/pages/NewPassword';
import OTP from '../components/pages/OTP';
import PaymentMethod from '../components/pages/PaymentMethod';
import SignIn from '../components/pages/SignIn';
import SignUp from '../components/pages/SignUp';
import StudentsEnrolled from '../components/pages/StudentsEnrolled';
import Wishlist from '../components/pages/Wishlist';
import AuthTemplate from '../components/templates/AuthTemplate';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import AccountTemplate from '../components/templates/AccountTemplate';
import PublicTemplate from '../components/templates/PublicTemplate';
import AuthGuard from '../guards/AuthGuard';
import Checkout from '../components/pages/Checkout';
const AppRouter = createBrowserRouter([
  
    // Public Template
  {
    path:"/",
    element: <PublicTemplate />,
    children:[
      {index:true, element: <Home />},
      {path:"/pages", element: <Pages />},
      {path:"/course", element: <Course />},
      {path:"/blogs", element: <Blogs />},
      {path:"/about", element: <About />},
      {path:"/blogs", element: <Blogs />},
      {path:"/blogs", element: <Blogs />},
      {path:"/blog-details", element: <BlogDetails />},
      {path:"/contact-me", element: <ContactMe />},
      {path:"/contact-us", element: <ContactUs />},
      {path:"/course-details", element: <CourseDetails />},
      {path:"/event", element: <Event />},
      {path:"/event-details", element: <EventDetails />},
      {path:"/faqs", element: <FAQ />},
      {path:"/instructor", element: <Instructor />},
      {path:"/blogs", element: <Blogs />},

    ],
  },
    // Account Template
  {
    path: "/",
    element: <AccountTemplate />,
    children: [
      { path: "edit-profile-student", element: <EditProfileStudent /> },
      { path: "cart", element: <Cart /> },
      { path: "payment-method", element: <PaymentMethod /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "checkout", element: <Checkout /> },

    ],
  },

    // Auth Template
  {
    path: "/",
    element: <AuthTemplate />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "otp", element: <OTP /> },
      { path: "forget", element: <Forget /> },
      { path: "new-password", element: <NewPassword /> },
    ],
  },
    // Dashboard Template
    {
      path:"/",
      element:<AuthGuard />,
      children:[
  {
    path: "/",
    element: <DashboardTemplate />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "edit-profile-instructor", element: <EditProfileInstructor /> },
      { path: "manage-courses", element: <ManageCourse /> },
      { path: "students-enrolled", element: <StudentsEnrolled /> },
      { path: "earnings-reports", element: <EarningsReports /> },
      { path: "add-course", element: <AddCourse /> },
    ],
  },
      ]
    },

 /// Page Not Page
  { 
        path: "*",
         element: <div>Page Not Found</div>
  }
]);

export default AppRouter;