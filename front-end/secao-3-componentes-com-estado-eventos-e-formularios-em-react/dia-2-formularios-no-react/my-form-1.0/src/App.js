import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      genero: '',
      nome: '',
      idade: '',
      obs: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      nome: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <label htmlFor='genero'>Gênero</label>
        <select id='genero' name='genero'>
          <option>
            Masculino
          </option>
          <option>
            Feminino
          </option>
        </select>
        <label htmlFor='nome'>Nome</label>
        <input
          id='nome'
          name='nome'
          type="text"
          onChange={this.handleChange}
        ></input>
        <label htmlFor='idade'>idade</label>
        <input
          id='idade'
          name='idade'
          type="text"
          onChange={this.handleChange}
        ></input>

        <label htmlFor='obs'>Observações</label>
        <textarea
          id='obs'
          name='obs'
        >
        </textarea>
      </form>
    )
  }
}

export default App;
