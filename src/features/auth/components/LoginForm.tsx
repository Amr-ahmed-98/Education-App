// src/components/auth/LoginForm.tsx
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useTranslation } from "react-i18next";
import Button from "@/components/atoms/Button";
import * as img from '../../../assets/images/images';
import * as icon from '../../../assets/icons/icons';
import { Link } from "react-router-dom";
interface Props {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: Props) {
  const [form, setForm] = useState({ email: "", password: "" });
  const { mutate, isPending, isError } = useLogin(onSuccess);
    const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="flex flex-col md:flex-row  w-full gap-10 my-[30px] ">
  <div className="text-center relative min-h-[70vh] md:min-h-[90vh] basis-1/2 rounded-[20px] p-[50px] bg-[linear-gradient(90deg,#4775C1_20%,#4775C1_20%,#859CBF_100%,#AECDFD_100%,#5184D5_100%)] dark:bg-[linear-gradient(90deg,#1C242F_20%,#1C242F_20%,#1C242F_100%,#1C242F_100%,#1C242F_100%)]">
    <h2 className="text-3xl text-white mb-[20px]">{t("Login.left.title1")} <span className="text-primary">{t("Login.left.title2")}</span></h2>
    <p className="text-[1.2rem] text-white mb-[30px] ">{t("Login.left.subtitle")}</p>
    <Button className="" variant="outline2" size="lg" path="/sign-up">{t("Login.left.btn")} </Button>
   <div className="absolute mt-[50px] bottom-0 left-[0%] ">
     <div className="bg-[#A1BFE9] dark:bg-dark-primary w-[50%] mx-auto h-[60%] aspect-square relative overflow-hidden rounded-[50%]  ">
     <img className="w-[100%] top-0 left-0  h-full object-cover" src={img.signin} alt="error "/>
    </div>
     
   </div>
  </div>

    <form  
      onSubmit={handleSubmit}
      className=" basis-1/2 px-[10px] md:px-[100px] py-[50px] text-center flex flex-col"
    >
      <h2 className=" font-bold text-center text-primary text-4xl mb-[20px]">{t("Login.right.title")}</h2>
        <div className="relative mb-[25px]">
         <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-full border text-gray-700 dark:text-gray-400 py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        required
         />
         <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400">
        <icon.Mail size={18}/>
        </div>
     </div>
         <div className="relative mb-[25px]">
      <input
        type={show ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full rounded-full border text-gray-700 dark:text-gray-400 py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        required
      />
        <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-400"
              >
                {show ? <icon.EyeOff size={18} /> : <icon.Eye size={18} />}
              </button>
</div>
<div className="flex flex-row justify-between mb-[20px]">
    <div className="flex flex-row"> 
      <input className="mr-[10px] w-[20px] " type="checkbox" />
      <p className="mr-[10px] text-[18px] dark:text-gray-400">{t("Login.right.checkbox")}</p>
    </div>
    <Link className="text-[20px] dark:text-gray-400"  to="/forget">{t("Login.right.forget")}</Link>
</div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-primary rounded-3xl text-white mb-[20px]  py-[14px]"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
      <div className="flex items-center w-full">
         <div className="flex-1 h-[1px] bg-gray-400" />
        <p className="text-gray-400 px-2 whitespace-nowrap" >{t("Login.right.or")}</p>
         <div className="flex-1 h-[1px] bg-gray-400" />
      </div>
<Button className="my-[25px] w-full !rounded-[30px] " size="lg" variant="secondary"><icon.FaGoogle className="mx-[10px]" size={25} />{t("Login.right.method1")}</Button>
<Button  className="w-full !rounded-[30px]" size="lg"  variant="primary"><icon.FaXTwitter className="mx-[10px]" size={25} />{t("Login.right.method1")}</Button>
<p className="my-[20px] text-gray-400">{t("Login.right.link1")} <Link to="/sign-up" className="text-primary">{t("Login.right.link2")}</Link></p>
      {isError && (
        <p className="text-red-500 text-sm">Login failed. Check credentials.</p>
      )}
    </form>
    </div>

  );
}
