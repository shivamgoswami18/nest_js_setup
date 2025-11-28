export const validationMessages = {
  required: (fieldName: string) =>
    `Please enter your ${fieldName?.toLowerCase()}`,
  format: (fieldName: string) =>
    `Please enter a valid ${fieldName?.toLowerCase()}`,
  atLeastOneSelected: (fieldName: string) =>
    `At least one ${fieldName} must be selected.`,
  passwordLength: (fieldName: string, minLength: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } must be at least ${minLength} characters long`,
  contactLength: (fieldName: string, minLength: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } should be ${minLength} digit.`,
  passwordComplexity: (fieldName: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } must include uppercase, lowercase, number and special character`,
  passwordsMatch: (fieldName: string, confirmFieldName: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } and ${confirmFieldName.toLowerCase()} should be same.`,
  phoneNumber: (fieldName: string) =>
    `Invalid ${fieldName.toLowerCase()} format.`,
  notSameAsField: (fieldName: string, comparedField: string) =>
    `${fieldName} should be different from ${comparedField}.`,
  maxChar: (fieldName: string, maxLength: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } should be ${maxLength} Characters.`,
  maxLength: (fieldName: string, maxLength: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } should be maximum ${maxLength} digits.`,
  minLength: (fieldName: string, minLength: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } should be minimum ${minLength} digits.`,
  positiveNumber: (fieldName: string) =>
    `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase()
    } should be positive`,
  url: (field: string) => `${field} should be a valid URL`,
  greaterThan: (fieldName: string, comparedField: string) =>
    `${comparedField} should be greater than or equal to ${fieldName}.`,
  greaterTime: (fieldName: string, comparedField: string) =>
    `${comparedField} should be greater than ${fieldName}.`,
  lessThan: (fieldName: string, comparedField: string) =>
    `${comparedField} should be less than or equal to ${fieldName}.`,
  otpFormat: (fieldName: string) => `${fieldName} must be 6 digits`,
  minDuration: (min: number, fieldName: string) =>
    `${fieldName} must be at least ${min} minutes.`,
};

export const fileLimitErrorMessage =
  "File size is too large! (more than 1 mb).";
export const fileTypePDFErrorMessage = "Only PDF is allowed.";
export const fileTypePDFJPGPNGErrorMessage =
  "Only PDF, JPEG and PMG are allowed.";
export const fileTypeImagerrorMessage = "Only image is allowed.";

export const InputPlaceHolder = (fieldName: string) => {
  return `Enter ${fieldName?.toLowerCase()}`;
};

export const SelectPlaceHolder = (fieldName: string) => {
  return `Select ${fieldName?.toLowerCase()}`;
};

export const OnlyDigits = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const key = event.key;
  if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Tab") {
    event.preventDefault();
  }
};

export function formatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(3)} KB`;
  } else {
    return `${(sizeInBytes / (1024 * 1024)).toFixed(3)} MB`;
  }
}

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}(?![^.\s])/;
export const numberRegex = /^\d{10}$/;
export const digitRegex = /^\d*$/;
export const aadharRegex = /^\d{12}$/;
export const zipcodeRegex = /^\d{6}$/;
export const bankNumberRegex = /^\{8,17}$/;
export const ifscRegex = /^.{11}$/;
export const panRegex = /^.{10}$/;
export const otpRegex = /^\d{6}$/;
export const otpTypeRegex = /^\d{0,6}$/;
export const whiteSpaceRegex = /^\s/;
export const durationFormatRegex = /^(?:[1-9]\d{0,2}):(0\d|[1-5]\d)$/;
export const durationValueRegex = /[^0-9:]/g;
export const namePattern = /^(\w+)\s+\w+/;
export const removeAbout = /^about /i;
export const simpleTitleBulletPointRemoveRegex = /^\d+\.\s?/;
export const MistakeTitleBulletPointRemoveRegex = /^Mistake \d+:/;
export const supportingPattern = /You're now supporting ([^']+)'s goal to (.+)/;
export const FindWord = (word: string, str: string) => {
  return str.split("/").some(function (w) {
    return w === word;
  });
};
