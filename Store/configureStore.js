import {createStore, combineReducers} from 'redux'; //to create the store => props
import toggleFavorite from './Reducers/favoriateReducer';
import setAvatar from './Reducers/avatarReducer';

export default createStore(combineReducers({toggleFavorite, setAvatar}));
