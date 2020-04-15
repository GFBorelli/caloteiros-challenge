import React from 'react'
import { Navbar} from 'react-bootstrap'
import { GiPirateGrave } from 'react-icons/gi';

export default props => (

    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#debts'>
            <GiPirateGrave size='2.4rem' />{' '}
            Caloteiros App
        </Navbar.Brand>
    </Navbar>
)