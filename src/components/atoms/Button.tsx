import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline1"
    | "outline2"
    | "ghost"
    | "white";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
  path?: string;
  center?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  path,
  center = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#3972FF] text-white hover:bg-[#3972FF]  capitalize focus:ring-blue-500 cursor-pointer",
    secondary:
      "bg-[#EE4A62] text-[#ffffff] hover:bg-[#EE4A62] capitalize hover:text-white focus:white cursor-pointer",
    outline1:
      "border-2 border-[#3972FF] text-[#3972FF]  capitalize focus:ring-blue-500 cursor-pointer",
    outline2:
      "border-2 border-[#EE4A62] text-[#EE4A62]  capitalize focus:ring-blue-500 cursor-pointer",
    ghost:
      "text-[#00B7C1] hover:bg-blue-50 focus:ring-blue-500 capitalize cursor-pointer",
    white:
      "bg-white text-bg dark:text-black  capitalize focus:white cursor-pointer",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-[18px]",
    xl: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} rounded-lg ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const content = (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className={center ? "flex justify-center" : ""}>
      {path ? <Link to={path}>{content}</Link> : content}
    </div>
  );
};

export default Button;
