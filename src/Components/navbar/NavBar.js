import React from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';

const root = {
  flexGrow: 1
}
const title = {
  flexGrow: 1
}

export default function NavBar(){
  return(
    <div>
      <AppBar style={root}>
        <Toolbar>
          <IconButton>
            <ImageSearchIcon />
          </IconButton>
          <Typography variant="h6" style={title}>
            Image Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
} 


