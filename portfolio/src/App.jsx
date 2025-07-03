import { Routes, Route } from 'react-router'
import { lazy } from 'react'
import './App.css'
import Home from './views/Home'

import { AdminProvider } from './providers/AdminProvider'
const AdminPanel = lazy(() => import('./views/AdminPanel'));
const Login = lazy(() => import('./components/admin/login/Login'));
const AdminGuard = lazy(() => import('./guards/AdminGuard'));

function App() {

  return (
    <>
    <AdminProvider>
    <Routes>
      <Route path="/*" element={<Home />}/>
      <Route element={<AdminGuard />}>
          <Route path="/admin/*" element={<AdminPanel />}/>
      </Route>
      <Route path="/admin/login" element={<Login />}/>
    </Routes>
    </AdminProvider >
    </>
  )
}

export default App
