import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import { useSelector } from 'react-redux'
import Create from './components/Create/Create'
import MyPosts from './components/MyPosts/MyPosts'

function App() {
  const isAuthenticated = useSelector(state => state.isAuthenticated)
  const navigate = useNavigate()
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/create' element={<Create />} />
        <Route path='/mypost' element={<MyPosts/>} />
      </Routes>
    </div>
  )
}

export default App