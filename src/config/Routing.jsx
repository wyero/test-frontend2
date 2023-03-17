import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, Dashboard, DetailArticle} from '../pages'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<Dashboard/>}/>
            <Route path='/article/:id' element={<DetailArticle/>}/>
            <Route path='*' element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default Routing