import { CALC_RATES } from '../actions/calc'

export default function calc(state = {}, action) {
    switch (action.type){
        case CALC_RATES:
            return {
                ...state,
                ...action.calc
            }
        default:
            return state
    }
}