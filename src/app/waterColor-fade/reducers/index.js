import { combineReducers } from 'redux'
import load from './load'
import windowSize from './windowSize'
import camera from './camera'
import time from './time'
import mouse from './mouse'
import pointer from './pointer'
import resolution from './resolution'
import image from './image'

export default combineReducers({
  load,
  windowSize,
  camera,
  time,
  mouse,
  // pointer,
  resolution,
  image,
})
