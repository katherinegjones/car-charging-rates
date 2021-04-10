import { CALC_RATES } from '../actions/calc'

export default function calc(state = {}, action) {
    switch (action.type){
        case CALC_RATES:
            return action.calcs
        default:
            return state
    }
}