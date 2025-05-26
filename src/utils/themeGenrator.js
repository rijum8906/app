import { createTheme } from '@mui/material/styles';
import tinycolor from 'tinycolor2';


// Or get all 13 tones (0-100 in 10% increments)
const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

const generateMaterialYouTones = (baseColor) => {
  const hsl = tinycolor(baseColor).toHsl();
  const tones = {};
  const toneSteps = [0, 1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

  toneSteps.forEach(tone => {
    tones[`tone${tone}`] = tinycolor({ h: hsl.h, s: hsl.s, l: tone / 100 }).toHexString();
  });

  return tones;
};

const colorsGenerator = ({primaryTones, secondaryTones, mode}) => {
  if (mode === "light") {
    return{
      primary: {
        main: primaryTones.tone50,
        contrastText: primaryTones.tone95
      },
      secondary: {
        main: secondaryTones.tone50,
        contrastText: secondaryTones.tone95
      },
      background: {
        default: primaryTones.tone95,
        paper: primaryTones.tone99
      }
    }
  } else {
    return {
      primary: {
        main: primaryTones.tone70,
        contrastText: primaryTones.tone10
      },
      secondary: {
        main: secondaryTones.tone70,
        contrastText: secondaryTones.tone10
      },
      background: {
      default: primaryTones.tone1,
      paper: tinycolor.mix(primaryTones.tone1, "#FFFFFF", 10).toHexString()
      },
      text: {
        primary: "#d1d1d1"
      }
    }
  }
}

export const generateTheme = ({ mode = 'light', primary, secondary }) => {
  const primaryTones = generateMaterialYouTones(primary);
  const secondaryTones = generateMaterialYouTones(secondary);

  return createTheme({
    palette: {
      mode,
      ...colorsGenerator({
        primaryTones,
        secondaryTones,
        mode
      })
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: 'Inter, Roboto, sans-serif',
    },
  });
};