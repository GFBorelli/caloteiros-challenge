import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, changeDebtorToShow } from './debtActions'

import { Row, Col, Form } from 'react-bootstrap'

class Debtor extends Component {

    render() {
        const renderDebtors = () => {
            return this.props.debtorList.map(debtor => (
                <option key={debtor.id}>{debtor.name}</option>
            ))
        }

        return (
            <div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group as={Row}>
                                <Form.Label column sm="3">Débitos de:</Form.Label>
                                <Col sm="9">
                                    <Form.Control as="select" size='sm'
                                        onChange={this.props.changeDebtorToShow}
                                        value={this.props.debtorToShow}>
                                        <option></option>
                                        {renderDebtors()}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="3">Valor devido: </Form.Label>
                                <Col sm="9">
                                    <Form.Control plaintext readOnly defaultValue="x" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => ({ debtorList: state.debt.debtorList, debtorToShow: state.debt.debtorToShow })
const mapDispatchToProps = dispatch => bindActionCreators({ search, changeDebtorToShow }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Debtor)
