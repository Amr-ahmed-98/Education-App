// src/components/auth/RegisterForm.tsx
import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import {Button} from "@/components/atoms/Button";
import { useTranslation } from "react-i18next";
import * as img from '../../../assets/images/images';
import * as icon from '../../../assets/icons/icons';

import { Link } from "react-router-dom";

interface Props {
  onSuccess: () => void;
}

export default function RegisterForm({ onSuccess }: Props) {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const { mutate, isPending, isError } = useRegister(onSuccess);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form); // استدعاء API
     localStorage.setItem("resetEmail", form.email);
  };

  return (
      <div className="flex flex-col md:flex-row  w-full gap-10 my-[30px] ">
          <div className="text-center relative min-h-[70vh] md:min-h-[90vh] basis-1/2 rounded-[20px] p-[50px] bg-[linear-gradient(90deg,#4775C1_20%,#4775C1_20%,#859CBF_100%,#AECDFD_100%,#5184D5_100%)] dark:bg-[linear-gradient(90deg,#1C242F_20%,#1C242F_20%,#1C242F_100%,#1C242F_100%,#1C242F_100%)]">
            <h2 className="text-3xl text-white mb-[20px]">{t("register.left.title1")} <span className="text-primary">{t("register.left.title2")}</span></h2>
            <p className="text-[1.2rem] text-white mb-[30px] ">{t("register.left.subtitle")}</p>
            <Button variant="outline2" size="lg" path="/sign-in">{t("register.left.btn")} </Button>
           <div className="absolute bottom-0 left-[0%] ">
             <div className="bg-[#A1BFE9] dark:bg-dark-primary w-[50%] mx-auto h-[60%] aspect-square relative overflow-hidden rounded-[50%]  ">
             <img className="w-[100%] top-0 left-0  h-full object-cover" src={img.signin} alt="error "/>
            </div>
             
           </div>
          </div>
    <form onSubmit={handleSubmit}
  className=" basis-1/2 px-[10px] md:px-[100px] py-[50px] text-center flex flex-col"    >
      <h2 className=" font-bold text-center text-primary text-4xl mb-[20px]">{t("register.right.title1")}</h2>
 <div className="relative mb-[25px]">
      <input
        type="text"
        name="name"
        placeholder={t("register.right.input1")}
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-full border text-gray-700 dark:text-gray-400 py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        required
      />
</div>
 <div className="relative mb-[25px]">

      <input
        type="email"
        name="email"
        placeholder={t("register.right.input2")}
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-full border text-gray-700 dark:text-gray-400 py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        required
      />
</div>
 <div className="relative mb-[25px]">

      <input
        type="password"
        name="password"
        placeholder={t("register.right.input3")}
        value={form.password}
        onChange={handleChange}
        className="w-full rounded-full border text-gray-700 dark:text-gray-400 py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        required
      />
</div>
<div className="flex flex-row justify-between mb-[20px]">
    <div className="flex flex-row"> 
      <input className="mr-[10px] w-[20px] " type="checkbox" />
      <p className="mr-[10px] text-[18px] dark:text-gray-400">{t("register.right.agree")}</p>
    </div>
</div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-primary rounded-3xl text-white mb-[20px]  py-[14px]"
      >
        {isPending ? "Registering..." : t("register.right.title1")}
      </button>
      <div className="flex items-center w-full">
         <div className="flex-1 h-[1px] bg-gray-400" />
        <p className="text-gray-400 px-2 whitespace-nowrap" >{t("register.right.text")}</p>
         <div className="flex-1 h-[1px] bg-gray-400" />
      </div>
<Button className="my-[25px] w-full !rounded-[30px] " size="lg" variant="secondary"><icon.FaGoogle className="mx-[10px]" size={25} />{t("register.right.method1")}</Button>
<Button  className="w-full !rounded-[30px]" size="lg"  variant="primary"><icon.FaXTwitter className="mx-[10px]" size={25} />{t("register.right.method1")}</Button>
<p className="my-[20px] text-gray-400">{t("register.right.span1")} <Link to="/sign-up" className="text-primary">{t("register.right.span2")}</Link></p>
      {isError && <p className="text-red-500 text-sm">Registration failed. Try again.</p>}
    </form>
    </div>
  );
}
