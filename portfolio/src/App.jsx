import { Routes, Route } from 'react-router'
import './App.css'
import Home from './views/Home'
import AdminPanel from './views/AdminPanel'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/admin/*" element={<AdminPanel />}/>
    </Routes>
    </>
  )
}

export default App
