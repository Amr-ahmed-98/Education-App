import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
}

export default function Input({
  icon,
  label,
  className,
  ...props
}: InputProps) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="text-gray-700 font-medium text-md">{label}</label>
      )}

      <div className="flex items-center gap-3 w-full border rounded-xl px-4 py-3 my-2 bg-light shadow-sm focus-within:border-primary transition">
        {/* Icon inside the input */}
        {icon && <span className="text-gray-500 text-xl">{icon}</span>}

        {/* The actual input */}
        <input
          className={`w-full outline-none h-4 bg-transparent placeholder:text-gray-400 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
