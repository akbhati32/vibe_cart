import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { Link, useNavigate } from 'react-router-dom'

export default function ProductList(){
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(()=> JSON.parse(localStorage.getItem('cart')||'[]'))
  const navigate = useNavigate()

  useEffect(() => {
  axios.get(import.meta.env.VITE_API_URL + '/api/products')
    .then(r => {
      if (Array.isArray(r.data)) setProducts(r.data)
      else {
        console.error("Unexpected response:", r.data)
        setProducts([])
      }
    })
    .catch(err => {
      console.error("API error:", err)
      setProducts([])
    })
}, [])


  useEffect(()=> localStorage.setItem('cart', JSON.stringify(cart)), [cart])

  function addToCart(product){
    setCart(prev=>{
      const found = prev.find(p=> p._id === product._id)
      if(found) return prev.map(p=> p._id === product._id ? {...p, qty: p.qty+1} : p)
      return [...prev, {...product, qty:1}]
    })
  }

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">VibeCart</h1>
        <div className="flex items-center space-x-4">
          <button onClick={()=> navigate('/cart')} className="bg-sky-600 text-white px-4 py-2 rounded">Cart ({cart.reduce((s,i)=> s+i.qty,0)})</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p=> (
          <ProductCard key={p._id} product={p} onAdd={()=> addToCart(p)} />
        ))}
      </main>
    </div>
  )
}
