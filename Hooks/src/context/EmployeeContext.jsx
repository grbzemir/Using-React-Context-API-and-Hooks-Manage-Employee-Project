import React, { useEffect } from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    /* const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Emircan Gürbüz', email: 'eyetkingurbuz@gmail.com', address: '123 Main St, İstanbul, Türkiye', phone: '(532) 123-4567' },
        { id: uuidv4(), name: 'Eren Efe Yıldız', email: 'ernefeyldz@gmail.com', address: '789 Oak St, İzmir, Türkiye', phone: '(532) 246-8102' },
        { id: uuidv4(), name: 'Zuhal Kaya', email: 'zhlkya@gmail.com', address: '321 Pine St, Bursa, Türkiye', phone: '(532) 135-7913' },
        { id: uuidv4(), name: 'Can Tekin', email: 'cntkn@gmail.com', address: '654 Cedar St, Antalya, Türkiye', phone: '(532) 908-1234' },
        { id: uuidv4(), name: 'Burcu Aksoy', email: 'brcaksy@gmail.com', address: '432 Cedar St, Muş, Türkiye', phone: '(342) 343-4323' }

     ]) */

    const reducer = (employees, action) => {
        switch (action.type) {
            case 'add_employee':
                return [...employees, {
                    id: uuidv4(),
                    name: action.name,
                    email: action.email,
                    address: action.address,
                    phone: action.phone
                }]

            case 'remove_employee':
                return employees.filter(employee => employee.id !== action.id)

            case 'update_employee':
                return employees.map(employee => (employee.id === action.id ? action.updatedEmployee : employee))

            default:
                return employees //dönüş yapmazsak hata verir

        }

    }

    //useReducer bir tane reducer içerir birde başlangıç durumu içerir
    const [employees, dispatch] = useReducer(reducer, [
        { id: uuidv4(), name: 'Emircan Gürbüz', email: 'eyetkingurbuz@gmail.com', address: '123 Main St, İstanbul, Türkiye', phone: '(532) 123-4567' },
        { id: uuidv4(), name: 'Eren Efe Yıldız', email: 'ernefeyldz@gmail.com', address: '789 Oak St, İzmir, Türkiye', phone: '(532) 246-8102' },
        { id: uuidv4(), name: 'Zuhal Kaya', email: 'zhlkya@gmail.com', address: '321 Pine St, Bursa, Türkiye', phone: '(532) 135-7913' },
        { id: uuidv4(), name: 'Can Tekin', email: 'cntkn@gmail.com', address: '654 Cedar St, Antalya, Türkiye', phone: '(532) 908-1234' },
        { id: uuidv4(), name: 'Burcu Aksoy', email: 'brcaksy@gmail.com', address: '432 Cedar St, Muş, Türkiye', phone: '(342) 343-4323' }
    ], () => {
        const employees = localStorage.getItem('employees')
        return employees ? JSON.parse(employees) : []
    })


    useEffect(() => {

        localStorage.setItem('employees', JSON.stringify(employees))

    })



    //en başta yolladım nasıl olcanı sıralancağını

    const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

    // const addEmployee = (name, email, address, phone) => {
    //     setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
    // }

    // const deleteEmployee = (id) => {
    //     setEmployees(employees.filter(employee => employee.id !== id))
    // }

    // const updateEmployee = (id, updatedEmployee) => {

    //     setEmployees(employees.map(employee => (employee.id === id ? updatedEmployee : employee)))

    // }



    return (
        <div>
            <EmployeeContext.Provider value={{ sortedEmployees, dispatch }}>
                {props.children}
            </EmployeeContext.Provider>
        </div>
    )
}

export default EmployeeContextProvider;