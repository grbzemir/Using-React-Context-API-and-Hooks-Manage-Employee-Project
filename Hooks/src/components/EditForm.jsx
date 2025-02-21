import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext } from 'react';


const EditForm = ({ theEmployee }) => {

    const { dispatch } = useContext(EmployeeContext);


    const employee = theEmployee;
    const id = employee.id;

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);

    const updatedEmployee = { id, name, email, address, phone };

    const handleSubmit = (e) => {
        e.preventDefault();
        //updateEmployee(id, updatedEmployee);
        dispatch({ type: 'update_employee', id, updatedEmployee });
    };


    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                />
            </FormGroup>

            <FormGroup className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </FormGroup>

            <Button variant="success" type="submit" className="w-100">
                Update Employee
            </Button>
        </Form >
    );
};

export default EditForm;
