import axios from 'axios';
import { sortFunction } from '../../sortFunction';
export const fetchIdFromServer = (sortByTrans, sortByFunc) => (dispatch) => {
  axios
    .get('https://front-test.beta.aviasales.ru/search')
    .then(({ data }) => {
      dispatch(fetchTicketInfo(sortByTrans, sortByFunc, data.searchId));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchTicketInfo = (sortByTrans, sortByFunc, id) => (dispatch) => {
  axios
    .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
    .then(({ data }) => {
      dispatch(setAllTickets(sortFunction(sortByTrans, sortByFunc, data.tickets)));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setAllTickets = (data) => ({
  type: 'SET_ALL_TICKETS',
  payload: data,
});
