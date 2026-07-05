"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import formData from "../../data/form.json";

import { FormSchema, FormValues } from "@/types/form";
import { getDefaultValues } from "@/lib/defaultValues";
import { FieldRenderer } from "@/utils/fieldRenderer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import SubmitButton from "./SubmitButton";

const schema = formData as FormSchema;

const defaultValues = getDefaultValues(schema.data);

export default function DynamicForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<FormValues>({
    defaultValues,
    mode: "onBlur",
  });

  const {
    value: savedForm,
    setValue: saveForm,
    isLoaded,
  } = useLocalStorage<FormValues>(
    "signup-form",
    defaultValues
  );

  // Load saved data after hydration
  useEffect(() => {
    if (isLoaded) {
      reset(savedForm);
    }
  }, [isLoaded, savedForm, reset]);

  const onSubmit = async (data: FormValues) => {
    saveForm(data);

    alert("Form submitted successfully!");

    console.log(data);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Box
  sx={{
    minHeight: "100vh",
    bgcolor: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 3,
  }}
>
  <Card
    sx={{
      width: "100%",
      maxWidth: 500,
      borderRadius: 3,
      boxShadow: 6,
    }}
  >
    <CardContent>
      <Typography variant="h5" fontWeight={600} mb={0.5}>
        Dynamic Form
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        JSON driven React Hook Form
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {schema.data.map((field) => (
          <Box key={field.id} sx={{ mb: 2 }}>
            <FieldRenderer
              field={field}
              control={control}
              errors={errors}
            />
          </Box>
        ))}

        <Box mt={3}>
          <SubmitButton loading={isSubmitting} text="Submit" />
        </Box>
      </Box>
    </CardContent>
  </Card>
</Box>
    </Container>
  );
}