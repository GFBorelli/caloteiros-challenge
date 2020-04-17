import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, debtorSearch, add, edit, clear, changeDebtor, changeDebtorId, changeDate, changeValue, changeDescription } from './debtActions'

import { Col, Form, Button } from 'react-bootstrap'

class DebtForm extends Component {

    componentDidMount() {
        this.props.search()
        this.props.debtorSearch()
    }

    render() {
        const { add, edit, clear, description, value, date, id, debtorId, debtor, showEdit, debtorList } = this.props

        const renderDebtor = () => {
            return debtorList.map(debtor => (
                <option key={debtor.id}>{debtor.name}</option>
            ))
        }


        const getDebtorId = (e) => {
            debtorList.forEach(debtor => {
                if (debtor.name === e.target.value) {
                    this.props.changeDebtorId(debtor.id)
                }
            });
        }

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
                                onChange={(e) => {
                                    this.props.changeDebtor(e)
                                    getDebtorId(e)
                                }}
                                value={this.props.debtor}>
                                <option>Escolha um devedor</option>
                                {renderDebtor()}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Form.Group>
                        <Button className={`${showSubmitButton} mt-1`} variant='primary' onClick={() => add(description, value, date, debtor, debtorId)}> Incluir dívida </Button>{' '}
                        <Button className={`${showEditButton} mt-1`} variant='warning' onClick={() => edit(id, description, value, date, debtor, debtorId)}> Editar dívida </Button>{' '}
                        <Button className='mt-1' variant='secondary' onClick={clear}> Limpar formulário</Button>
                    </Form.Group>
                </Form.Row>
            </Form >
        )
    }
}

const mapStateToProps = state => ({
    description: state.debt.description,
    value: state.debt.value,
    date: state.debt.date,
    id: state.debt.id,
    debtorId: state.debt.debtorId,
    debtor: state.debt.debtor,
    debtorList: state.debt.debtorList,
    showEdit: state.debt.showEdit
})
const mapDispatchToProps = dispatch => bindActionCreators({
    search,
    debtorSearch,
    add,
    edit,
    clear,
    changeDebtor,
    changeDebtorId,
    changeDate,
    changeValue,
    changeDescription
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DebtForm)