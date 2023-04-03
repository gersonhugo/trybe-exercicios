import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick() {
    console.log('texto qualquer');
    console.log(this);
  }
  
  handleClick2() {
    console.log('texto qualquer 2');
    console.log(this);
  }
  
  handleClick3 = () => {
    console.log('texto qualquer 3');
    console.log(this);
  }
  render() {

    return (
      <div>
        <button onClick={this.handleClick}>Imprimir texto</button>
        <button onClick={this.handleClick2}>Imprimir texto</button>
        <button onClick={this.handleClick3}>Imprimir texto</button>
      </div>
    )
  }
}

export default App;
