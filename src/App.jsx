import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Info from './Info/Info'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info/:id' element={<Info/>} />
      </Routes>
    </div>
  )
}

export default App
