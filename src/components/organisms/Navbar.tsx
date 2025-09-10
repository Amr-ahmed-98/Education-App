import  { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Routes } from "./../../routes/Routes";
import { useTranslation } from "react-i18next";
import ButtonTheme from "../atoms/ButtonTheme";
import * as Icons from "./../../assets/icons/icons";
import ButtonLanguages from "../atoms/ButtonLangauges";
import Button from "../atoms/Button";
function Navbar() {
 const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const  [isScrolled , setIsScrolled ]  = useState(false);
   const location = useLocation();

 
  const toggleNavbar = ()=>{
    setOpen(!open);
  }
  const closeNavbar = ()=>{
    setOpen(false);
  }
  const handleScroll =()=>{
    if(window.scrollY > 100){
      setIsScrolled(true);
    }
    else{
       setIsScrolled(false);
    }
  }
useEffect(()=>{
  window.addEventListener('scroll',handleScroll);
  return() =>{

    window.removeEventListener('scroll',handleScroll);
  }
})
  return (
   <div 
   id="navbar"
    className={`w-full h-[80px] bg-light-primary dark:bg-dark-primary
    flex items-center justify-between bg-light  md:px-16 sm:px-10 px-4 fixed top-0 
    transition-all ease-in-out duration-300 z-50 border-b border-neutral-200 dark:border-dark-secondary
    ${isScrolled ? 
    'bg-light-primary border-b border-sky-200' : 
    'bg-light-primary'}`}>
      
      {/*Logo Section */}
      <div className="flex items-center gap-2 pr-0">
        <Link to="/" className="text-lg font-semibold text-primary
        flex items-center gap-x-2">
        <span className="text-[25px]">Skill<span className="text-secondary">Base</span></span>
        </Link>
      </div>
      {/*Hamburger menu for mobile/ Toggle menu*/}
      <div className="md:hidden">
     <button onClick={toggleNavbar} className="text-dark-secondary dark:text-light-secondary focus:outline">
          <Icons.AlignLeft className="bg-shadow-emerald-800" size={25}  />

     </button>
      </div>
   {/* Navbar items and buttons */}
   <div className={`fixed md:static top-0 right-0 h-screen md:h-auto bg-light-primary dark:bg-dark-primary
   w-full md:w-auto    border-1  md:border-none border-none
      shadow-lg md:shadow-none
   transition-all ease-in-out duration-300 transition-transform flex-1 ${open ? "translate-x-0 ": "translate-x-full"}
   md:translate-x-0 z-60`}>

{/*Logo and close icon inside toggle menu card */}
<div className="w-full md:hidden flex items-center justify-between p-4">
  {/* logo */}
     <Link to="/" className="text-lg font-semibold text-primary
        flex items-center gap-x-2">
           <span className="text-[25px]">Skill<span className="text-secondary">Base</span></span>

        </Link>
        {/* close icon */}
        <div className="md:hidden flex justify-end py-6">
         <button onClick={closeNavbar} className="text-dark-secondary dark:text-light-secondary focus:outline">
         
          <Icons.X  className="bg-shadow-emerald-800" size={25} />
     </button>
        </div>
</div>
{/*Divider */}
<div className="border-b border-neutral-300  dark:border-b-cyan-950 md:hidden">
</div>
{/*Navbar Items and button */}
<div className="flex-1 flex items-center  flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
{/* Navbar Items */}
 <ul className="flex flex-col md:flex-row items-center mx-[100px]
 md:gap-7 gap-4 md:text-base text-lg text-neutral-700
 md:font-normal font-medium ">
{Routes.map((item) => (
  <li
    key={item.id}
    className="relative group cursor-pointer text-dark-primary dark:text-light-primary"
  >
    {/* لو فيه subRoutes يطلع Dropdown */}
    {item.subRoutes ? (
      <>
        <span
          className={`hover:text-primary duration-300 ${
            location.pathname === item.path ? "text-primary" : ""
          }`}
        >
          {t(item.key)}
        </span>
        <ul
          className="absolute left-0 mt-2 w-48 bg-white dark:bg-dark-primary shadow-lg rounded-lg 
          opacity-0 group-hover:opacity-100 invisible group-hover:visible 
          transition-all duration-300 z-50"
        >
          {item.subRoutes.map((sub) => (
            <li
              key={sub.id}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Link to={sub.path}>{t(sub.key)}</Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      /* لو مفيش subRoutes يبقى لينك عادي */
      <Link
        to={item.path}
        className={`hover:text-primary duration-300 ${
          location.pathname === item.path ? "text-primary" : ""
        }`}
      >
        {t(item.key)}
      </Link>
    )}
  </li>
))}
      </ul>
{/*Nabar buttons*/}
<div className="flex flex-col md:flex-row items-center gap-4">
  <ButtonTheme />
   <ButtonLanguages/>
           <Link to="/sign-in" className="text-lg font-semibold text-primary flex items-center gap-x-2">
              <Button variant="outline1">{t(`nav.login`)}</Button>
        </Link>
           <Link to="/sign-up" className="text-lg font-semibold text-primary flex items-center gap-x-2">
              <Button variant="primary">{t(`nav.sign-up`)}</Button>
        </Link>
</div>

</div>


   </div>


{/* 
    */}
   </div>
  )
}

export default Navbar


