import React, { useState } from 'react';
import { FormControl, Grid, InputLabel, ListItemIcon, MenuItem, Select, Typography } from '@mui/material';

import useStyles from './styles';
import { Car as CarIcon } from 'phosphor-react';
import { Car } from '../../types';

export const CalculatorPage = () => {
  const classes = useStyles();
  const [chosenCar, setChosenCar] = useState<string>('');
  // const [chosenCar, setChosenCar] = useState<Car | null>(null);

  const handleSetChosenCar = (value: string) => {
    setChosenCar(value)
  }

  return (
    <Grid className={classes.root}>
      <Typography variant='h1' className={classes.title}>Vad kostar bilresan?</Typography>
      <FormControl fullWidth>
        <InputLabel>Välj bil</InputLabel>
        <Select
          placeholder="Välj bil"
          variant="outlined"
          label="Välj bil"
          value={chosenCar}
          onChange={(event) => handleSetChosenCar(event.target.value as string)}
          className={classes.select}
          inputProps={{ className: classes.select }}
          MenuProps={{
            classes: { paper: classes.selectMenu },
            sx: {
              '& .MuiMenu-paper': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
              '& .MuiMenuItem-root': {
                backgroundColor: 'white',
                border: `1px solid #E2E2E2`,
                borderRadius: '6px',
                marginBottom: '10px',
                height: '54px',
                display: 'flex',
                alignItems: 'center'
              }
            }
          }}
          SelectDisplayProps={{ className: classes.select }}
        >
          <MenuItem value="Wupen" className={classes.menuItem}>
            <Grid item container>
              <ListItemIcon>
                <CarIcon color="#B8B8B8" weight="fill" size={24} />
              </ListItemIcon>
              <Typography variant="body1">Wupen</Typography>
            </Grid>
            <Typography variant="body2">7,1 l / 100 km</Typography>
          </MenuItem>
          <MenuItem value="Rödingen" className={classes.menuItem}>
            <Grid item container>
              <ListItemIcon>
                <CarIcon color="#FE2929" weight="fill" size={24} />
              </ListItemIcon>
              <Typography variant="body1">Rödingen</Typography>
            </Grid>
            <Typography variant="body2">4,4 l / 100 km</Typography>
          </MenuItem>
          <MenuItem value="BMW" className={classes.menuItem}>
            <Grid item container>
              <ListItemIcon>
                <CarIcon color="#000000" weight="fill" size={24} />
              </ListItemIcon>
              <Typography variant="body1">BMW</Typography>
            </Grid>
            <Typography variant="body2">6,1 l / 100 km</Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default CalculatorPage;
