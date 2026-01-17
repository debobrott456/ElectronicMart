'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Items() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock API call - replace with actual API endpoint
    const fetchItems = async () => {
      try {
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock data - replace with actual API call
        const mockItems = [
          {
            id: 1,
            name: 'MacBook Air M2',
            description: 'Lightweight laptop with M2 chip and all-day battery life',
            price: 1199,
            image: 'https://tse4.mm.bing.net/th/id/OIP.KkRXhShNsYO-uIHnBQ6_OgHaEt?rs=1&pid=ImgDetMain&o=7&rm=3',
            category: 'Laptops'
          },
          {
            id: 2,
            name: 'iPhone 15 Pro',
            description: 'Latest iPhone with advanced camera system and A17 Pro chip',
            price: 999,
            image: 'https://th.bing.com/th/id/OIP.6-C86HzOqxyUVQ-xXpfiSgHaE8?w=226&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            category: 'Smartphones'
          },
          {
            id: 3,
            name: 'AirPods Pro',
            description: 'Wireless earbuds with active noise cancellation',
            price: 249,
            image: 'https://th.bing.com/th/id/OIP.LZIu4HkOAEkr2simCYTh0QHaE7?w=246&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            category: 'Audio'
          },
          {
            id: 4,
            name: 'Smart Watch Series 2',
            description: 'Advanced fitness tracking and health monitoring smartwatch',
            price: 299,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/9_903bd6e5-4773-4b43-8e5c-053061f35e15_900x900.jpg?v=1603253186',
            category: 'Wearables'
          },
          {
            id: 5,
            name: 'Smart Watch Series 3',
            description: 'Premium smartwatch with extended battery life and GPS',
            price: 399,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/8_5cc396ca-c787-4fec-b733-c6752de51a94_900x900.jpg?v=1603252729',
            category: 'Wearables'
          },
          {
            id: 6,
            name: 'Smart Refrigerator',
            description: 'Energy-efficient smart refrigerator with digital display',
            price: 899,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/2_a5093b72-b2b6-40cb-8e74-17572afe8191_900x900.jpg?v=1603249423',
            category: 'Appliances'
          },
          {
            id: 7,
            name: 'Smart TV 55"',
            description: '4K Ultra HD Smart TV with streaming capabilities',
            price: 699,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/17_af39c942-dcfd-4a4b-909d-9b2669117bf0_900x900.jpg?v=1573186004',
            category: 'Electronics'
          },
          {
            id: 8,
            name: 'High-Speed Blender',
            description: 'Professional-grade blender for smoothies and food prep',
            price: 149,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/12_5d757cf0-aeb4-4a8c-a8be-167c12df2c3f_900x900.jpg?v=1603250976',
            category: 'Appliances'
          },
          {
            id: 9,
            name: 'Tower Fan',
            description: 'Oscillating tower fan with remote control and timer',
            price: 89,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/13_f7afc346-0447-49a7-8e13-7ffd80636075_900x900.jpg?v=1603250970',
            category: 'Appliances'
          },
          {
            id: 10,
            name: 'Wireless Headphones',
            description: 'Premium wireless headphones with noise cancellation',
            price: 199,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/9_9780885a-f095-42f7-b6a9-26b571c97cef_900x900.jpg?v=1573184770',
            category: 'Audio'
          },
          {
            id: 11,
            name: 'Gaming Smartphone',
            description: 'High-performance smartphone designed for mobile gaming',
            price: 799,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/12_7bd293d6-9a15-4a7d-a3df-3a9baba54ff9_900x900.jpg?v=1573184768',
            category: 'Smartphones'
          },
          {
            id: 12,
            name: 'Desktop Computer',
            description: 'Powerful desktop computer for work and gaming',
            price: 1299,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/28_b18182a0-b155-4bf8-be96-a9ddc988c921_900x900.jpg?v=1610773373',
            category: 'Computers'
          },
          {
            id: 13,
            name: 'Wireless Gaming Mouse',
            description: 'Precision wireless mouse for gaming and productivity',
            price: 79,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/4_fc7cf216-6f43-4f5d-bacf-3bdd10ac02b7_900x900.jpg?v=1610773381',
            category: 'Accessories'
          },
          {
            id: 14,
            name: 'Washing Machine',
            description: 'Front-loading washing machine with smart features',
            price: 649,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/7_a748d236-78f7-4fab-b40d-dddb8e126773_900x900.jpg?v=1603250832',
            category: 'Appliances'
          }
        ]
        
        setItems(mockItems)
      } catch (error) {
        console.error('Error fetching items:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#001d3d] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600">Discover our wide range of electronic products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-sm bg-[#001d3d] bg-opacity-10 text-[#001d3d] px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#001d3d]">${item.price}</span>
                <Link
                  href={`/items/${item.id}`}
                  className="bg-[#001d3d] text-white px-4 py-2 rounded hover:bg-[#002a5c] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}