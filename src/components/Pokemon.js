import React from "react";

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
      sprites: data.sprites.front_default,
    });
  };

  render() {
    return (
      <div className="Pokemon">
        <div className="Pokemon__card"></div>
        <img src={this.state.sprites} alt="" />
        <p>
          {this.state.data.id} {this.props.pokemon.name}
        </p>
      </div>
    );
  }
}

export default Pokemon;
