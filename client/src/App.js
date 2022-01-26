import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

import Nav from './components/Nav'

function App() {
  return (
    // <div className='container'>
    //   <div className='row'>
    //     <h1>WELCOME TO THE SUBSCRIPTION APP</h1>
    //     <p className='lead'>Using React, Node, MongoDB, StripeAPI</p>
    //   </div>
    // </div>
    <BrowserRouter>
      <Nav />
      <Toaster
        position='bottom-right'
        toastOptions={{ position: 'bottom-right', duration: 2000 }}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
