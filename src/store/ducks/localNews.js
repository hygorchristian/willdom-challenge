import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const mock = [
  {
    id: 3,
    title: 'Astronomia Casino by Jacob & Co.',
    description: 'Jacob & Co are renowned for making expensive and unusual timepieces, best highlighted in the Astronomia Casino. This  $1m Roulette-themed watch boasts a design resembling the surface of a black and red roulette wheel, and it has been developed on a similar 2014 creation. It’s not just unique in aesthetics, but it is truly remarkable. There are only 18 of these models rumoured to have been crafted.',
    image: 'https://www.salonprivemag.com/wp-content/uploads/2021/05/astronomia.jpg',
  },
  {
    id: 2,
    title: 'Hublot Big Bang One Click Rainbow King Gold',
    description: 'Hublot wins the competition for the most colourful opulent items in the market. Their Big Bang One Click Rainbow watch is precisely that – a big bang of colour. Everything is a concoction of bold and vibrant colours from the leather strap to the rose gold case and Sapphire glass. It’s waterproof up to 100 metres and made for all genders.',
    image: 'https://www.salonprivemag.com/wp-content/uploads/2021/05/SDF.png',
  },
  {
    id: 1,
    title: 'The Must De Cartier Reboot',
    description: 'Recently it was watch Christmas for all of us watch geeks, and as you can tell by the title of this article, Cartier has hit many, many home runs. Maybe their biggest of the week is a reintroduction of the Must de Cartier line.',
    image: 'https://www.salonprivemag.com/wp-content/uploads/2021/04/ezgif.com-gif-maker-18.jpg',
  },
];

// Action Types & Creators

const { Types, Creators } = createActions({
  localNewsAdd: ['data'],
  localNewsUpdate: ['data'],
  localNewsDelete: ['id'],
});

export const LocalNewsTypes = Types;
export const LocalNewsActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  list: mock,
});

// Reducer Functions

const localNewsAdd = (state, { data }) => {
  const list = [...state.list, data];
  list.sort((a, b) => {
    if (a.id > b.id) return -1;
    if (b.id < a.id) return 1;
    return 0;
  });
  return {
    ...state, list,
  };
};

const localNewsUpdate = (state, { data }) => {
  const list = state.list.map((item) => {
    if (item.id === data.id) {
      return data;
    }
    return item;
  });
  return {
    ...state, list,
  };
};

const localNewsDelete = (state, { id }) => ({
  ...state, list: state.list.filter((item) => item.id !== id),
});

// Reducer

export const LocalNewsReducer = createReducer(INITIAL_STATE, {
  [Types.LOCAL_NEWS_ADD]: localNewsAdd,
  [Types.LOCAL_NEWS_DELETE]: localNewsDelete,
  [Types.LOCAL_NEWS_UPDATE]: localNewsUpdate,
});
