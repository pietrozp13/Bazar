import React, { Component } from 'react';
import '../App.css';
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer';

class ViewerConteiner extends Component {
  constructor(props) {
      super(props);
      this.state = {
          open: false
      };
    }

handleDrawer = () => {
  this.setState({open: !this.state.open})
}


  render() {
    return (
        <MuithemeProvider>
          <AppBar style={{backgroundColor: "#000000"}} title="Bazar J’amei" onClick={this.handleDrawer}/>
          <FlatButton label="teste" backgroundColor="##ffffff" primary={true}/>
        </MuithemeProvider>
    );
  }
}

export default ViewerConteiner;
