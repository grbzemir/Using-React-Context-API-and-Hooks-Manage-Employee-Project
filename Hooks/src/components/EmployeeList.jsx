import React from 'react'
import Employee from './Employee'


const EmployeeList = () => {

    //useState, renderlar arasında veri tutmayı sağlar. useState, renderlar arasında verimizi tutmayı sağlayan bir React Hookudu


    return (
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
    )
}

export default EmployeeList
