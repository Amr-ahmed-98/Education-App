// src/components/auth/LoginForm.tsx
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useTranslation } from "react-i18next";
import Button from "@/components/atoms/Button";
interface Props {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: Props) {
  const [form, setForm] = useState({ email: "", password: "" });
  const { mutate, isPending, isError } = useLogin(onSuccess);
  const { t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-[30px]">
  <div className="text-center bg-primary min-h-[82vh]">
    <h2>{t("Login.left.title")}</h2>
    <p>{t("Login.left.subtitle")}</p>
    <Button path="/sign-up">{t("Login.left.btn")}</Button>
  </div>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mx-auto p-4 border rounded-lg shadow"
    >
      <h2 className="text-xl font-bold text-center">Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>

      {isError && (
        <p className="text-red-500 text-sm">Login failed. Check credentials.</p>
      )}
    </form>
    </div>

  );
}
