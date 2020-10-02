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
      sprite: data.sprites.front_default,
    });
  };

  render() {
    return (
      <div className="Pokemon">
        <div className="Pokemon__card"></div>
        <img className="Pokemon__sprite" src={this.state.sprite} alt="" />
        <p>
          {this.state.data.id} <br />
          {this.props.pokemon.name}
        </p>
      </div>
    );
  }
}

export default Pokemon;
