export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      let newTransaction = {
        text: action.payload.text,
        amount: +action.payload.amount,
        id: Math.floor(Math.random() * 100),
      };
      return {
        ...state,
        transactions: [newTransaction, ...state.transactions],
      };
    default:
      return state;
  }
};
