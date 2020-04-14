import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Todo from '../debt/Debt'

export default props => (
    <HashRouter>
        <Route path='/debts' component={Todo} />
        <Redirect from='*' to='/debts' />
    </HashRouter>
)