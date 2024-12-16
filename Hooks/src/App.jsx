import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './components/EmployeeList'

function App() {


  return (
    <div className="App">
      <div class="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                </div>
              </div>
            </div>
            <EmployeeList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

//Hooks daha etkili ve düzgün bir şekilde kod yazmamızı sağlar.
//class component yerine function component kullanmamızı sağlar.
// useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, useImperativeHandle, useLayoutEffect, useDebugValue gibi hooklar kullanmamızı sağlar.