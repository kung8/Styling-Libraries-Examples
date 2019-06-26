import React from 'react';
import './App.css';
import Favorite from '@material-ui/icons/Favorite';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Example from './StyledComp'
//used for themes for the app (colors, fontFamily,fontSize, htmlFontSize)
const theme = createMuiTheme({
  // spacing:4,
  palette:{
    primary:{
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary:{
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
})

// theme.palette.primary = {
//   light: '#757ce8',
//   main: '#3f50b5',
//   dark: '#002884',
//   contrastText: '#fff',
// }

// theme.palette.secondary = {
//   light: '#ff7961',
//   main: '#f44336',
//   dark: '#ba000d',
//   contrastText: '#000',
// }

// theme.spacing(2)
console.log(theme.spacing(2))

//used for other styling
const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red['A200'],
      // color: 'red',
    },
  },
}});

function App() {
  const classes = useStyles()
  const { primary, secondary,common,text,error } = theme.palette


  return (
    <div>
      <Typography component="div" variant="body1">
        <Box 
          bgcolor='primary.main' color='primary.contrastText'
          p={1} m={1}
        >primary.main</Box>
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2} m={1}>secondary.main</Box>
        <Box bgcolor="error.main" color="error.contrastText" p={3} m={1}>error.main</Box>
        <Box bgcolor="text.primary" color="background.paper" p={1} m={1}>text.primary</Box>
        <Box bgcolor="text.secondary" color="background.paper" p={1} m={2}>text.secondary</Box>
        <Box bgcolor="text.disabled" color="background.paper" p={1} m={3}>text.disabled</Box>
        <Box bgcolor="text.hint" color="background.paper" p={1} m={4}>text.hint</Box>
      </Typography>
      <Favorite style={{ color: primary.light }}/>
      <Icon className={`${classes.iconHover} fa fa-plus-circle`} />
      <Example/>
    </div>
  );
}

export default App;
