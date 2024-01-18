
//  Now using Thunk for using asynchronous api call
import { createStore, applyMiddleware, compose } from 'redux';
import reducersRoot from './Reducers/reducer_index';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const storeRoot = createStore(reducersRoot, composeEnhancers(applyMiddleware(thunk)));

export default storeRoot;


//   Normaly using Redux  
// import {createStore}  from 'redux';
// import reducersRoot from './Reducers/reducer_index';
// const storeRoot = createStore(reducersRoot, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//export default storeRoot;

