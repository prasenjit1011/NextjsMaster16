import { Controller, Control, FieldErrors } from "react-hook-form";

import { FormField } from "@/types/form";
import TextInput from "@/components/TextInput";
import SelectInput from "@/components/SelectInput";
import RadioInput from "@/components/RadioInput";
import { getValidationRules } from "@/lib/validation";

interface FieldRendererProps {
  field: FormField;
  control: Control<any>;
  errors: FieldErrors<any>;
}

export function FieldRenderer({
  field,
  control,
  errors,
}: FieldRendererProps) {
  const rules = getValidationRules(field);

  return (
    <Controller
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField }) => {
        const error = !!errors?.[field.name];
        const helperText =
          (errors?.[field.name]?.message as string) || "";

        switch (field.fieldType) {
          case "TEXT":
            return (
              <TextInput
                field={field}
                controllerField={controllerField}
                error={error}
                helperText={helperText}
              />
            );

          case "PASSWORD":
            return (
              <TextInput
                field={field}
                controllerField={controllerField}
                error={error}
                helperText={helperText}
                type="password"
              />
            );

          case "LIST":
            return (
              <SelectInput
                field={field}
                controllerField={controllerField}
                error={error}
                helperText={helperText}
              />
            );

          case "RADIO":
            return (
              <RadioInput
                field={field}
                controllerField={controllerField}
                error={error}
                helperText={helperText}
              />
            );

          default:
            return null;
        }
      }}
    />
  );
}