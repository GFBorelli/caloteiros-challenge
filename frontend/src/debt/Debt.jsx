import React from 'react'

import PageHeader from '../template/PageHeader'
import DebtForm from './DebtForm'
import DebtList from './DebtList'

export default props => (
    <div>
        <PageHeader name='Cadastro' small='de devedores' />
        <DebtForm />
        <PageHeader name='Lista' small='de devedores'/>
        <DebtList />
    </div>
)