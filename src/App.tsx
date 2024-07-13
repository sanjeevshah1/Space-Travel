
import './App.css'
import Header from './Components/Header.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
        <div className='home-page'>
          <Header/>
          <Outlet/>
        </div>
  )
}

export default App
