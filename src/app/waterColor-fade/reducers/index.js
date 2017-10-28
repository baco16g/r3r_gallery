import { combineReducers } from 'redux'
import load from './load'
import windowSize from './windowSize'
import camera from './camera'
import time from './time'
import resolution from './resolution'

export default combineReducers({
  load,
  windowSize,
  camera,
  time,
  resolution,
})
