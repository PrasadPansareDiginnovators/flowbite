import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Sidebar from './componants/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Outlet></Outlet>
    </>
  )
}

export default App
