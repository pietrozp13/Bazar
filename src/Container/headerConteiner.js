import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'


class HeaderConteiner extends Component {
  render() {
    return (
        <AppBar onLeftIconButtonClick={this.props.onLeftIconButtonClick} style={{backgroundColor: "#000000"}} title="Bazar J’amei" onClick={this.handleDrawer}/>
    );
  }
}

export default HeaderConteiner;
