const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3002

// Middleware
app.use(cors())
app.use(express.json())

// Mock database
let items = [
  {
    id: 1,
    name: 'MacBook Air M2',
    description: 'Lightweight laptop with M2 chip and all-day battery life',
    price: 1199,
    image: 'https://tse4.mm.bing.net/th/id/OIP.KkRXhShNsYO-uIHnBQ6_OgHaEt?rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Laptops',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip',
    price: 999,
    image: 'https://th.bing.com/th/id/OIP.6-C86HzOqxyUVQ-xXpfiSgHaE8?w=226&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Smartphones',
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    name: 'AirPods Pro',
    description: 'Wireless earbuds with active noise cancellation',
    price: 249,
    image: 'https://th.bing.com/th/id/OIP.LZIu4HkOAEkr2simCYTh0QHaE7?w=246&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Audio',
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    name: 'Smart Watch Series 2',
    description: 'Advanced fitness tracking and health monitoring smartwatch',
    price: 299,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/9_903bd6e5-4773-4b43-8e5c-053061f35e15_900x900.jpg?v=1603253186',
    category: 'Wearables',
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    name: 'Smart Watch Series 3',
    description: 'Premium smartwatch with extended battery life and GPS',
    price: 399,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/8_5cc396ca-c787-4fec-b733-c6752de51a94_900x900.jpg?v=1603252729',
    category: 'Wearables',
    createdAt: new Date().toISOString()
  },
  {
    id: 6,
    name: 'Smart Refrigerator',
    description: 'Energy-efficient smart refrigerator with digital display',
    price: 899,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/2_a5093b72-b2b6-40cb-8e74-17572afe8191_900x900.jpg?v=1603249423',
    category: 'Appliances',
    createdAt: new Date().toISOString()
  },
  {
    id: 7,
    name: 'Smart TV 55"',
    description: '4K Ultra HD Smart TV with streaming capabilities',
    price: 699,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/17_af39c942-dcfd-4a4b-909d-9b2669117bf0_900x900.jpg?v=1573186004',
    category: 'Electronics',
    createdAt: new Date().toISOString()
  },
  {
    id: 8,
    name: 'High-Speed Blender',
    description: 'Professional-grade blender for smoothies and food prep',
    price: 149,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/12_5d757cf0-aeb4-4a8c-a8be-167c12df2c3f_900x900.jpg?v=1603250976',
    category: 'Appliances',
    createdAt: new Date().toISOString()
  },
  {
    id: 9,
    name: 'Tower Fan',
    description: 'Oscillating tower fan with remote control and timer',
    price: 89,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/13_f7afc346-0447-49a7-8e13-7ffd80636075_900x900.jpg?v=1603250970',
    category: 'Appliances',
    createdAt: new Date().toISOString()
  },
  {
    id: 10,
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation',
    price: 199,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/9_9780885a-f095-42f7-b6a9-26b571c97cef_900x900.jpg?v=1573184770',
    category: 'Audio',
    createdAt: new Date().toISOString()
  },
  {
    id: 11,
    name: 'Gaming Smartphone',
    description: 'High-performance smartphone designed for mobile gaming',
    price: 799,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/12_7bd293d6-9a15-4a7d-a3df-3a9baba54ff9_900x900.jpg?v=1573184768',
    category: 'Smartphones',
    createdAt: new Date().toISOString()
  },
  {
    id: 12,
    name: 'Desktop Computer',
    description: 'Powerful desktop computer for work and gaming',
    price: 1299,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/28_b18182a0-b155-4bf8-be96-a9ddc988c921_900x900.jpg?v=1610773373',
    category: 'Computers',
    createdAt: new Date().toISOString()
  },
  {
    id: 13,
    name: 'Wireless Gaming Mouse',
    description: 'Precision wireless mouse for gaming and productivity',
    price: 79,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/4_fc7cf216-6f43-4f5d-bacf-3bdd10ac02b7_900x900.jpg?v=1610773381',
    category: 'Accessories',
    createdAt: new Date().toISOString()
  },
  {
    id: 14,
    name: 'Washing Machine',
    description: 'Front-loading washing machine with smart features',
    price: 649,
    image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/7_a748d236-78f7-4fab-b40d-dddb8e126773_900x900.jpg?v=1603250832',
    category: 'Appliances',
    createdAt: new Date().toISOString()
  }
]

let nextId = 15

// Routes

// Get all items
app.get('/api/items', (req, res) => {
  res.json({
    success: true,
    data: items
  })
})

// Get single item
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const item = items.find(item => item.id === id)
  
  if (!item) {
    return res.status(404).json({
      success: false,
      message: 'Item not found'
    })
  }
  
  res.json({
    success: true,
    data: item
  })
})

// Create new item
app.post('/api/items', (req, res) => {
  const { name, description, price, category, image } = req.body
  
  // Basic validation
  if (!name || !description || !price || !category) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: name, description, price, category'
    })
  }
  
  const newItem = {
    id: nextId++,
    name,
    description,
    price: parseFloat(price),
    category,
    image: image || `https://via.placeholder.com/300x300?text=${encodeURIComponent(name)}`,
    createdAt: new Date().toISOString()
  }
  
  items.push(newItem)
  
  res.status(201).json({
    success: true,
    data: newItem,
    message: 'Item created successfully'
  })
})

// Update item
app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const itemIndex = items.findIndex(item => item.id === id)
  
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Item not found'
    })
  }
  
  const { name, description, price, category, image } = req.body
  
  items[itemIndex] = {
    ...items[itemIndex],
    name: name || items[itemIndex].name,
    description: description || items[itemIndex].description,
    price: price ? parseFloat(price) : items[itemIndex].price,
    category: category || items[itemIndex].category,
    image: image || items[itemIndex].image,
    updatedAt: new Date().toISOString()
  }
  
  res.json({
    success: true,
    data: items[itemIndex],
    message: 'Item updated successfully'
  })
})

// Delete item
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const itemIndex = items.findIndex(item => item.id === id)
  
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Item not found'
    })
  }
  
  items.splice(itemIndex, 1)
  
  res.json({
    success: true,
    message: 'Item deleted successfully'
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`API endpoints available at http://localhost:${PORT}/api`)
})