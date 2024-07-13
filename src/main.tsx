import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './Pages/Home.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Destination from './Pages/Destination.tsx'
import Crew from './Pages/Crew.tsx'
import Technology from './Pages/Technology.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />}>
          <Route index element = {<Home/>}/>
          <Route path='home' element = {<Home/>}/>
          <Route path='destination' element = {<Destination/>}/>
          <Route path='crew' element = {<Crew/>}/>
          <Route path='technology' element = {<Technology/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
