import { combineReducers } from 'redux'
import debtReducer from '../debt/debtReducer'

const rootReducer = combineReducers({
    debt: debtReducer
})

export default rootReducer