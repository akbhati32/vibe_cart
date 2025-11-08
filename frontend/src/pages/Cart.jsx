import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CartPage() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))
  const [showReceipt, setShowReceipt] = useState(false)
  const [customer, setCustomer] = useState({ name: '', email: '' })
  const [finalReceipt, setFinalReceipt] = useState({ items: [], total: 0 })

  const navigate = useNavigate()

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])

  function updateQty(id, delta) {
    setCart(prev => prev.map(it => it._id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
  }
  function removeItem(id) {
    setCart(prev => prev.filter(it => it._id !== id))
  }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  function checkout() {
    if (!customer.name || !customer.email) {
      alert('Please enter your name and email before checkout.')
      return
    }
    
    // simple client-side receipt
    setFinalReceipt({ items: cart, total })
    setShowReceipt(true)
    // clear cart after checkout
    localStorage.removeItem('cart')
    setCart([])
  }

  if (showReceipt) return (
    <div className="min-h-screen p-6 bg-slate-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow max-w-xl w-full">
        <h2 className="text-xl font-bold mb-2">Receipt</h2>
        <p>Customer: {customer.name || 'Anonymous'} — {customer.email || '—'}</p>
        <ul className="mt-4 space-y-2">
          {finalReceipt.items.map(i => (
            <li key={i._id} className="flex justify-between">
              <div>{i.name} x {i.qty}</div>
              <div>₹{i.price * i.qty}</div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right font-bold">Total: ₹{finalReceipt.total}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={() => navigate('/')} className="px-4 py-2 rounded bg-sky-600 text-white">Back to shop</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cart</h1>
      </header>
      <main className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">
        {cart.length === 0 ? <p>Your cart is empty — <button onClick={() => navigate('/')} className="text-sky-600">Go shopping</button></p> : (
          <>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item._id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-slate-500">₹{item.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => updateQty(item._id, -1)} className="px-2 py-1 border rounded">-</button>
                    <div>{item.qty}</div>
                    <button onClick={() => updateQty(item._id, +1)} className="px-2 py-1 border rounded">+</button>
                    <button onClick={() => removeItem(item._id)} className="ml-4 text-red-500">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <input value={customer.name} onChange={e => setCustomer({ ...customer, name: e.target.value })} placeholder="Name" className="border p-2 rounded mr-2" />
                <input value={customer.email} onChange={e => setCustomer({ ...customer, email: e.target.value })} placeholder="Email" className="border p-2 rounded" />
              </div>
              <div>
                <div className="text-lg font-bold mb-2">Total: ₹{total}</div>
                <button onClick={checkout} className="px-4 py-2 rounded bg-emerald-500 text-white">Checkout</button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
