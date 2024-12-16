import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './components/EmployeeList'
import EmployeeContextProvider from './context/EmployeeContext'

function App() {


  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

//Hook aslında javascript fonksiyonudur bunu unutma 
//Hooks daha etkili ve düzgün bir şekilde kod yazmamızı sağlar.
//class component yerine function component kullanmamızı sağlar.
// useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, useImperativeHandle, useLayoutEffect, useDebugValue gibi hooklar kullanmamızı sağlar.