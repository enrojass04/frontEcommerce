import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import About from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Carrito } from './pages/Carrito';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='login' element={<Login/>} />
            <Route path='carrito' element={<Carrito/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
