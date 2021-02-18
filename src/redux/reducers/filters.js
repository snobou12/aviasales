const initialState = {
  sortByFunc: 0,
  sortByTrans: [false, false, false, false],
  countTickets: 5,
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_FUNC') {
    return {
      ...state,
      sortByFunc: action.payload,
    };
  }

  if (action.type === 'ADD_MORE_TICKETS') {
    return {
      ...state,
      countTickets: state.countTickets + 5,
    };
  }
  if (action.type === 'COUNT_DEFAULT_TICKETS') {
    return {
      ...state,
      countTickets: 5,
    };
  }
  if (action.type === 'SET_SORT_TRANS') {
    const newSortByTrans = {
      ...state.sortByTrans,
      [action.payload]: !state.sortByTrans[action.payload],
    };

    return {
      ...state,
      sortByTrans: newSortByTrans,
    };
  }
  return state;
};

export default filters;
