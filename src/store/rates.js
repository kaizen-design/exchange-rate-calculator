import { getExchangeRates } from "../api";
import { store } from "./store";

const initialState = {
  amount: "12.89",
  currencyCode: "USD",
  currencyData: { USD: 1.0 }
}

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ratesReducer(state = initialState, action) {
  switch (action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload }
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload }  
    case RATES_RECEIVED:
      return { ...store, currencyData: action.payload }  
    default:
      return state;  
  }  
}

//  Selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;

//  Action types
export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = 'rates/currencyCodeChanged';
export const RATES_RECEIVED = 'rates/ratesReceived';

//  Action creators
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount
})
export function changeCurrencyCode(currencyCode) {
  return function changeCurrencyCodeThunk(dispatch) {
    dispatch({
      type: CURRENCY_CODE_CHANGED,
      payload: currencyCode
    });
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      dispatch({
        type: RATES_RECEIVED,
        payload: rates
      });
    });
  }
} 

//  Thunks
export function getInitialRates(dispatch, getState) {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(changeCurrencyCode(currencyCode));
}