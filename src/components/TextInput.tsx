"use client";

import TextField from "@mui/material/TextField";
import { ControllerRenderProps } from "react-hook-form";

import { FormField, FormValues } from "@/types/form";

interface TextInputProps {
  field: FormField;
  controllerField: ControllerRenderProps<FormValues, string>;
  error?: boolean;
  helperText?: string;
}

export default function TextInput({
  field,
  controllerField,
  error = false,
  helperText,
}: TextInputProps) {
  return (
    <TextField
      {...controllerField}
      value={controllerField.value ?? ""}
      fullWidth
      margin="normal"
      variant="outlined"
      label={field.name}
      required={field.required}
      error={error}
      helperText={helperText}
    />
  );
}