import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Emircan Gürbüz', email: 'eyetkingurbuz@gmail.com', address: '123 Main St, İstanbul, Türkiye', phone: '(532) 123-4567' },
        { id: uuidv4(), name: 'Tuğba Gürbüz', email: 'tugbagurbuz@gmail.com', address: '456 Elm St, Ankara, Türkiye', phone: '(532) 765-4321' },
        { id: uuidv4(), name: 'Eren Efe Yıldız', email: 'ernefeyldz@gmail.com', address: '789 Oak St, İzmir, Türkiye', phone: '(532) 246-8102' },
        { id: uuidv4(), name: 'Zuhal Kaya', email: 'zhlkya@gmail.com', address: '321 Pine St, Bursa, Türkiye', phone: '(532) 135-7913' },
        { id: uuidv4(), name: 'Can Tekin', email: 'cntkn@gmail.com', address: '654 Cedar St, Antalya, Türkiye', phone: '(532) 908-1234' }
    ])

    addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
    }

    return (
        <div>
            <EmployeeContext.Provider value={{ employees }}>
                {props.children}
            </EmployeeContext.Provider>
        </div>
    )
}

export default EmployeeContextProvider