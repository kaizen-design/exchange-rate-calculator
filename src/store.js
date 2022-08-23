import { createStore } from 'redux';

const initialState = {
  amount: "12.80",
  currencyCode: "USD"
}

function reducer(state = initialState, action) {
  return state;
}

export const store = createStore(reducer);