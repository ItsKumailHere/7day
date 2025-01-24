'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Product } from '@/lib/products'

export interface CartItem extends Product {
  quantity: number
}

export interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  totalItems: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id)
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeItem = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== productId))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const total = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalItems, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useShoppingCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a CartProvider')
  }
  return context
}

