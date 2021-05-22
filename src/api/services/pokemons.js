import pokemonsAPI from '../pokemonAPI';
import {POKEMONS_API} from '../apiConstants';

class Pokemons {
  fnGetPokemons = async limit => {
    try {
      return await pokemonsAPI.get(`${POKEMONS_API.POKEMON}?limit=${limit}`);
    } catch (error) {
      return error;
    }
  };
}

Pokemons.api = new Pokemons();
export default Pokemons;
