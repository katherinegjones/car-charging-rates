import { calcResults, getCalc } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const CALC_RATES = 'CALC_RATES'
export const RECEIVE_CALC = 'RECEIVE_CALC'

function receiveCalc(calc) {
    return {
        type: RECEIVE_CALC,
        calc
    }
}

export function handleGetCalc() {
    return (dispatch) => {
        dispatch(showLoading())
        return getCalc()
        .then((results) => receiveCalc(results))
    }
}
function calcRates({ yearlyEv, altEvs, yearlyHome, altHomes }) {
    return {
        type: CALC_RATES,
        yearlyEv,
        altEvs,
        yearlyHome,
        altHomes
    }
}

export function handleCalcResults({rate, mileage, hours}) {
    return (dispatch) => {
        dispatch(showLoading())
        return(calcResults({rate, mileage, hours}))
        .then((results) => {
            dispatch(calcRates(results))
            dispatch(hideLoading())
        })
    }
}