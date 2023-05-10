import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';
import { clickCounter } from './redux/actions';

class App extends React.Component {

  
  click = (qtde) => {
    const { dispatch } = this.props;
    dispatch(actionCreator(qtde));
    dispatch(clickCounter());
  }

  render() {
    console.log(this.props);
    const { countState, clickState } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={ () => this.click() }>Incrementa 1</button>
        <button onClick={ () => this.click(5) }>Incrementa 5</button>
        <h3>Clicks: { clickState }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clickState: state.clicks,
})

export default connect(mapStateToProps)(App);
