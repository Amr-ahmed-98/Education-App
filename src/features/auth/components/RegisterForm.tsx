// src/components/auth/RegisterForm.tsx
import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";

interface Props {
  onSuccess: () => void;
}

export default function RegisterForm({ onSuccess }: Props) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const { mutate, isPending, isError } = useRegister(onSuccess);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form); // استدعاء API
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mx-auto p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold text-center">Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

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
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isPending ? "Registering..." : "Register"}
      </button>

      {isError && <p className="text-red-500 text-sm">Registration failed. Try again.</p>}
    </form>
  );
}
