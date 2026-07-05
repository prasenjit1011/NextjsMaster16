import { RegisterOptions } from "react-hook-form";
import { FormField } from "@/types/form";

export const getValidationRules = (
  field: FormField
): RegisterOptions => {
  const rules: RegisterOptions = {};

  // Required validation
  if (field.required) {
    rules.required = `${field.name} is required`;
  }

  // Minimum length
  if (
    field.fieldType === "TEXT" &&
    field.minLength !== undefined
  ) {
    rules.minLength = {
      value: field.minLength,
      message: `${field.name} must be at least ${field.minLength} characters`,
    };
  }

  // Maximum length
  if (
    field.fieldType === "TEXT" &&
    field.maxLength !== undefined
  ) {
    rules.maxLength = {
      value: field.maxLength,
      message: `${field.name} must not exceed ${field.maxLength} characters`,
    };
  }

  // Email validation
  if (field.name.toLowerCase() === "email") {
    rules.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    };
  }

  return rules;
};