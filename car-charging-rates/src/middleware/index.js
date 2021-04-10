import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

export default applyMiddleware(
    thunk,
    loadingBarMiddleware,
    logger
)