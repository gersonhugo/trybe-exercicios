import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }
  
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  
  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }
  render() {
    const {numeroDeCliques1} = this.state;
    const {numeroDeCliques2} = this.state;
    const {numeroDeCliques3} = this.state;
    
    return (
      <div>
        <button onClick={this.handleClick}>{numeroDeCliques1}</button>
        <button onClick={this.handleClick2}>{numeroDeCliques2}</button>
        <button onClick={this.handleClick3}>{numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;
