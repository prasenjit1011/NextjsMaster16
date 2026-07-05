import { FormField, FormValues } from "@/types/form";

/**
 * Builds React Hook Form defaultValues from the JSON schema.
 */
export function getDefaultValues(fields: FormField[]): FormValues {
  return fields.reduce<FormValues>((acc, field) => {
    acc[field.name] = field.defaultValue ?? "";
    return acc;
  }, {});
}