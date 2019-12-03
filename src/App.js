import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import NavBar from './Components/navbar/NavBar';
import Search from './Components/search/Search';

class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <br />
          <br />
          <br />
          <br />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
