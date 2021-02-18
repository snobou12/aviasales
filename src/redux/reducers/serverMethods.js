const initialState = {
  allTickets: [],
};

const serverMethods = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_TICKETS':
      return {
        ...state,
        allTickets: action.payload,
      };

    default:
      return state;
  }
};

export default serverMethods;
