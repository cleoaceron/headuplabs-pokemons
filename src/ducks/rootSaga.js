import {all} from 'redux-saga/effects';
import {saga as pokemonSaga} from './pokemons';

export default function* rootSaga() {
  yield all([pokemonSaga()]);
}
