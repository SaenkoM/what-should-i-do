import { combineReducers } from 'redux'

import app from './App/reducer'
import data from './Data/reducer'

export default combineReducers({
  app,
  data
})