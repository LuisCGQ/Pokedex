import React from "react";

import "./styles/Pokemon.css";

class Pokemon extends React.Component {
  state = {
    data: { results: [] },
  };

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData = async () => {
    const response = await fetch(this.props.pokemon.url);

    const data = await response.json();

    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <div className="Pokemon">
        <div className="Pokemon__card"></div>
        <img
          className="Pokemon__sprite"
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
            this.state.data.id +
            ".png"
          }
          alt={this.props.pokemon.name}
        />
        <p>
          {this.state.data.id} <br />
          {this.props.pokemon.name}
        </p>
      </div>
    );
  }
}

export default Pokemon;
