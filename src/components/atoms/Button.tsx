
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline1" | "outline2" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
}

const Button =  ({ 
  children, 
  variant = "primary", 
  size = "md", 
  disabled = false, 
  loading = false,
  fullWidth = false,
  onClick, 
  type = "button",
  className = "",
  ...props 
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#3972FF] text-white hover:bg-[#3972FF]  capitalize focus:ring-blue-500 cursor-pointer",
    secondary: "bg-[#EE4A62] text-dark-primary hover:bg-[#31D3DC] capitalize hover:text-white focus:ring-gray-500 cursor-pointer",
    outline1: "border-2 border-[#3972FF] text-[#3972FF] hover:bg-[#3972FF] capitalize hover:text-white focus:ring-blue-500 cursor-pointer" ,
    outline2: "border-2 border-[#EE4A62] text-[#EE4A62] hover:bg-[#EE4A62] capitalize hover:text-white focus:ring-blue-500 cursor-pointer" ,
    ghost: "text-[#00B7C1] hover:bg-blue-50 focus:ring-blue-500 capitalize cursor-pointer",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
