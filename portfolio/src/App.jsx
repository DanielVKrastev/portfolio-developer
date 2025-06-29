import { Routes, Route } from 'react-router'
import './App.css'
import Home from './views/Home'
import AdminPanel from './views/AdminPanel'
import Login from './components/admin/login/Login'
import AdminGuard from './guards/AdminGuard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route element={<AdminGuard />}>
          <Route path="/admin/*" element={<AdminPanel />}/>
      </Route>
      <Route path="/admin/login" element={<Login />}/>
    </Routes>
    </AdminProvider>
    </>
  )
}

export default App
