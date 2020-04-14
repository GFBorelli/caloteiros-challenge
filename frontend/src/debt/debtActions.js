import axios from 'axios'

const URL = 'http://localhost:3003/api/debts'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED', payload: event.target.value
})

export const changeDebtor = event => ({
    type: 'DEBTOR_CHANGED', payload: event.target.value
})

export const changeValue = event => ({
    type: 'VALUE_CHANGED', payload: event.target.value
})

export const changeDate = event => ({
    type: 'DATE_CHANGED', payload: event.target.value
})

export const search = () => {
    return dispatch => {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => dispatch({ type: 'DEBT_SEARCHED', payload: resp.data }))
    }
}

export const add = (description, value, date, debtor) => {
    return dispatch => {
        axios.post(URL, { description, value, date, debtor })
            .then(resp => dispatch({ type: 'DEBT_ADDED' }))
            .then(resp => dispatch(clear()))
    }
}

export const remove = (debt) => {
    return dispatch => {
        axios.delete(`${URL}/${debt._id}`)
            .then(resp => dispatch({ type: 'DEBT_REMOVE' }))
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'DEBT_CLEAR' }, search()]
}