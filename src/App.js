import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

    const data = await response.json();

    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <div className="App">
        <ul></ul>
      </div>
    );
  }
}

export default App;
