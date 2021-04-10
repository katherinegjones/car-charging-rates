import { calcResults } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const CALC_RATES = 'CALC_RATES'

function calcRates({ yearlyEv, altEvs, yearlyHome, altHome }) {
    return {
        type: CALC_RATES,
        yearlyEv, 
        altEvs, 
        yearlyHome, 
        altHome
    }
}

export function handleCalcResults({rate, mileage, hours}) {
    return (dispatch) => {
        dispatch(showLoading)
        return(calcResults({rate, mileage, hours}))
        .then(({yearlyEv, altEvs, yearlyHome, altHome}) => {
            dispatch(calcRates({yearlyEv, altEvs, yearlyHome, altHome}))
            dispatch(hideLoading())
        })
    }
}