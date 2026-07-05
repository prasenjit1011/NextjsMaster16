
"use client";

import TextField from "@mui/material/TextField";
import { ControllerRenderProps } from "react-hook-form";
import { FormField, FormValues } from "@/types/form";

interface TextInputProps {
  field: FormField;
  controllerField: ControllerRenderProps<FormValues, string>;
  error?: boolean;
  helperText?: string;
  type?: string;
}

export default function TextInput({
  field,
  controllerField,
  error = false,
  helperText,
  type = "text",
}: TextInputProps) {
  return (
    <TextField
      {...controllerField}
      fullWidth
      label={field.name}
      type={type}
      required={field.required}
      error={error}
      helperText={helperText}
      value={controllerField.value ?? ""}
    />
  );
}
