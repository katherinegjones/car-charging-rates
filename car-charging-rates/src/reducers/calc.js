import { CALC_RATES } from '../actions/calc'

export default function calc(state = {}, action) {
    switch (action.type){
        case CALC_RATES:
            const { yearlyEv, altEvs, yearlyHome, altHome } = action
            const calc = { 
                yearlyEv, 
                altEvs, 
                yearlyHome, 
                altHome }

            
            return {
                ...state,
                ...calc
            }
        default:
            return state
    }
}