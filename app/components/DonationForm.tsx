'use client'

import { useState } from 'react'

export default function DonationForm() {
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Donation amount:', amount)
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Donation Amount ($)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
      >
        Donate Now
      </button>
    </form>
  )
