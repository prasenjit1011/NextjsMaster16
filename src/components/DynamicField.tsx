"use client";

import { Control, FieldErrors } from "react-hook-form";

import { FormField, FormValues } from "@/types/form";
import { fieldRenderer } from "@/utils/fieldRenderer";

interface DynamicFieldProps {
  field: FormField;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function DynamicField({
  field,
  control,
  errors,
}: DynamicFieldProps) {
  return fieldRenderer({
    field,
    control,
    errors,
  });
}