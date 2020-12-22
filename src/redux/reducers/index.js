import filters from './filters';
import pizzas from  './pizzas';
import cart from './cart';
import { combineReducers } from 'redux';


// const rootReducer = combineReducers({
//   filters: filtersReducer,
//   pizzas: pizzasReducer,
//   cart: cartReducer
// });
// благодаря ES6+ 

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart
});



export default rootReducer;