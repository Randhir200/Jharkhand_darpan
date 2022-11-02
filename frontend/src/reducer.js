export let initState = {
  amount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'Add': {
      return {
        ...state,
        amount: action.amount + state.amount,
      };
    }

    case 'Remove': {
      return {
        ...state,
        amount: state.amount - action.amount,
      };
    }

    default: {
      break;
    }
  }
}

export default reducer;
