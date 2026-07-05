"use client";

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

import { FormField, FormValues } from "@/types/form";

interface RadioInputProps {
  field: FormField;
  controllerField: ControllerRenderProps<FormValues, string>;
  error?: boolean;
  helperText?: string;
}

export default function RadioInput({
  field,
  controllerField,
  error = false,
  helperText,
}: RadioInputProps) {
  return (
    <FormControl
      component="fieldset"
      margin="normal"
      fullWidth
      required={field.required}
      error={error}
    >
      <FormLabel component="legend">{field.name}</FormLabel>

      <RadioGroup
        {...controllerField}
        value={controllerField.value ?? ""}
      >
        {field.listOfValues1?.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}