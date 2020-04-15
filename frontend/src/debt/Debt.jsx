import React from 'react'

import PageHeader from '../template/PageHeader'
import DebtForm from './DebtForm'
import Debtor from './Debtor'
import DebtList from './DebtList'

export default props => (
    <div>
        <PageHeader name='Cadastro' small='de devedores' />
        <DebtForm />
        <PageHeader name='Lista' small='de devedores' />
        <Debtor />
        <DebtList />
    </div>
)