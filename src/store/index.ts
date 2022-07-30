import { createStore, applyMiddleware } from 'redux';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReduce from './modules/rootReduce';
import rootSaga from './modules/rootSaga';
import { IAuthState } from './modules/auth/types';
import { ICategoriesState } from './modules/getCategories/types';
import { IUserServiceState } from './modules/servicesUser/types';
import { IUserMeState } from './modules/userMe/types';
import { IStatiesState } from './modules/staties/types';
import { ICitiesState } from './modules/cities/types';

export interface IAplicationState {
  auth: IAuthState;
  categories: ICategoriesState;
  services: IUserServiceState;
  userMe: IUserMeState;
  staties: IStatiesState;
  cities: ICitiesState;
}

const persistedReducer = persistReducer(
  {
    key: '@toLivre',
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
