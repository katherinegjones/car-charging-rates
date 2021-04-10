import { combineReducers } from 'redux'
import calc from './calc'
import rates from './rates'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    calc,
    rates,
    loadingBar: loadingBarReducer
})