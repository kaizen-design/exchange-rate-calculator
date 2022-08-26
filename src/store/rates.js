const initialState = {
  amount: "12.80",
  currencyCode: "USD"
}

export default function ratesReducer(state = initialState, action) {
  switch (action.type) {
    case 'rates/amountChanged':
      return { ...state, amount: action.payload }
    case 'rates/currencyCodeChanged':
      return { ...state, currencyCode: action.payload }  
    default:
      return state;  
  }  
}