import { createStore } from 'redux'; //to create the store => props
import toggleFavorite from './Reducers/favoriateReducer';

export default createStore(toggleFavorite);
