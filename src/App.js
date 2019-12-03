import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import NavBar from './Components/navbar/NavBar'

class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
