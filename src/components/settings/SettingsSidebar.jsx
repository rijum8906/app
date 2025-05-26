import {
  Drawer,
  IconButton,
  Box,
  Typography,
  Divider,
  Button
} from "@mui/material"

const SettingsSidebar = () => {
  return (
    <>
      <Box sx={{
        display: "flex",
        overflowX: "scroll",
        color: "secondary.main",
        py: 3,
        gap: 20,
        '& Button': {
          py: 1,
          px: 8,
          textDecoration: "underline",
          borderRadius: 5
        },
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
      }}
      elevation={4}
      >
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
        <Button color="inherit" variant="text">
          General
        </Button>
      </Box>
    </>
  )
}

export default SettingsSidebar;