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
    const { numeroDeCliques1 } = this.state;
    this.setState((estadoAnterior) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }),
      () => console.log('btn 1', this.getBtnColor(numeroDeCliques1))
    )
  }

  handleClick2() {
    const { numeroDeCliques2 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }),
      () => console.log('btn 2', this.getBtnColor(numeroDeCliques2))
    )
  }

  handleClick3 = () => {
    const { numeroDeCliques3 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }),
      console.log('btn 3 ', this.getBtnColor(numeroDeCliques3))
    )
  }

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;

    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: this.getBtnColor(numeroDeCliques1) }}
        >
          {numeroDeCliques1}

        </button>

        <button
          onClick={this.handleClick2}
          style={{ backgroundColor: this.getBtnColor(numeroDeCliques2) }}
        >
          {numeroDeCliques2}
        </button>

        <button
          onClick={this.handleClick3}
          style={{ backgroundColor: this.getBtnColor(numeroDeCliques3) }}
        >
          {numeroDeCliques3}
        </button>
      </div>
    )
  }
}

export default App;
