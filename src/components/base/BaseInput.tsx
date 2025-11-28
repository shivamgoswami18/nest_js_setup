import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CelebrationPhotoIcon } from "@/assets/icons/CommonIcons";
import { commonLabel } from "@/components/constants/Common";

interface BaseInputProps {
  autoComplete?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: string;
  value?: string;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  handleBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  touched?: boolean;
  maxLength?: number;
  rows?: number;
  cols?: number;
  onFileChange?: (file: File | null) => void;
  helperText?: string;
  helperTextClassName?: string;
  labelClassName?: string;
  accept?: string;
  fileButtonLabel?: React.ReactNode;
  fileButtonClassName?: string;
  children?: React.ReactNode;
}

const BaseInput: React.FC<BaseInputProps> = ({
  autoComplete,
  className,
  defaultValue,
  disabled,
  error,
  fullWidth,
  name,
  onChange,
  placeholder,
  label,
  readOnly,
  required,
  type,
  value,
  prepend,
  append,
  handleBlur,
  touched,
  maxLength,
  rows = 4,
  cols,
  onFileChange,
  helperText,
  helperTextClassName,
  labelClassName,
  accept,
  fileButtonLabel,
  fileButtonClassName,
  children,
  onKeyDown,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderInputField = () => {
    const commonProps = {
      id: name,
      name,
      className: `w-full mb-0 focus:outline-none focus:ring-0 text-textSm font-medium text-darkGray py-[12.5px] px-[14px] rounded-custom  placeholder:text-textSm ${className} ${
        error && touched ? "border-red-500" : "border-0"
      }`,
      autoComplete,
      defaultValue,
      disabled,
      placeholder,
      readOnly,
      onBlur: handleBlur,
      onKeyDown,
      value,
      onChange,
      maxLength,
      "aria-describedby": error && touched ? `error-${name}` : undefined,
    };

    if (type === "textarea") {
      return (
        <InputTextarea
          {...commonProps}
          rows={rows}
          cols={cols}
          autoResize={false}
        />
      );
    }

    if (type === "file") {
      return (
        <div className="w-full">
          <label htmlFor={name} className="flex flex-col items-center w-full">
            <input
              id={name}
              name={name}
              type="file"
              accept={accept}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                onFileChange?.(file);
              }}
              disabled={disabled}
            />
            <span
              className={
                fileButtonClassName ??
                "inline-flex items-center gap-2 boundary !border !border-softGray rounded-custom px-9 py-3 sm:text-base text-sm cursor-pointer mb-3 sm:mt-4 mt-4 bg-white relative sm:font-semibold overflow-hidden"
              }
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(name ?? "")?.click();
              }}
            >
              {fileButtonLabel || (
                <>
                  <CelebrationPhotoIcon />
                  {commonLabel.ChooseImage}
                </>
              )}
            </span>
            {children}
          </label>
        </div>
      );
    }

    return <InputText {...commonProps} type={getInputType()} />;
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div className={`${fullWidth ? "w-full" : ""} text-start`}>
      {label && (
        <label
          htmlFor={name}
          className={`${labelClassName} block font-medium text-gray text-mini mb-[3px] leading-[160%] tracking-[-0.02rem]`}
        >
          {label}
          {required && <span className="text-black">*</span>}
        </label>
      )}
      {helperText && (
        <div className={`${helperTextClassName}`}>{helperText}</div>
      )}
      <div className="flex items-center relative">
        {prepend && (
          <span className="px-3 py-2 bg-gray border border-r-0">{prepend}</span>
        )}

        {renderInputField()}

        {append && (
          <span className="px-3 py-2 bg-gray border border-l-0">{append}</span>
        )}

        {type === "password" && (
          <button
            type="button"
            onClick={handleClickShowPassword}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer bg-transparent border-none p-0 m-0"
          >
            {showPassword ? (
              <FaEyeSlash className="text-coolGray w-[16px] h-[16px]" />
            ) : (
              <FaEye className="text-coolGray w-[16px] h-[16px]" />
            )}
          </button>
        )}
      </div>

      {error && touched && (
        <small id={`error-${name}`} className="p-error text-[11.375px]">
          {error}
        </small>
      )}
    </div>
  );
};

export default BaseInput;
