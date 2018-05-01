import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';

export default class TableExampleComplex extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showDrawer: false,
        userName: "",
        nomeProduto: "",
        marcaProduto: "",
        valorProduto: null,
        corProduto: "",
        dataBase: [],
        height: '700px'
    };
  this.handerDrawerOpen = this.handerDrawerOpen.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleChangeNomeProduto = this.handleChangeNomeProduto.bind(this)
  this.handleChangeMarcaProduto = this.handleChangeMarcaProduto.bind(this)
  this.handleChangeCorProduto = this.handleChangeCorProduto.bind(this)
  this.handleChangeValorProduto = this.handleChangeValorProduto.bind(this)

  }
  
  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  componentDidMount() {
    const rootRef = firebase.database().ref().child('bazarapi')
    const testRef = rootRef.child('pao')
    rootRef.on('value', snap => {
        this.setState({
          dataBase: snap.val()
        })
    // console.log('firebaseHolyArray: ', Object.values(snap.val()) + "_snap");
    });
    // firebase.database().ref().child('bazarapi').set({
      // testee: this.state.marcaProduto,
      // paoabc: 123
  // });

}
handerDrawerOpen = () => {
  this.setState({
    showDrawer: !this.state.showDrawer
  })
}

handleChangeUserName = (e) => {
  this.setState({
    userName: e.target.value
  })
}

handleChangeNomeProduto(e) {
  this.setState({
    nomeProduto: e.target.value
  });
}

handleChangeMarcaProduto(e) {
  this.setState({
    marcaProduto: e.target.value
  });
}

handleChangeCorProduto(e) {
  this.setState({
    corProduto: e.target.value
  });
}

handleChangeValorProduto(e) {
  this.setState({
    valorProduto: e.target.value
  });
}

handerUpdata = () => {

  const update = {
      userName: this.state.userName,
      nomeProduto: this.state.nomeProduto,
      marcaProduto: this.state.marcaProduto,
      corProduto: this.state.corProduto,
      valorProduto: this.state.valorProduto
  }

  var updateFire = {}

  updateFire['/bazarapi/' + this.state.userName] = update;

  firebase.database().ref().update(updateFire)
}

handerDelete = () => {

  const rootRef = firebase.database().ref().child('bazarapi').child(this.state.userName).remove()

}


  render() {
    if (this.state.dataBase != null){
    var tableData = Object.values(this.state.dataBase)
    console.log("esse")
    } else {
    tableData = [
      {
      userName: "",
      nomeProduto: "",
      marcaProduto: "",
      corProduto: "",
      valorProduto: ""
    }
    ]
    console.log("aquele")
  }
    return (      
      <div style={{ margin: 'auto', width: '80%'}}>
      <h1>Nome Pessoa: Pietro</h1>
        <TextField hintText="Nome Pessoa" value={this.state.userName} onChange={this.handleChangeUserName}/>
        <TextField hintText="Nome produto" value={this.state.nomeProduto} onChange={this.handleChangeNomeProduto}/>
        <TextField hintText="Marca produto" value={this.state.marcaProduto} onChange={this.handleChangeMarcaProduto}/>
        <TextField hintText="Cor produto" value={this.state.corProduto} onChange={this.handleChangeCorProduto}/>
        <TextField hintText="Valor procuto" value={this.state.valorProduto} onChange={this.handleChangeValorProduto}/>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <RaisedButton label="Add" primary={true} onClick={this.handerUpdata}/>
          <RaisedButton label="Delete" primary={true} onClick={this.handerDelete}/>
        </div>
      <div style={{ margin: 'auto', height: '80%', width: '80%', border: '3px solid #757575'}}>
        <Table
          height={this.state.height}
          fixedHeader={true}
          fixedFooter={true}
          selectable={true}
          multiSelectable={false}
        >
          <TableHeader
            displaySelectAll={true}
            adjustForCheckbox={true}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn colSpan="6" tooltip="Super Header" style={{textAlign: 'left'}}>
                <h1>Tabela</h1>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The CodigoP">CodigoP</TableHeaderColumn>
              <TableHeaderColumn tooltip="The peca">peca</TableHeaderColumn>
              <TableHeaderColumn tooltip="The marca">marca</TableHeaderColumn>
              <TableHeaderColumn tooltip="The cor">cor</TableHeaderColumn>
              <TableHeaderColumn tooltip="The valorP">valorP</TableHeaderColumn>
              <TableHeaderColumn tooltip="The valorPorCem">valorPorCem</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={true}
            deselectOnClickaway={true}
            showRowHover={false}
            stripedRows={false}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.userName}</TableRowColumn>
                <TableRowColumn>{row.nomeProduto}</TableRowColumn>
                <TableRowColumn>{row.marcaProduto}</TableRowColumn>
                <TableRowColumn>{row.valorProduto}</TableRowColumn>
                <TableRowColumn>{row.corProduto}</TableRowColumn>
                <TableRowColumn>{row.valorProduto}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
          </TableFooter>
        </Table>
        </div>
      </div>
    );
  }
}
