"use client";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

import { FormField, FormValues } from "@/types/form";

interface SelectInputProps {
  field: FormField;
  controllerField: ControllerRenderProps<FormValues, string>;
  error?: boolean;
  helperText?: string;
}

export default function SelectInput({
  field,
  controllerField,
  error = false,
  helperText,
}: SelectInputProps) {
  return (
    <FormControl
      fullWidth
      margin="normal"
      error={error}
      required={field.required}
    >
      <InputLabel>{field.name}</InputLabel>

      <Select
        {...controllerField}
        label={field.name}
        value={controllerField.value ?? ""}
      >
        {field.listOfValues1?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}