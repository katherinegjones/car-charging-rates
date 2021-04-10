import { CALC_RATES, RECEIVE_CALC } from '../actions/calc'

export default function calc(state = {}, action) {
    switch (action.type){
        case RECEIVE_CALC:
            return {
                ...state,
                ...action.calc
            }
        case CALC_RATES:
            return {
                ...state,
                ...action.calc
            }
        default:
            return state
    }
}