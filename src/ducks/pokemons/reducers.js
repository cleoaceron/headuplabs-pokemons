import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  UPGRADE_POKEMONS,
  SEARCH_POKEMONS,
  SEARCH_ULTIMATE_POKEMONS,
  GET_POKEMONS_FAILED,
  CLEAR,
} from './types';

export const INITIAL_STATE = {
  loading: true,
  data: [],
  error: false,
  errorMessage: null,
  limit: 25,
};

const setPokemonds = items => {
  let newArrayHolder = [];

  items.forEach((data, key) => {
    newArrayHolder.push({name: `${data.name} Upgraded`, url: data.url});
  });

  return newArrayHolder;
};

const searchPokemons = items => items.filter(item => item.name.startsWith('a'));
const filterPokemons = items => items.slice(0, 19);

const pokemons = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        limit: state.limit + action.payload,
      };

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case UPGRADE_POKEMONS:
      return {
        ...state,
        data: setPokemonds(state.data),
      };

    case SEARCH_POKEMONS:
      return {
        ...state,
        data: searchPokemons(state.data),
      };

    case SEARCH_ULTIMATE_POKEMONS:
      return {
        ...state,
        data: filterPokemons(setPokemonds(state.data)),
      };

    case GET_POKEMONS_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
        errorMessage: action.payload,
      };

    case CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default pokemons;
