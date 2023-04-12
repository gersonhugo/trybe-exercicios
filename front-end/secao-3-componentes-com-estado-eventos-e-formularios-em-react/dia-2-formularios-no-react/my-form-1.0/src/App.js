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

  handleChange(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,

    })
  }

  render() {
const {genero} = this.state;

    return (
      <form>
        <label htmlFor='genero'>Gênero</label>
        <select
          id='genero'
          name='genero'
          onChange={this.handleChange}
          value='genero'
        >
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
          onChange={this.handleChange}
        >
        </textarea>
      </form>
    )
  }
}

export default App;
