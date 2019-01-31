import React, { Component } from 'react';
import NavBar from './components/Navbar/NavBar'
import Search from './components/Search/Search'
//import ImageResults from './components/Image-results/ImageResults'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        
        <NavBar/>
        <Search/>
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
