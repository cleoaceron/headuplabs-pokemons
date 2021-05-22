import {put, takeLatest, call, select} from 'redux-saga/effects';
import {GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILED} from './types';

import pokemonServices from 'api/services/pokemons';

export function* fnGetPokemons() {
  try {
    const limit = yield select(state => state.pokemons.limit);

    const reponse = yield call(pokemonServices.api.fnGetPokemons, limit);

    yield put({type: GET_POKEMONS_SUCCESS, payload: reponse.data.results});
  } catch (error) {
    yield put({type: GET_POKEMONS_FAILED, payload: error});
  }
}

export default function* watcher() {
  yield takeLatest(GET_POKEMONS, fnGetPokemons);
}
