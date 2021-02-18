import filtersReducer from './filters';
import serverMethodsReducer from './serverMethods';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filters: filtersReducer,
  serverMethods: serverMethodsReducer,
});

export default rootReducer;
