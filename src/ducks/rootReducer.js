import {combineReducers} from 'redux';
import {reducer as pokemons} from './pokemons';

export default combineReducers({
  pokemons,
});
