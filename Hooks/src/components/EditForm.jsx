import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext } from 'react';


const EditForm = ({ theEmployee }) => {

    const { updateEmployee } = useContext(EmployeeContext);


    const employee = theEmployee;
    const id = employee.id;

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);


    return (
        <Form>
            <FormGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    rows={3}
                />
            </FormGroup>

            <FormGroup className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"

                />
            </FormGroup>

            <Button variant="success" type="submit" className="w-100">
                Edit New Employee
            </Button>
        </Form >
    );
};

export default EditForm;
