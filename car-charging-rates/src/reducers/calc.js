import { CALC_RATES } from '../actions/calc'

export default function calc(state = {}, action) {
    switch (action.type){
        case CALC_RATES:
            return {
                ...state,
                calc: {
                    yearlyEv: action.yearlyEv,
                    altEvs: action.altEvs,
                    yearlyHome: action.yearlyHome, 
                    altHomes: action.altHomes
                }
            }
        default:
            return state
    }
}