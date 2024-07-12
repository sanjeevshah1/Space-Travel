import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from "./Pages/Home.tsx"
import Layout from "./Pages/Home.tsx"
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<App/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
