import React from 'react'
import Employee from './Employee'
import { useState } from 'react'

const EmployeeList = () => {
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
                <Employee />
            </tbody>
        </table>
    )
}

export default EmployeeList
