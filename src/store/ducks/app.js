import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setPage: null,
  appLoadSuccess: ['data'],
  appLoadFailure: ['error'],
});

export const AppTypes = Types;
export const AppActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  list: [],
  loading: false,
  error: null,
});

// Reducer Functions

const appLoadRequest = (state) => ({ ...state, loading: true, error: null });
const appLoadSuccess = (state, { data }) => ({
  ...state, data, loading: false, error: null,
});
const appLoadFailure = (state, { error }) => ({
  ...state, error, loading: false,
});

// Reducer

export const AppReducer = createReducer(INITIAL_STATE, {
  [Types.APP_LOAD_REQUEST]: appLoadRequest,
  [Types.APP_LOAD_SUCCESS]: appLoadSuccess,
  [Types.APP_LOAD_FAILURE]: appLoadFailure,
});
