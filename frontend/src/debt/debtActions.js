import axios from 'axios'

const URL = 'http://localhost:3003/api/debts'

export const search = () => {
    return (dispatch, getState) => {
        const debtorToShow = getState().debt.debtorToShow
        const search = debtorToShow ? `?debtor=${debtorToShow}` : ''
        axios.get(`${URL}/${search}`)
            .then(resp => dispatch({ type: 'DEBT_SEARCHED', payload: resp.data }))
    }
}

export const debtorSearch = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => dispatch({ type: 'DEBTORS_SEARCHED', payload: resp.data }))
    }
}

export const searchOne = (debt) => {
    return dispatch => {
        axios.get(`${URL}/${debt._id}`)
            .then(resp => dispatch({ type: 'DEBT_SEARCHED_ONE', payload: resp.data }))
    }
}

export const add = (description, value, date, debtor, debtorId) => {
    return dispatch => {
        axios.post(URL, { description, value, date, debtor, debtorId })
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

export const edit = (id, description, value, date, debtor, debtorId) => {
    return dispatch => {
        axios.put(`${URL}/${id}`, { description, value, date, debtor, debtorId })
            .then(resp => dispatch({ type: 'DEBT_EDITED' }))
            .then(resp => dispatch(clear()))
    }
}

export const clear = () => {
    return [{ type: 'DEBT_CLEAR' }, search()]
}

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

export const changeDebtorToShow = event => {
    return [{type: 'DEBTOR_TO_SHOW_CHANGED', payload: event.target.value}, search()]
}