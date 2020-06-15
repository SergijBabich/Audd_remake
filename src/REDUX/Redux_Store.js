import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import musicReducer from './music_Reducer.js';
import { reducer as formReducer } from 'redux-form';
let reducers = combineReducers({
  sound: musicReducer,
  form: formReducer
});
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e);
  }
}



const loadFromLocalStorage = () => {
  try {
    const serializedState =  localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e);
    return undefined;
  }
  }


  
 const persistedState = loadFromLocalStorage();

let store = createStore(reducers,persistedState, applyMiddleware(thunkMiddleware));
store.subscribe(()=> saveToLocalStorage(store.getState()))
window.store = store;
export default  store;
