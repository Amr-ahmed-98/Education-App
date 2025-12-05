interface TitleProps {
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  center?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Title({
  children,
  size = "md",
  variant = "primary",
  className = "p-0 capitalize font-bold",
  ...props
}: TitleProps) {
  const sizes = {
    sm: "text-[17px]",
    md: "text-[23px]",
    lg: "text-[28px]",
    xl: "text-[45px]",
    xxl: "text-[50px]",
    xxxl: "text-[60px]",
  };
  const variants = {
    primary: "text-text",
    secondary: "text-text-alt",
  };
  const classesHeading = `${sizes[size]}  ${variants[variant]}  ${className}`;
  return (
    <>
      <h2 className={classesHeading} {...props}>
        {children}
      </h2>
    </>
  );
}
