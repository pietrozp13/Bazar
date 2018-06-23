import React, { Component } from 'react';
import './App.css';
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import HeaderConteiner from './Container/headerConteiner'
import TableExampleComplex from './Pages/Registro'
import EtiquetaRead from './Pages/Etiquetas'
import { MenuItem }from 'material-ui/Menu'
import { Route, Link } from 'react-router-dom'
import * as firebase from 'firebase'


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showDrawer: false,
          teste: null,
          username: "pietro",
          usernameViaFire: "1234"
      };
    this.handerDrawerOpen = this.handerDrawerOpen.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('bazarapi')
        const testRef = rootRef.child('testee')
        testRef.on('value', snap => {
            this.setState({
              teste: snap.val()
            })
        });
        // firebase.database().ref().child('bazarapi').set({
          // testee: this.state.usernameViaFire
      // });
    }

    handleChange(e) {
    this.handerUpdata
    this.setState({
      usernameViaFire: e.target.value
    });
  }

    handerDrawerOpen = () => {
      this.setState({
        showDrawer: !this.state.showDrawer
      })
    }

    handerUpdata = () => {

      const update = {
          pietro: "111111",
          potato: this.state.usernameViaFire,
          batata: "kdjk11111",
          tetse: {
              pietro: "121111134",
              batata: "kdjkmkwbndkejndjw"
          }
      }

      var updateFire = {}

      updateFire['/bazarapi/' + "pao"] = update;

      firebase.database().ref().update(updateFire)
    }

    handerDelete = () => {

      const rootRef = firebase.database().ref().child('bazarapi').child(this.state.usernameViaFire).remove()

    }


  render() {
    return (
        <MuithemeProvider>
        <div onClick={this.handerDrawerOpen}>
          <HeaderConteiner onLeftIconButtonClick={this.handerDrawerOpen} id="testee"/>
          <Drawer open={this.state.showDrawer}>
            <MenuItem onClick={this.handerShowRegistro}><Link to="/registro">Registro</Link></MenuItem>
            <MenuItem onClick={this.handerShowEtiquetas}><Link to="/etiqueta">Etiquetas</Link></MenuItem>
            <MenuItem onClick={this.handerShowRelatorio}><Link to="/etiqueta">Etiquetas</Link></MenuItem>
          </Drawer>
        </div>
        <Route exact path="/" render={()=> (
        <div>
          <div>{this.state.username}</div>
            <button onClick={this.handerUpdata}>Update</button>
            <input type="text" value={this.state.usernameViaFire} onChange={this.handleChange}/>
            <button onClick={this.handerDelete}>deletee</button>
          <div>{this.state.usernameViaFire}</div>
          <div>aqui</div>
        </div>
        )}/>
        <Route exact path="/registro" render={()=> (
          <TableExampleComplex/>
        )}/>

        <Route path="/etiqueta" render={()=> (
          <EtiquetaRead/>
        )}/>

        <Route exact path="/Etiquetas" render={()=> (
          <TableExampleComplex/>
        )}/>

        </MuithemeProvider>
    );
  }
}

export default App;
