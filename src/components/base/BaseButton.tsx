import React from "react";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { FaSpinner } from "react-icons/fa";

interface BaseButtonProps {
  label?: string;
  type?: "button" | "reset" | "submit";
  children?: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  disable?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  loader?: boolean;
  dataTest?: string;
  divClass?: string;
  outlined?: boolean;
  rounded?: boolean;
  text?: boolean;
  noPadding?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "link"
    | "light"
    | "black"
    | "white";
}

const BaseButton: React.FC<BaseButtonProps> = ({
  label,
  type = "button",
  onClick,
  disable,
  className = "",
  startIcon,
  endIcon,
  size = "md",
  loader,
  children,
  dataTest,
  divClass = "",
  outlined = false,
  rounded = false,
  text = false,
  noPadding = false,
  color = "white",
}) => {
  const dataTestProp = `button-${
    label ? label.replace(/\s+/g, "-").toLowerCase() : type
  }`;
  const sizeClass = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const colorConfig = {
    primary: {
      bg: "bg-blue-500",
      text: "text-blue-500",
      border: "border-blue-500",
    },
    secondary: {
      bg: "bg-gray-500",
      text: "text-gray-500",
      border: "border-gray-500",
    },
    success: {
      bg: "bg-green-500",
      text: "text-green-500",
      border: "border-green-500",
    },
    danger: {
      bg: "bg-red-500",
      text: "text-red-500",
      border: "border-red-500",
    },
    warning: {
      bg: "bg-yellow-500",
      text: "text-yellow-500",
      border: "border-yellow-500",
    },
    info: {
      bg: "bg-teal-500",
      text: "text-teal-500",
      border: "border-teal-500",
    },
    link: {
      bg: "bg-transparent",
      text: "text-blue-500",
      border: "border-transparent",
    },
    light: {
      bg: "bg-gray-200",
      text: "text-gray-800",
      border: "border-gray-200",
    },
    black: {
      bg: "bg-black",
      text: "text-white",
      border: "border-black",
    },
    white: {
      bg: "bg-wite",
      text: "text-black",
      border: "border-white",
    },
  };

  const currentColor = colorConfig[color];
  const borderRegex = /border-(?!\[)/;
  const hasCustomBorder =
    borderRegex.exec(className) || className.includes("border[");

  return (
    <div className={divClass}>
      <Button
        type={type}
        onClick={onClick}
        disabled={disable || loader}
        className={classNames(
          "inline-flex items-center rounded-custom gap-gapSm focus:ring-0 focus:shadow-none focus:outline-none border-0",
          !noPadding && sizeClass[size],
          outlined
            ? `bg-transparent ${currentColor.text} ${
                !hasCustomBorder && currentColor.border
              }`
            : `${currentColor.bg} text-white ${
                !hasCustomBorder && currentColor.border
              }`,
          text && "bg-transparent border-transparent",
          className
        )}
        data-testid={dataTest ?? dataTestProp}
        outlined={outlined}
        rounded={rounded}
        text={text}
      >
        {loader ? (
          <FaSpinner className="animate-spin text-base inline-block min-h-6" />
        ) : (
          <>
            {startIcon && (
              <span className="flex justify-center items-center">
                {startIcon}
              </span>
            )}
            {label ?? children}
            {endIcon && (
              <span className="flex justify-center items-center">
                {endIcon}
              </span>
            )}
          </>
        )}
      </Button>
    </div>
  );
};

export default BaseButton;
