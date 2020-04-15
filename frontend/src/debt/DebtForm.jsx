import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, add, edit, clear, changeDebtor, changeDate, changeValue, changeDescription } from './debtActions'

import { Col, Form, Button } from 'react-bootstrap'

const API = 'https://jsonplaceholder.typicode.com/users'


class DebtForm extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        this.props.search()

        fetch(API)
            .then(res => res.json())
            .then(data => this.setState({ list: data }))
    }

    render() {

        const renderDebtor = () => {
            return this.state.list.map(debtor => (
                <option key={debtor.id}>{debtor.name}</option>
            ))
        }

        const { add, edit, clear, description, value, date, id, debtor, showEdit } = this.props

        const showSubmitButton = showEdit ? 'd-none' : ''
        const showEditButton = showEdit ? '' : 'd-none'


        return (
            <Form className='mt-3 mb-4' >
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Motivo</Form.Label>
                            <Form.Control
                                placeholder='Digite o motivo da dívida'
                                onChange={this.props.changeDescription}
                                value={this.props.description}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col xs='12' sm='5' md='4'>
                        <Form.Group>
                            <Form.Label>Valor</Form.Label>
                            <Form.Control
                                placeholder='Digite o valor da dívida'
                                onChange={this.props.changeValue}
                                value={this.props.value}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Data</Form.Label>
                            <Form.Control
                                placeholder='Digite a data da dívida'
                                onChange={this.props.changeDate}
                                value={this.props.date}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Devedor</Form.Label>
                            <Form.Control as="select"
                                onChange={this.props.changeDebtor}
                                value={this.props.debtor}>
                                <option>Escolha um devedor</option>
                                {renderDebtor()}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Form.Group>
                        <Button className={`${showSubmitButton} mt-1`} variant='primary' onClick={() => add(description, value, date, debtor)}> Incluir dívida </Button>{' '}
                        <Button className={`${showEditButton} mt-1`} variant='warning' onClick={() => edit(id, description, value, date, debtor)}> Editar dívida </Button>{' '}
                        <Button className='mt-1' variant='secondary' onClick={clear}> Limpar formulário</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        )
    }
}


const mapStateToProps = state => ({
    description: state.debt.description,
    value: state.debt.value,
    date: state.debt.date,
    id: state.debt.id,
    debtor: state.debt.debtor,
    showEdit: state.debt.showEdit
})
const mapDispatchToProps = dispatch => bindActionCreators({
    search,
    add,
    edit,
    clear,
    changeDebtor,
    changeDate,
    changeValue,
    changeDescription
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DebtForm)