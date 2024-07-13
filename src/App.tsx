
import './App.css'
import Header from './Components/Header.tsx'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location= useLocation();
  const page = location.state?.page || "home";
  return (
        <div className= {`${page}-page`}>
          <Header/>
          <Outlet/>
        </div>
  )
}

export default App
