"use client";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface SubmitButtonProps {
  loading?: boolean;
  disabled?: boolean;
  text?: string;
}

export default function SubmitButton({
  loading = false,
  disabled = false,
  text = "Submit",
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      disabled={disabled || loading}
      sx={{
        mt: 3,
        py: 1.5,
        textTransform: "none",
        fontWeight: 600,
      }}
    >
      {loading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        text
      )}
    </Button>
  );
}