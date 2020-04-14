import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDebtor, changeDate, changeValue, changeDescription, search, add, clear } from './debtActions'

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

        const { add, description, value, date, debtor, clear } = this.props
        return (
            <Form className='mt-3 mb-4' >
                <Form.Row>
                    <Col xs='12' sm='7' md='8'>
                        <Form.Group>
                            <Form.Label>Motivo</Form.Label>
                            <Form.Control
                                placeholder='Digite o motivo da dívida'
                                onChange={this.props.changeDescription}
                                value={this.props.description}
                            />
                        </Form.Group>
                    </Col>

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
                </Form.Row>

                <Form.Row>
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

                    <Col className='mt-2' xs='12' sm='5' md='4'>
                        <Form.Group>
                            <br />
                            <Button className='mb-1' variant='primary' onClick={() => add(description, value, date, debtor)}> Incluir dívida </Button>{' '}
                            <Button className='mb-1' variant='secondary' onClick={clear}> Limpar formulário </Button>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}


const mapStateToProps = state => ({
    description: state.debt.description,
    value: state.debt.value,
    date: state.debt.date,
    debtor: state.debt.debtor
})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDebtor, changeDate, changeValue, changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DebtForm)