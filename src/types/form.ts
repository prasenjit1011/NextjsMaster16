export type FieldType =
  | "TEXT"
  | "TEXTAREA"
  | "PASSWORD"
  | "EMAIL"
  | "NUMBER"
  | "LIST"
  | "RADIO"
  | "CHECKBOX"
  | "DATE";

export interface FormField {
  id: number;
  name: string;
  fieldType: FieldType;

  required?: boolean;
  defaultValue?: string;

  minLength?: number;
  maxLength?: number;

  listOfValues1?: string[];
}

export interface FormSchema {
  data: FormField[];
}

/**
 * Dynamic form values.
 * Example:
 * {
 *   "Full Name": "John Doe",
 *   "Email": "john@mail.com",
 *   "Gender": "Male"
 * }
 */
export type FormValues = Record<string, string>;