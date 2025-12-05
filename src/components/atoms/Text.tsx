interface TextProps {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg";
  center?: boolean;
  variant?: "primary" | "secondary" | "gray" | "light";
  className?: string;
}

export default function Text({
  children,
  size = "md",
  center = false,
  variant = "primary",
  className = "pt-2.5 capitalize leading-relaxed font-semibold",
  ...props
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-[17px]",
    lg: "text-[18px]",
  };
  const variants = {
    primary: "text-bg",
    secondary: "text-dark",
    gray: "text-gray-500",
    light: "text-gray",
  };
  const centerClass = center ? "text-center" : "";
  const classesHeading = `${sizes[size]}  ${variants[variant]} ${centerClass} ${className}`;
  return (
    <>
      <p className={classesHeading} {...props}>
        {children}
      </p>
    </>
  );
}
