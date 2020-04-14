const INITIAL_STATE = {
    description: '',
    value: '',
    date: '',
    debtor: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'DEBTOR_CHANGED':
            return { ...state, debtor: action.payload }
        case 'VALUE_CHANGED':
            return { ...state, value: action.payload }
        case 'DATE_CHANGED':
            return { ...state, date: action.payload }
        case 'DEBT_SEARCHED':
            return { ...state, list: action.payload }
        case 'DEBT_CLEAR':
            return { ...state, description: '', value: '', date: '', debtor: '' }
        default:
            return state
    }
}