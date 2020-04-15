import React from 'react'

import { Row, Col, Form } from 'react-bootstrap'

export default function Debtor() {
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">Débitos de:</Form.Label>
                            <Col sm="9">
                                <Form.Control as="select" size='sm'>
                                    <option>Todos</option>
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
