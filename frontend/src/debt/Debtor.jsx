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
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Exibir débitos de:</Form.Label>
                        <Col sm="3">
                            <Form.Control as="select" size='sm'
                                onChange={this.props.changeDebtorToShow}
                                value={this.props.debtorToShow}>
                                <option></option>
                                {renderDebtors()}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => ({ debtorList: state.debt.debtorList, debtorToShow: state.debt.debtorToShow })
const mapDispatchToProps = dispatch => bindActionCreators({ search, changeDebtorToShow }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Debtor)
