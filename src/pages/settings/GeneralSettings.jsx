import {
  Box,
  Typography,
  Divider,
  Switch
} from "@mui/material"

// --- Icons ---
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';

// --- Redux ---
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from './../../features/theme/themeSlice';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  
  const ThemeIcon = mode === "light" ? <Brightness7RoundedIcon /> : <Brightness4RoundedIcon />
  
  const handleChangeMode = () => {
    dispatch(toggleMode());
  }
  
  return (
    <>
      {/* --- Toggle Dark Mode --- */}
      <Box sx={{
        display: "flex",
        px: 5,
        py: 3,
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}>
        {mode == "light" ? <Brightness7RoundedIcon /> : <Brightness4RoundedIcon />}
        <Typography flexGrow={1} variant="h6">Dark Mode</Typography>
        <Switch onClick={handleChangeMode}/>
      </Box>
      <Divider />
      
      
    </>
  )
}

export default SettingsPage;