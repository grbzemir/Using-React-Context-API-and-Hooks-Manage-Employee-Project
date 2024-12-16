import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

const AddForm = () => {
    return (
        <Form>
            <FormGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                />
            </FormGroup>

            <FormGroup className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                />
            </FormGroup>

            <Button variant="success" type="submit" className="w-100">
                Add New Employee
            </Button>
        </Form>
    );
};

export default AddForm;
