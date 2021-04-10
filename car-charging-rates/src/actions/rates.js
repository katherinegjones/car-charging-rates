import { getRateOptions, addRateOption } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ADD_RATE = 'ADD_RATE'
export const RECEIVE_RATES = 'RECEIVE_RATES'

function receiveRates(rates) {
    return {
        type: RECEIVE_RATES,
        rates
    }
}

export function handleReceiveRates() {
    return(dispatch) => {
        dispatch(showLoading())
        return getRateOptions()
        .then((results) => {
            dispatch(receiveRates(results))
            dispatch(hideLoading())
        })
    }
}
function addRate(rate) {
    return {
        type: ADD_RATE,
        rate
    }
}

export function handleAddRate(rate) {
    return(dispatch) => {
        dispatch(showLoading())
        return addRateOption(rate)
        .then(() => {
            dispatch(addRate(rate))
            dispatch(hideLoading())
        })
    }
}