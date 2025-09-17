"use client";
import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "solid" | "outline"; // solid or outline
  href?: string; // optional URL
  icon?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "solid",
  href,
  icon,
}) => {
  const baseClasses =
    "flex items-center  gap-2 text-[16px] rounded-[0]  transition-all duration-500 ease-in-out group ";
  const variantClasses =
    variant === "solid"
      ? "bg-[#6495ED] text-[#fff] p-[9px_15px] font-bold rounded-[10px] hover:bg-white hover:text-[#6495ED]"
      : "border border-[#2C465D] text-white  disabled:opacity-50 pl-3 h-[45px] hover:bg-white hover:text-[#6495ED] hover:font-bold hover:border-[#6495ED] w-full max-w-[230px]";

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    // render as link
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && (
          <span className="border-l border-[#2C465D] flex items-center justify-center h-full ml-4 p-[5px_15px]">
            {" "}
            {icon}
          </span>
        )}
      </Link>
    );
  }

  // render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
      {icon && (
        <span className="border-l border-[#2C465D] group-hover:border-[#6495ED] flex items-center justify-center h-full ml-4 p-[5px_15px]">
          {" "}
          {icon}
        </span>
      )}
    </button>
  );
};
