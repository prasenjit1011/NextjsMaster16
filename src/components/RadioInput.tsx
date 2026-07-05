"use client";

import {
  Box,
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
      fullWidth
      margin="normal"
      required={field.required}
      error={error}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <FormLabel
          sx={{
            minWidth: 130,
            color: "text.primary",
            fontWeight: 500,
          }}
        >
          {field.name}
        </FormLabel>

        <RadioGroup
          row
          {...controllerField}
          value={controllerField.value ?? ""}
          sx={{
            flex: 1,
          }}
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
      </Box>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}