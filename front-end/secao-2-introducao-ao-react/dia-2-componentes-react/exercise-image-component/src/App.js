import React from 'react';
import Image from './Image';
import cat from './cat.jpg'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Image source={ cat } alternativeText="Cute cat staring" />
      </div>
    );
  }
}

export default App;
