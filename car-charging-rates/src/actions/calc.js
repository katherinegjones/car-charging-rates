import { calcResults } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const CALC_RATES = 'CALC_RATES'


function calcRates(calc) {
    return {
        type: CALC_RATES,
        calc
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