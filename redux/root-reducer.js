import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user.reducer';
import debateReducer from './debate-reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer,
  debates:debateReducer
  
});

export default persistReducer(persistConfig, rootReducer);
