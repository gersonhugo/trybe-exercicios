import React from 'react';

function handleClick() {
  console.log('texto qualquer');
}

function handleClick2() {
  console.log('texto qualquer 2');
}

function handleClick3() {
  console.log('texto qualquer 3');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Imprimir texto</button>
        <button onClick={handleClick2}>Imprimir texto</button>
        <button onClick={handleClick3}>Imprimir texto</button>
      </div>
    )
  }
}

export default App;
