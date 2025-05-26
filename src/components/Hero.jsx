import { Button, Typography, Box, Card } from '@mui/material';
import { Link } from 'react-router-dom';

import Alert from './Alert';
import Popup from './Popup';
import { A } from './Components';
import { useState } from 'react';

const Hero = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Box>
        <Typography>
          ki krchis ekhon ki krchis ekhon ki krchis ekhon ki krchis ekhon ki krchis ekhon ki krchis ekhon ki krchis
          ekhon ki krchis ekhon ki krchis ki krechis
        </Typography>
      </Box>
      <Card
        sx={{
          width: '90%',
          ml: '5%',
          p: 2,
          borderRadius: 3
        }}
      >
        <Typography variant="h6">My Header</Typography>
        <Typography>
          This photo into Ghibli style of the website where you can add new Hindi to English meaning of the website
          where you can I call you are not working in the chapter of the website where you can I call you are not
          working{' '}
        </Typography>
      </Card>
    </>
  );
};

export default Hero;
