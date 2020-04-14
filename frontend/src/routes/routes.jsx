import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Debt from '../debt/Debt'

export default props => (
    <HashRouter>
        <Route path='/debts' component={Debt} />
        <Redirect from='*' to='/debts' />
    </HashRouter>
)