import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees] = useState([
        { id: 1, name: 'Emircan Gürbüz', email: 'eyetkingurbuz@gmail.com', address: '123 Main St, İstanbul, Türkiye', phone: '(532) 123-4567' },
        { id: 2, name: 'Tuğba Ateş', email: 'tgbgurbuz@gmail.com', address: '456 Elm St, Ankara, Türkiye', phone: '(532) 765-4321' },
        { id: 3, name: 'Eren Efe Yıldız', email: 'ernefeyldz@gmail.com', address: '789 Oak St, İzmir, Türkiye', phone: '(532) 246-8102' },
        { id: 4, name: 'Zuhal Kaya', email: 'zhlkya@gmail.com', address: '321 Pine St, Bursa, Türkiye', phone: '(532) 135-7913' },
        { id: 5, name: 'Can Tekin', email: 'cntkn@gmail.com', address: '654 Cedar St, Antalya, Türkiye', phone: '(532) 908-1234' }
    ])

    return (
        <div>
            <EmployeeContext.Provider>
                {props.children}
            </EmployeeContext.Provider>
        </div>
    )
}

export default EmployeeContextProvider