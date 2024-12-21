import React, { useState, useContext } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';

const AddForm = () => {

    const { dispatch } = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    const { name, email, address, phone } = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add_employee',
            name,
            email,
            address,
            phone
        });
        setNewEmployee({
            name: '',
            email: '',
            address: '',
            phone: ''
        });
    };

    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={onInputChange}
                    rows={3}
                />
            </FormGroup>

            <FormGroup className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={onInputChange}
                />
            </FormGroup>

            <Button variant="success" type="submit" className="w-100">
                Add New Employee
            </Button>
        </Form >
    );
};

export default AddForm;
