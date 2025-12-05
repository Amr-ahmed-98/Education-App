interface TextProps {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg";
  center?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Text({
  children,
  size = "md",
  center = false,
  variant = "primary",
  className = "pt-2.5 capitalize leading-relaxed font-normal",
  ...props
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-[17px]",
    lg: "text-[18px]",
  };
  const variants = {
    primary: "text-text",
    secondary: "text-text-alt",
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
