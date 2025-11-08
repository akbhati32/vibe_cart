import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import CartPage from './pages/Cart'
import './index.css'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
