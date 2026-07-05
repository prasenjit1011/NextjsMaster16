"use client";

import { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";

type FieldType = "TEXT" | "LIST" | "RADIO";

interface DynamicField {
  id: number;
  name: string;
  fieldType: FieldType;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  required?: boolean;
  listOfValues1?: string[];
}


import formJson from "../../data/form.json";




export default function Signup() {
  const defaultValues: Record<string, any> = {};

  formJson.data.forEach((field) => {
    defaultValues[field.name] = field.defaultValue ?? "";
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    const saved = localStorage.getItem("dynamic-form");

    if (saved) {
      reset(JSON.parse(saved));
    }
  }, [reset]);

  const values = watch();

  useEffect(() => {
    localStorage.setItem("dynamic-form", JSON.stringify(values));
  }, [values]);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f4f6f8",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={6}
          sx={{
            borderRadius: 4,
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              mb={1}
            >
              Dynamic Signup Form
            </Typography>

            <Typography
              color="text.secondary"
              mb={4}
            >
              React Hook Form + Material UI + JSON Driven Form
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={3}>
                {formJson.data.map((field) => {
                  const validation: any = {};

                  if (field.required) {
                    validation.required =
                      `${field.name} is required`;
                  }

                  if (field.fieldType === "TEXT") {
                    if (field.minLength) {
                      validation.minLength = {
                        value: field.minLength,
                        message: `Minimum ${field.minLength} characters`,
                      };
                    }

                    if (field.maxLength) {
                      validation.maxLength = {
                        value: field.maxLength,
                        message: `Maximum ${field.maxLength} characters`,
                      };
                    }

                    if (
                      field.name
                        .toLowerCase()
                        .includes("email")
                    ) {
                      validation.pattern = {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email",
                      };
                    }
                  }

                  return (
                    <Grid
                      size={{ xs: 12 }}
                      key={field.id}
                    >
                      <Controller
                        name={field.name}
                        control={control}
                        rules={validation}
                        render={({ field: controller }) => {
                          switch (field.fieldType) {
                            case "TEXT":
                              return (
                                <TextField
                                  {...controller}
                                  fullWidth
                                  label={field.name}
                                  error={
                                    !!errors[field.name]
                                  }
                                  helperText={
                                    errors[field.name]
                                      ?.message as string
                                  }
                                />
                              );

                            case "LIST":
                              return (
                                <FormControl
                                  fullWidth
                                  error={
                                    !!errors[field.name]
                                  }
                                >
                                  <FormLabel>
                                    {field.name}
                                  </FormLabel>

                                  <Select
                                    {...controller}
                                  >
                                    {field.listOfValues1?.map(
                                      (item) => (
                                        <MenuItem
                                          key={item}
                                          value={item}
                                        >
                                          {item}
                                        </MenuItem>
                                      )
                                    )}
                                  </Select>

                                  <Typography
                                    color="error"
                                    variant="caption"
                                  >
                                    {
                                      errors[field.name]
                                        ?.message as string
                                    }
                                  </Typography>
                                </FormControl>
                              );

                            case "RADIO":
                              return (
                                <FormControl
                                  error={
                                    !!errors[field.name]
                                  }
                                >
                                  <FormLabel>
                                    {field.name}
                                  </FormLabel>

                                  <RadioGroup
                                    {...controller}
                                  >
                                    {field.listOfValues1?.map(
                                      (item) => (
                                        <FormControlLabel
                                          key={item}
                                          value={item}
                                          control={<Radio />}
                                          label={item}
                                        />
                                      )
                                    )}
                                  </RadioGroup>

                                  <Typography
                                    color="error"
                                    variant="caption"
                                  >
                                    {
                                      errors[field.name]
                                        ?.message as string
                                    }
                                  </Typography>
                                </FormControl>
                              );

                            default:
                              return null;
                          }
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>

              <Stack
                direction="row"
                spacing={2}
                mt={5}
              >
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                >
                  Submit
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => reset(defaultValues)}
                >
                  Reset
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}