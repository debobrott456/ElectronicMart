'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function ItemDetails() {
  const params = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // Mock API call - replace with actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Mock data - replace with actual API call
        const mockItems = {
          1: {
            id: 1,
            name: 'MacBook Air M2',
            description: 'The MacBook Air with M2 chip delivers incredible performance in an ultra-thin design. Perfect for work, creativity, and everything in between with all-day battery life.',
            price: 1199,
            image: 'https://tse4.mm.bing.net/th/id/OIP.KkRXhShNsYO-uIHnBQ6_OgHaEt?rs=1&pid=ImgDetMain&o=7&rm=3',
            category: 'Laptops',
            specifications: {
              'Chip': 'Apple M2',
              'Display': '13.6-inch Liquid Retina',
              'Memory': '8GB, 16GB, 24GB unified memory',
              'Storage': '256GB, 512GB, 1TB, 2TB SSD',
              'Battery': 'Up to 18 hours',
              'Weight': '2.7 pounds'
            },
            inStock: true
          },
          2: {
            id: 2,
            name: 'iPhone 15 Pro',
            description: 'The iPhone 15 Pro features a titanium design, advanced camera system with 5x telephoto zoom, and the powerful A17 Pro chip. Experience professional photography and videography capabilities in your pocket.',
            price: 999,
            image: 'https://th.bing.com/th/id/OIP.6-C86HzOqxyUVQ-xXpfiSgHaE8?w=226&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            category: 'Smartphones',
            specifications: {
              'Display': '6.1-inch Super Retina XDR',
              'Chip': 'A17 Pro',
              'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
              'Storage': '128GB, 256GB, 512GB, 1TB',
              'Battery': 'Up to 23 hours video playback',
              'Material': 'Titanium'
            },
            inStock: true
          },
          3: {
            id: 3,
            name: 'AirPods Pro',
            description: 'AirPods Pro feature active noise cancellation, transparency mode, and spatial audio for an immersive listening experience.',
            price: 249,
            image: 'https://th.bing.com/th/id/OIP.LZIu4HkOAEkr2simCYTh0QHaE7?w=246&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            category: 'Audio',
            specifications: {
              'Noise Cancellation': 'Active Noise Cancellation',
              'Battery': 'Up to 6 hours listening time',
              'Charging Case': 'Up to 30 hours total',
              'Water Resistance': 'IPX4',
              'Connectivity': 'Bluetooth 5.3',
              'Features': 'Spatial Audio, Transparency Mode'
            },
            inStock: true
          },
          4: {
            id: 4,
            name: 'Smart Watch Series 2',
            description: 'Advanced fitness tracking and health monitoring smartwatch with GPS, heart rate monitoring, and water resistance.',
            price: 299,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/9_903bd6e5-4773-4b43-8e5c-053061f35e15_900x900.jpg?v=1603253186',
            category: 'Wearables',
            specifications: {
              'Display': '1.9-inch AMOLED',
              'Battery': 'Up to 7 days',
              'Water Resistance': '5ATM',
              'Sensors': 'Heart Rate, GPS, Accelerometer',
              'Connectivity': 'Bluetooth 5.0, Wi-Fi',
              'Compatibility': 'iOS and Android'
            },
            inStock: true
          },
          5: {
            id: 5,
            name: 'Smart Watch Series 3',
            description: 'Premium smartwatch with extended battery life, GPS tracking, and comprehensive health monitoring features.',
            price: 399,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/8_5cc396ca-c787-4fec-b733-c6752de51a94_900x900.jpg?v=1603252729',
            category: 'Wearables',
            specifications: {
              'Display': '2.1-inch OLED',
              'Battery': 'Up to 14 days',
              'Water Resistance': '10ATM',
              'Sensors': 'Heart Rate, GPS, SpO2, Sleep Tracking',
              'Connectivity': 'Bluetooth 5.2, Wi-Fi, NFC',
              'Storage': '32GB'
            },
            inStock: true
          },
          6: {
            id: 6,
            name: 'Smart Refrigerator',
            description: 'Energy-efficient smart refrigerator with digital display, Wi-Fi connectivity, and advanced temperature control for optimal food preservation.',
            price: 899,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/2_a5093b72-b2b6-40cb-8e74-17572afe8191_900x900.jpg?v=1603249423',
            category: 'Appliances',
            specifications: {
              'Capacity': '18 cubic feet',
              'Energy Rating': 'Energy Star Certified',
              'Display': '7-inch touchscreen',
              'Connectivity': 'Wi-Fi, Smart Home Integration',
              'Features': 'Temperature Control, Ice Maker',
              'Warranty': '2 years'
            },
            inStock: true
          },
          7: {
            id: 7,
            name: 'Smart TV 55"',
            description: '4K Ultra HD Smart TV with HDR support, built-in streaming apps, and voice control for the ultimate entertainment experience.',
            price: 699,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/17_af39c942-dcfd-4a4b-909d-9b2669117bf0_900x900.jpg?v=1573186004',
            category: 'Electronics',
            specifications: {
              'Screen Size': '55 inches',
              'Resolution': '4K Ultra HD (3840 x 2160)',
              'HDR': 'HDR10, Dolby Vision',
              'Smart Platform': 'Android TV',
              'Connectivity': 'Wi-Fi, Bluetooth, 4x HDMI, 2x USB',
              'Audio': 'Dolby Atmos'
            },
            inStock: true
          },
          8: {
            id: 8,
            name: 'High-Speed Blender',
            description: 'Professional-grade blender with powerful motor, multiple speed settings, and durable stainless steel blades for smoothies and food prep.',
            price: 149,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/12_5d757cf0-aeb4-4a8c-a8be-167c12df2c3f_900x900.jpg?v=1603250976',
            category: 'Appliances',
            specifications: {
              'Motor Power': '1200 watts',
              'Capacity': '64 oz pitcher',
              'Speed Settings': '10 variable speeds + pulse',
              'Material': 'BPA-free Tritan plastic',
              'Features': 'Self-cleaning, Pre-programmed settings',
              'Warranty': '3 years'
            },
            inStock: true
          },
          9: {
            id: 9,
            name: 'Tower Fan',
            description: 'Oscillating tower fan with remote control, timer function, and multiple speed settings for efficient air circulation.',
            price: 89,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/13_f7afc346-0447-49a7-8e13-7ffd80636075_900x900.jpg?v=1603250970',
            category: 'Appliances',
            specifications: {
              'Height': '42 inches',
              'Speed Settings': '3 speed levels',
              'Oscillation': '90-degree oscillation',
              'Timer': '1-8 hour timer',
              'Remote Control': 'Included',
              'Noise Level': 'Ultra-quiet operation'
            },
            inStock: true
          },
          10: {
            id: 10,
            name: 'Wireless Headphones',
            description: 'Premium wireless headphones with active noise cancellation, superior sound quality, and long-lasting battery life.',
            price: 199,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/9_9780885a-f095-42f7-b6a9-26b571c97cef_900x900.jpg?v=1573184770',
            category: 'Audio',
            specifications: {
              'Driver Size': '40mm dynamic drivers',
              'Frequency Response': '20Hz - 20kHz',
              'Battery Life': 'Up to 30 hours',
              'Charging': 'USB-C fast charging',
              'Noise Cancellation': 'Active Noise Cancellation',
              'Connectivity': 'Bluetooth 5.2'
            },
            inStock: true
          },
          11: {
            id: 11,
            name: 'Gaming Smartphone',
            description: 'High-performance smartphone designed for mobile gaming with advanced cooling system, high refresh rate display, and gaming triggers.',
            price: 799,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/12_7bd293d6-9a15-4a7d-a3df-3a9baba54ff9_900x900.jpg?v=1573184768',
            category: 'Smartphones',
            specifications: {
              'Display': '6.78-inch AMOLED, 144Hz',
              'Processor': 'Snapdragon 8 Gen 2',
              'RAM': '12GB LPDDR5',
              'Storage': '256GB UFS 4.0',
              'Battery': '6000mAh with 65W fast charging',
              'Gaming Features': 'Shoulder triggers, Cooling system'
            },
            inStock: true
          },
          12: {
            id: 12,
            name: 'Desktop Computer',
            description: 'Powerful desktop computer with high-performance processor, dedicated graphics card, and ample storage for work and gaming.',
            price: 1299,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/28_b18182a0-b155-4bf8-be96-a9ddc988c921_900x900.jpg?v=1610773373',
            category: 'Computers',
            specifications: {
              'Processor': 'Intel Core i7-13700K',
              'Graphics': 'NVIDIA RTX 4060 Ti',
              'RAM': '16GB DDR4',
              'Storage': '1TB NVMe SSD + 2TB HDD',
              'Operating System': 'Windows 11 Pro',
              'Connectivity': 'Wi-Fi 6, Bluetooth 5.3'
            },
            inStock: true
          },
          13: {
            id: 13,
            name: 'Wireless Gaming Mouse',
            description: 'Precision wireless gaming mouse with customizable RGB lighting, programmable buttons, and ultra-responsive sensor.',
            price: 79,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/4_fc7cf216-6f43-4f5d-bacf-3bdd10ac02b7_900x900.jpg?v=1610773381',
            category: 'Accessories',
            specifications: {
              'Sensor': 'PixArt 3370, up to 20,000 DPI',
              'Buttons': '8 programmable buttons',
              'Battery': 'Up to 70 hours',
              'Connectivity': '2.4GHz wireless + Bluetooth',
              'RGB Lighting': '16.8 million colors',
              'Weight': '85g ultralight design'
            },
            inStock: true
          },
          14: {
            id: 14,
            name: 'Washing Machine',
            description: 'Front-loading washing machine with smart features, energy efficiency, and multiple wash cycles for all fabric types.',
            price: 649,
            image: 'https://nuranium-electronic.myshopify.com/cdn/shop/products/7_a748d236-78f7-4fab-b40d-dddb8e126773_900x900.jpg?v=1603250832',
            category: 'Appliances',
            specifications: {
              'Capacity': '4.5 cubic feet',
              'Load Type': 'Front-loading',
              'Wash Cycles': '12 preset cycles',
              'Energy Rating': 'Energy Star Certified',
              'Smart Features': 'Wi-Fi connectivity, App control',
              'Warranty': '2 years parts and labor'
            },
            inStock: true
          }
        }
        
        const foundItem = mockItems[params.id]
        if (foundItem) {
          setItem(foundItem)
        }
      } catch (error) {
        console.error('Error fetching item:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchItem()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#001d3d] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/items" className="text-blue-600 hover:text-blue-800">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/items" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square">
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-sm bg-[#001d3d] bg-opacity-10 text-[#001d3d] px-3 py-1 rounded-full">
              {item.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-4">{item.name}</h1>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">{item.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-[#001d3d]">${item.price}</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                item.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <button 
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                item.inStock
                  ? 'bg-[#001d3d] text-white hover:bg-[#002a5c]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!item.inStock}
            >
              {item.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Specifications */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
            <div className="space-y-3">
              {Object.entries(item.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}