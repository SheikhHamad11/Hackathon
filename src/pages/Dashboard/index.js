import React from 'react'
import { Routes, Route } from "react-router-dom"
import AddEvent from './AddEvent'
import Todos from './Todos'

export default function index() {
  return (
    <Routes>
        <Route path='/'>
            <Route index element={<AddEvent />} />
            <Route path='todos' element={<Todos />} />
            
        </Route>
    </Routes>
  )
}
