const INITIAL_STATE = {
    description: '',
    value: '',
    date: '',
    debtor: '',
    id: '',
    list: [],
    showEdit: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DEBT_SEARCHED':
            return { ...state, list: action.payload }
        case 'DEBT_CLEAR':
            return { ...state, description: '', value: '', date: '', debtor: '', showEdit: false }
        case 'DEBT_SEARCHED_ONE':
            return {
                ...state,
                description: action.payload.description,
                value: action.payload.value,
                date: action.payload.date,
                id: action.payload._id,
                debtor: action.payload.debtor,
                showEdit: true
            }
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'DEBTOR_CHANGED':
            return { ...state, debtor: action.payload }
        case 'VALUE_CHANGED':
            return { ...state, value: action.payload }
        case 'DATE_CHANGED':
            return { ...state, date: action.payload }
        default:
            return state
    }
}