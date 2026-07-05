"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Alert,
  Box,
  Card,
  CardContent,
  Container,
  Snackbar,
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

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as
      | "success"
      | "error"
      | "warning"
      | "info",
  });

  // Load saved values after hydration
  useEffect(() => {
    if (isLoaded) {
      reset(savedForm);
    }
  }, [isLoaded, savedForm, reset]);

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const onSubmit = async (data: FormValues) => {
    try {
      saveForm(data);

      console.log("Submitted Data:", data);

      setSnackbar({
        open: true,
        severity: "success",
        message: "🎉 Form submitted successfully!",
      });
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        severity: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f7fb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Container maxWidth="sm">
          <Card
            elevation={8}
            sx={{
              borderRadius: 4,
            }}
          >
            <CardContent
              sx={{
                p: 4,
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Dynamic Signup Form
              </Typography>

              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                sx={{
                  mb: 4,
                }}
              >
                React Hook Form + Material UI + JSON Driven Form
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                {schema.data.map((field) => (
                  <Box
                    key={field.id}
                    sx={{
                      mb: 2,
                    }}
                  >
                    <FieldRenderer
                      field={field}
                      control={control}
                      errors={errors}
                    />
                  </Box>
                ))}

                <Box
                  sx={{
                    mt: 4,
                  }}
                >
                  <SubmitButton
                    loading={isSubmitting}
                    text="Submit"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            minWidth: 350,
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            borderRadius: 2,
            boxShadow: 6,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}