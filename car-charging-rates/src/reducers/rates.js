import { RECEIVE_RATES, ADD_RATE } from '../actions/rates'

export default function rates(state={}, action) {
    switch (action.type){
        case RECEIVE_RATES:
            return action.rateOptions
        case ADD_RATE:
            return {
                ...state,
                [action.rate.id]: action.rate
            }
        default:
            return state
    }
}