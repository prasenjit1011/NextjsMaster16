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
import { fieldRenderer } from "@/utils/fieldRenderer";
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
      <Card elevation={4}>
        <CardContent>

          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            Dynamic Signup Form
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            mb={3}
          >
            This form is generated completely from JSON.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {schema.data.map((field) => (
              <Box key={field.id} mb={2}>
                {fieldRenderer({
                  field,
                  control,
                  errors,
                })}
              </Box>
            ))}

            <SubmitButton
              loading={isSubmitting}
              text="Sign Up"
            />
          </Box>

        </CardContent>
      </Card>
    </Container>
  );
}