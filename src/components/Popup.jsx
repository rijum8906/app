import React from 'react';
import { Modal, Box, Typography, IconButton, Button, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '90%',
  bgcolor: 'background.paper',
  color: 'text.primary',
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  outline: 'none'
};

export default function CustomPopup({
  open,
  onClose,
  title,
  children,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose} disableRipple>
            <CloseIcon color="primary" />
          </IconButton>
        </Box>

        {/* Content */}
        <Box sx={{ mb: 3 }}>{children}</Box>

        {/* Actions */}
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="outlined" onClick={onCancel || onClose} sx={{ borderRadius: 2 }} color="primary">
              {cancelText}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={onConfirm} sx={{ borderRadius: 2 }} color="primary">
              {confirmText}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
