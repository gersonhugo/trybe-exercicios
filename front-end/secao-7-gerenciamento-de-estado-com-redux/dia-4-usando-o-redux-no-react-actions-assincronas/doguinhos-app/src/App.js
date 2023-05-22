import React from "react";
import { connect } from "react-redux";
import { fetchDogImage } from "./redux/actions";

class App extends React.Component {
  render () {
    const { dispatch, imageURL, isFetching } = this.props;
    return (
      <div>
        <button onClick={ () => { dispatch(fetchDogImage()) } }>Novo doguinho</button>
        <br></br>
        {imageURL && <img
          src={ imageURL }
          alt="imagem aleatória de um doguinho"
        /> }
        
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
})

export default connect(mapStateToProps)(App);
