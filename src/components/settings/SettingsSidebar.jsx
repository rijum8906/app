import { Drawer, IconButton, Box, Typography, Divider} from '@mui/material';
import { A } from "./../Components";

const SettingsSidebar = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'scroll',
          color: 'secondary.main',
          py: 3,
          gap: 20,
          '& A': {
            py: 1,
            px: 8,
            textDecoration: 'underline',
            borderRadius: 5
          },
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
        elevation={4}
      >
        <A color="inherit">
          General
        </A>
        <A color="inherit">
          General
        </A>
        <A color="inherit">
          General
        </A>
      </Box>
    </>
  );
};

export default SettingsSidebar;
