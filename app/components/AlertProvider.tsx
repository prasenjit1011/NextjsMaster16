"use client";

import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";

interface AlertProviderProps {
  open: boolean;
  severity?: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
}

export default function AlertProvider({
  open,
  severity = "error",
  title,
  message,
}: AlertProviderProps) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  return (
    <Snackbar
      open={visible}
      autoHideDuration={5000}
      onClose={() => setVisible(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{
        top: "50% !important",
        left: "50% !important",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Alert
        severity={severity}
        variant="filled"
        elevation={8}
        onClose={() => setVisible(false)}
        sx={{
          minWidth: 420,
          borderRadius: 3,
          fontSize: 16,
          alignItems: "center",
          boxShadow: 10,
        }}
      >
        {title && (
          <strong
            style={{
              display: "block",
              marginBottom: 6,
            }}
          >
            {title}
          </strong>
        )}

        {message}
      </Alert>
    </Snackbar>
  );
}