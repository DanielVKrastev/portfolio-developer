import { Routes, Route } from 'react-router'
import './App.css'
import Home from './views/Home'
import AdminDashboard from './views/AdminDashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/admin" element={<AdminDashboard />}/>
    </Routes>
    </>
  )
}

export default App
