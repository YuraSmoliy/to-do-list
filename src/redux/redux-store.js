import { combineReducers } from 'redux'
import toDoListReducer from "./to-do-list-reducer";

export const rootReducer =  combineReducers({
    doList: toDoListReducer
})