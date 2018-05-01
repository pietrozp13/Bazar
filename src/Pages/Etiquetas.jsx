import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { QRCode } from 'react-qr-svg';

class EtiquetaRead extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
    <div>
      <div style={{ height: '300px', width: '300px'}}>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          />
        <p>{this.state.result}</p>
      </div>
      <div style={{ width: '500px', float: 'right', border: '50px'}}>
          <QRCode
              bgColor="white"
              fgColor="black"
              level="Q"
              style={{ width: 256 }}
              value="12345A"
          />
          <input type="submit" value="oi"/>
        </div>
    </div>
    )
  }
}
export default EtiquetaRead
