import React from 'react'

export default function ProductCard({product, onAdd}){
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
      <div className="h-40 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="max-h-36 object-contain"/>
      </div>
      <h2 className="mt-3 font-semibold">{product.name}</h2>
      <p className="text-sm text-slate-500 flex-1">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-bold">₹{product.price}</div>
        <button onClick={onAdd} className="px-3 py-1 rounded-xl bg-emerald-500 text-white">Add</button>
      </div>
    </div>
  )
}
