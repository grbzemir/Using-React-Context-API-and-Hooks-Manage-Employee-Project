import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddForm = () => {
    return (
        <Form>
            <FormGroup>
                <Form.Control type="text" placeholder="Name" required />
            </FormGroup>
            <FormGroup>
                <Form.Control type="email" placeholder="Email" required />
            </FormGroup>
            <FormGroup>
                <Form.Control type="text" placeholder="Address" rows={3} required />
            </FormGroup>
            <FormGroup>
                <Form.Control type="tel" placeholder="Phone" required />
            </FormGroup>

            <Button variant="success" type="submit" block></Button>
        </Form>
    )
}

export default AddForm
