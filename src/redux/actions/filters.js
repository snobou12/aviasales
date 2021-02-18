export const setFilterByFunc = (index) => ({
  type: 'SET_SORT_FUNC',
  payload: index,
});

export const setFilterByTrans = (index) => ({
  type: 'SET_SORT_TRANS',
  payload: index,
});

export const addMoreTickets = () => ({
  type: 'ADD_MORE_TICKETS',
});

export const setDefaultCountTickets = () => ({
  type: 'COUNT_DEFAULT_TICKETS',
});
