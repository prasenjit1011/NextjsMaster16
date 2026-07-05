
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
      error={error}
      helperText={helperText}
      value={controllerField.value ?? ""}
    />
  );
}
// import { ControllerRenderProps, FieldValues } from "react-hook-form";
// import { FormField } from "@/types/form";

// interface TextInputProps {
//   field: FormField;
//   controllerField: ControllerRenderProps<FieldValues, string>;
//   error: boolean;
//   helperText: string;
// }

// export default function TextInput({
//   field,
//   controllerField,
//   error,
//   helperText,
// }: TextInputProps) {
//   return (
//     <input
//       {...controllerField}
//       type={field.fieldType === "PASSWORD" ? "password" : "text"}
//       placeholder={field.placeholder}
//     />
//   );
// }


// "use client";

// import TextField from "@mui/material/TextField";
// import { ControllerRenderProps } from "react-hook-form";

// import { FormField, FormValues } from "@/types/form";

// interface TextInputProps {
//   field: FormField;
//   controllerField: ControllerRenderProps<FormValues, string>;
//   error?: boolean;
//   helperText?: string;
// }

// export default function TextInput({
//   field,
//   controllerField,
//   error = false,
//   helperText,
// }: TextInputProps) {
//   return (
//     <TextField
//       {...controllerField}
//       value={controllerField.value ?? ""}
//       fullWidth
//       margin="normal"
//       variant="outlined"
//       label={field.name}
//       required={field.required}
//       error={error}
//       helperText={helperText}
//     />
//   );
// }