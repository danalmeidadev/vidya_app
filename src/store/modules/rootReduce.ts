import { combineReducers } from 'redux';
import auth from './auth/reducer';
import register from './register/reducer';
import categories from './getCategories/reducer';
import services from './servicesUser/reducer';
import userMe from './userMe/reducer';
import staties from './staties/reducer';
import cities from './cities/reducer';

export default combineReducers({
  auth,
  register,
  categories,
  services,
  userMe,
  staties,
  cities,
});
