import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email"/>
      </label>
      <input data-testid="id-send" id="btn-send" type="button" value="Enviar" />
      <input id="btn-back" type="button" value="voltar" />
    </div>
  );
}

export default App;
