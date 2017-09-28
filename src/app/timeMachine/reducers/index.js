import { combineReducers } from 'redux'
import load from './load'
import time from './time'
import tube from './tube'

export default combineReducers({
  load,
  time,
  tube,
})
