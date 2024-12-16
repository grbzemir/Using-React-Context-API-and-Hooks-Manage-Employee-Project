import React from 'react'

const Employee = () => {
    return (
        <tr>
            <td>Emircan Gürbüz</td>
            <td>eyetkingurbuz@mail.com</td>
            <td>89 Chiaroscuro Rd, Portland, USA</td>
            <td>(171) 555-2222</td>
            <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </tr>
    )
}

export default Employee
