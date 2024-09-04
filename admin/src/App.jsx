import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'



const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <hr></hr>
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App