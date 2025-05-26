import React from "react";
import { Alert, AlertTitle, Collapse, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoIcon from "@mui/icons-material/Info";

const alertIcons = {
  success: <CheckCircleIcon fontSize="inherit" />,
  error: <ErrorIcon fontSize="inherit" />,
  warning: <WarningAmberIcon fontSize="inherit" />,
  info: <InfoIcon fontSize="inherit" />,
};

export default function CustomAlert({
  open,
  type = "info",
  title,
  message,
  onClose,
}) {
  return (
    <Grid container spacing={2} sx={{
      justifyContent: "center",
      alignItems: "center",
      }}>
      <Grid size={{xs:11, sm:6}}>
        <Collapse in={open}>
          <Alert
            severity={type}
            icon={alertIcons[type]}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={onClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              mt: 2,
              p: 2,
              fontSize: "1rem",
            }}
          >
            {title && <AlertTitle>{title}</AlertTitle>}
            {message}
          </Alert>
        </Collapse>
      </Grid>
    </Grid>
  );
}