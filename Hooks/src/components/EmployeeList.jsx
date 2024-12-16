import React, { useContext } from 'react'
import Employee from './Employee'
import { EmployeeContext } from '../context/EmployeeContext'
import { Button } from 'react-bootstrap';


const EmployeeList = () => {

    //useState, renderlar arasında veri tutmayı sağlar. useState, renderlar arasında verimizi tutmayı sağlayan bir React Hookudu

    //Gönderirken useContext kullanarak contextin kendisin yolluyoruz.
    const { employees } = useContext(EmployeeContext);

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <Employee employees={employees} />
                </tbody>
            </table>

            <Modal>
                <Modal.Header>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
            </Modal>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalShow(false)}>Close Button</Button>
            </Modal.Footer>
        </>
    )

}

export default EmployeeList
