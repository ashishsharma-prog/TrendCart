
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigator/AppNavigator';
import {createStore, combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from "redux-thunk"
import {Provider} from 'react-redux';
import productReducer from './store/action/reducers/productReducer';
import cartReducer from './store/action/reducers/cartReducer';
import orderReducer from './store/action/reducers/orderReducer';
import { LogBox } from 'react-native';
import {persistReducer,persistStore} from 'redux-persist'

import {PersistGate} from 'redux-persist/es/integration/react'
import AsyncStorageLib from '@react-native-async-storage/async-storage';


LogBox.ignoreAllLogs();

const rootReducer = combineReducers({
  products: productReducer,
  cart:cartReducer,
  orders:orderReducer
});
const persistConfig = {
  key:"root",
  storage:AsyncStorageLib
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer,applyMiddleware(ReduxThunk));
const persistor = persistStore(store)
export default function App() {
  return (
    <Provider store={store}>
<PersistGate persistor={persistor} loading={null}>


<AppNavigator/>
</PersistGate>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  
});
