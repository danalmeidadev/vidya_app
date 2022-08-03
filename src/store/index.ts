import { createStore, applyMiddleware } from 'redux';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReduce from './modules/rootReduce';
import rootSaga from './modules/rootSaga';
import { IConsultDocumentState } from './modules/consultDocument/types';
import { ICreateClientState } from './modules/createClients/types';
import { IGetClientsState } from './modules/getClients/types';
import { IGetClientsWithProductsState } from './modules/getClientsWithProducts/types';
import { IGetUsersWithProductsState } from './modules/getusersWithProducts/types';
import { IUserState } from './modules/user/types';

export interface IAplicationState {
  document: IConsultDocumentState;
  createClient: ICreateClientState;
  getClients: IGetClientsState;
  getClientsWithProducts: IGetClientsWithProductsState;
  getUsersWithProducts: IGetUsersWithProductsState;
  user: IUserState;
}

const persistedReducer = persistReducer(
  {
    key: '@vidya',
    storage: AsyncStorage,
    whitelist: ['auth'],
    version: 1,
  },
  rootReduce,
);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor: Persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
