import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(){
  return(
    <div>
      <AppBar className="classes.root">
        <Toolbar>
          <IconButton>
            <ImageSearchIcon />
          </IconButton>
          <Typography variant="h6" className="classes.title">
            Image Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
} 


