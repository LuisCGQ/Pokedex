import React from "react";
import "./App.css";

import Pokemon from "./components/Pokemon";

class App extends React.Component {
  state = {
    data: { results: [] },
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
        <ul>
          {this.state.data.results.map((pokemon) => (
            <li key={pokemon.id}>
              <Pokemon pokemon={pokemon} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
