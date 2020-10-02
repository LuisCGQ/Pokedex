import React from "react";
import "./App.css";

import Pokemon from "./components/Pokemon";

class App extends React.Component {
  state = {
    nextPage: "https://pokeapi.co/api/v2/pokemon",
    loading: true,
    error: null,
    data: { results: [] },
  };

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(`${this.state.nextPage}`);
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: data.next,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error}`;
    }
    return (
      <div className="App">
        <ul>
          {this.state.data.results.map((pokemon) => (
            <li key={pokemon.id}>
              <Pokemon pokemon={pokemon} />
            </li>
          ))}
        </ul>
        {console.log(this.state.nextPage)}
        {this.state.loading && (
          <div className="loader">
            <p>Cargando</p>
          </div>
        )}

        {!this.state.loading && (
          <button onClick={() => this.fetchPokemon()}>Load More</button>
        )}
      </div>
    );
  }
}

export default App;
