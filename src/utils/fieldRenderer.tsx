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

export function fieldRenderer({
  field,
  control,
  errors,
}: FieldRendererProps) {
  const rules = getValidationRules(field);

  return (
    <Controller
      key={field.id}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField }) => {
        switch (field.fieldType) {
          case "TEXT":
            return (
              <TextInput
                field={field}
                controllerField={controllerField}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message as string}
              />
            );

          case "LIST":
            return (
              <SelectInput
                field={field}
                controllerField={controllerField}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message as string}
              />
            );

          case "RADIO":
            return (
              <RadioInput
                field={field}
                controllerField={controllerField}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message as string}
              />
            );

          default:
            return null;
        }
      }}
    />
  );
}