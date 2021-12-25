import taskReducer from './allTasks.js'
import isLoggedReducer from './isLogged.js'
import { combineReducers } from 'redux'

export default combineReducers({tasks: taskReducer, isLogged: isLoggedReducer})