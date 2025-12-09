// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Routes } from "./../../routes/Routes";
// import { useTranslation } from "react-i18next";
// import { Heart, ShoppingCart, X, AlignLeft } from "./../../assets/icons/icons";
// import Button from "../atoms/Button";
// import { useProfile } from "@/features/auth/hooks/useProfile";
// import { useLotout } from "@/features/auth/hooks/useLogout";
// import { ENV } from "@/config/env";
// import Cookies from "js-cookie";

// export default function Navbar() {
//   const { t } = useTranslation();
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const location = useLocation();

//   const toggleNavbar = () => {
//     setOpen(!open);
//   };
//   const closeNavbar = () => {
//     setOpen(false);
//   };

//   const token = Cookies.get(ENV.ACCESS_TOKEN_KEY);
//   const { data: profile, isLoading } = useProfile();
//   const logout = useLotout();

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });
//   const firstLetter = profile?.email
//     ? profile.email.charAt(0).toUpperCase()
//     : "?";
//   return (
//     <nav
//       className={`fixed top-0 z-50 h-20 w-full backdrop-blur-xl transition-all duration-300 ease-in-out
//    ${
//      isScrolled
//        ? "bg-bg-alt bg-bg/30 bg-dark:bg-alt shadow-md backdrop-blur-xl"
//        : "bg-bg bg-transparent shadow-sm"
//    }`}
//     >
//       {/*Logo Section */}
//       <div className="flex items-center gap-2 pr-0">
//         <Link
//           to="/"
//           className="text-lg font-semibold text-primary
//         flex items-center gap-x-2"
//         >
//           <span className="text-[25px]">
//             Skill<span className="text-secondary">Base</span>
//           </span>
//         </Link>
//       </div>
//       {/*Mobile toggle*/}
//       <div className="md:hidden">
//         <button
//           onClick={toggleNavbar}
//           className="text-dark-secondary dark:text-light-secondary focus:outline"
//         >
//           <AlignLeft className="bg-shadow-emerald-800" size={25} />
//         </button>
//       </div>
//       {/* Navbar content */}
//       <div
//         className={`fixed md:static top-0 right-0 h-screen md:h-auto bg-light-primary dark:bg-dark-primary
//    w-full md:w-auto    border-1  md:border-none border-none
//       shadow-lg md:shadow-none
//    transition-all ease-in-out duration-300 transition-transform flex-1 ${
//      open ? "translate-x-0 " : "translate-x-full"
//    }
//    md:translate-x-0 z-60`}
//       >
//         {/*Close icon on mobile */}
//         <div className="w-full md:hidden flex items-center justify-between p-4">
//           {/* logo */}
//           <Link
//             to="/"
//             className="text-lg font-semibold text-primary
//         flex items-center gap-x-2"
//           >
//             <span className="text-[25px]">
//               Skill<span className="text-secondary">Base</span>
//             </span>
//           </Link>
//           {/* close icon */}
//           <div className="md:hidden flex justify-end py-6">
//             <button
//               onClick={closeNavbar}
//               className="text-dark-secondary dark:text-light-secondary focus:outline"
//             >
//               <X className="bg-shadow-emerald-800" size={25} />
//             </button>
//           </div>
//         </div>
//         {/*Divider */}
//         <div className="border-b border-neutral-300  dark:border-b-cyan-950 md:hidden"></div>
//         {/*Navbar Items and button */}
//         <div className="flex-1 flex items-center  flex-col md:flex-row  justify-between gap-6 p-6 md:p-0">
//           {/* Navbar Items */}
//           <ul
//             className="flex flex-col md:flex-row items-center mx-auto
//  md:gap-4 gap- md:text-base text-lg text-neutral-700
//  md:font-normal font-medium "
//           >
//             {Routes.map((item) => (
//               <li
//                 key={item.id}
//                 className="relative group cursor-pointer text-dark-primary text-2xl mb-[15px] md:text-sm dark:text-light-primary"
//               >
//                 {/* لو فيه subRoutes يطلع Dropdown */}
//                 {item.subRoutes ? (
//                   <>
//                     <span
//                       className={`hover:text-primary duration-300 ${
//                         location.pathname === item.path ? "text-primary" : ""
//                       }`}
//                     >
//                       {t(item.key)}
//                     </span>
//                     <ul
//                       className="absolute left-0 mt-2 w-48 bg-white dark:bg-dark-primary shadow-lg rounded-lg
//           opacity-0 group-hover:opacity-100 group-active:opacity-100 invisible group-hover:visible group-active:visible
//           transition-all duration-300 z-50"
//                     >
//                       {item.subRoutes.map((sub) => (
//                         <li
//                           key={sub.id}
//                           className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                         >
//                           <Link to={sub.path} onClick={closeNavbar}>
//                             {t(sub.key)}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     onClick={closeNavbar}
//                     className={`hover:text-primary duration-300 ${
//                       location.pathname === item.path ? "text-primary" : ""
//                     }`}
//                   >
//                     {t(item.key)}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/*Right side buttons*/}
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             <Link to="cart">
//               {" "}
//               <ShoppingCart />
//             </Link>
//             <Link to="wishlist">
//               {" "}
//               <Heart />
//             </Link>

//             {/* ✅ لو فيه توكن */}
//             {token && !isLoading && profile ? (
//               <div className="relative">
//                 <div
//                   onClick={() => setDropdownOpen((prev) => !prev)}
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
//                     {firstLetter}
//                   </div>
//                   <span className="text-sm">{profile.email}</span>
//                 </div>

//                 {/* Dropdown */}
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-dark-primary shadow-lg rounded-lg py-2 z-50">
//                     <Link
//                       to="/profile"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       Profile
//                     </Link>
//                     <Link
//                       to="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       Dashboard
//                     </Link>

//                     <Button
//                       variant="outline2"
//                       onClick={logout}
//                       className="w-full"
//                     >
//                       Logout
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               //  لو مافيش توكن
//               <>
//                 <Button variant="outline1" size="md" path="/sign-in">
//                   {t("nav.login")}
//                 </Button>
//                 <Button variant="outline1" size="md" path="/sign-up">
//                   {t("nav.sign-up")}
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {/*
//        */}
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListMinus, X, ChevronDown } from "lucide-react";
import { Routes } from "../../routes/Routes";
import Button from "../atoms/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setOpen((prev) => !prev);
  const closeNavbar = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Separate main and secondary pages
  const mainPageSections = Routes.filter((r) => r.id <= 5);
  const routingPages = Routes.filter((r) => r.id > 5);

  return (
    <nav
      className={`fixed top-0 z-50 h-18 w-full backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-bg-alt bg-bg/30 bg-dark:bg-alt shadow-md backdrop-blur-xl"
          : "bg-bg bg-transparent shadow-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 sm:px-10 md:px-0">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold md:text-2xl">
          <span className="text-primary">Survey</span>{" "}
          <span className="text-bg">Land</span>
        </Link>

        {/* Desktop Links */}
        <ul className="text-dark dark:text-light hidden items-center gap-4 text-base font-medium md:flex">
          {mainPageSections.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="text-dark dark:text-light active:text-primary focus:text-primary relative transition-colors duration-200"
              >
                {item.key}
                <span></span>
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative">
            {dropdownOpen && (
              <div className="bg-bg dark:bg-dark-secondary absolute top-full left-0 mt-2 w-48 overflow-hidden rounded-md shadow-lg">
                {routingPages.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={closeNavbar}
                    className="block px-4 py-2 text-base transition-colors active:bg-gray-200 dark:active:bg-gray-700"
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/sign-in">
            <Button size="md" variant="outline1">
              Login
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button size="md" variant="primary">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-dark dark:text-light">
            <ListMinus size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-bg fixed top-0 right-0 z-40 h-screen w-full transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-bg flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-4xl font-bold md:text-2xl">
            <span className="text-primary">Survey</span>{" "}
            <span className="text-bg">Land</span>
          </Link>
          <button onClick={closeNavbar} className="text-dark dark:text-light">
            <X size={45} />
          </button>
        </div>

        <ul className="text-dark dark:text-light mt-15 flex flex-col items-center gap-6 px-4 text-lg font-medium">
          {mainPageSections.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                onClick={closeNavbar}
                className="active:text-primary focus:text-primary text-3xl md:text-2xl"
              >
                {item.key}
              </Link>
            </li>
          ))}

          {/* Dropdown Mobile */}
          <li className="w-full">
            <div
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="mb-5 flex cursor-pointer items-center justify-center rounded text-3xl transition active:bg-gray-200 md:text-2xl dark:active:bg-gray-700"
            >
              Pages
              <ChevronDown
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {routingPages.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={closeNavbar}
                    className="active:text-primary focus:text-primary my-2 flex cursor-pointer items-center justify-center text-3xl md:text-2xl"
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="mt-6 flex w-full flex-col items-center gap-4">
            <Link to="/sign-in">
              <Button
                className="bg-primary rounded-md px-4 py-2 text-white transition active:opacity-90"
                size="md"
                variant="outline2"
              >
                Login
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button
                className="bg-primary rounded-md px-4 py-2 text-white transition active:opacity-90"
                size="md"
                variant="secondary"
              >
                Sign Up
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
