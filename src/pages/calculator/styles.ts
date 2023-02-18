import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) => 
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      minHeight: '100vh',
      padding: '50px 16px 0 16px'
    },
    title: {
      paddingBottom: 30
    },
    select: {
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      '& .MuiListItemIcon-root': {
        minWidth: 'fit-content',
        paddingRight: 16,
        margin: 'auto 0'
      },
      '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        '& p': {
          marginTop: '2px'
        }
      }

    },
    selectMenu: {
      '& .MuiMenu-paper': {
        backgroundColor: 'green',
      }
    },
    menuItem: {
      borderRadius: 20
    },
  })
)