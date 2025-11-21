import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Load products from localStorage
  useEffect(() => {
    const loadProducts = () => {
      try {
        const savedProducts = localStorage.getItem('shineJewelProducts')
        if (savedProducts) {
          const parsedProducts = JSON.parse(savedProducts)
          setProducts(parsedProducts)
        } else {
          // Default products if none in localStorage
          const defaultProducts = [
            {
              id: '1',
              name: "Precision CNC Machine",
              description: "High-precision CNC machine for detailed manufacturing processes with advanced control systems. Perfect for complex manufacturing requirements.",
              price: "$24,500",
              image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
              id: '2',
              name: "Industrial Laser Cutter",
              description: "Powerful laser cutting system for metals and composites with automated material handling. High-speed precision cutting.",
              price: "$38,750",
              image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
              id: '3',
              name: "3D Printing System",
              description: "Advanced additive manufacturing system for rapid prototyping and production. Multi-material capability.",
              price: "$15,200",
              image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
              id: '4',
              name: "Automated Assembly Line",
              description: "Complete automated assembly solution with robotic arms and conveyor systems. Increase production efficiency by 300%.",
              price: "$125,000",
              image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
              id: '5',
              name: "Industrial Grinding Machine",
              description: "High-performance grinding machine for precision surface finishing and material removal. Built for heavy-duty operations.",
              price: "$18,900",
              image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
              id: '6',
              name: "Hydraulic Press Machine",
              description: "Heavy-duty hydraulic press for forming, molding, and stamping applications. 100-ton capacity with safety features.",
              price: "$32,500",
              image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          ]
          setProducts(defaultProducts)
          localStorage.setItem('shineJewelProducts', JSON.stringify(defaultProducts))
        }
      } catch (error) {
        console.error('Error loading products:', error)
        // Fallback to default products
        const fallbackProducts = [
          {
            id: '1',
            name: "Precision CNC Machine",
            description: "High-precision CNC machine for detailed manufacturing.",
            price: "$24,500",
            image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        ]
        setProducts(fallbackProducts)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()

    // Listen for storage changes (when admin updates products)
    const handleStorageChange = (e) => {
      if (e.key === 'shineJewelProducts') {
        loadProducts()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Poll for changes (for same-tab updates)
    const interval = setInterval(loadProducts, 2000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (loading) {
    return (
      <section className="products" id="products">
        <div className="container">
          <div className="section-title">
            <h2>Our Products</h2>
            <p>Loading our premium industrial machines...</p>
          </div>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Premium Products</h2>
          <p>Discover our range of high-performance industrial machines designed for excellence</p>
          <div className="products-count">
            Showing {products.length} {products.length === 1 ? 'product' : 'products'}
          </div>
        </div>
        
        {products.length === 0 ? (
          <div className="empty-products">
            <div className="empty-icon">📦</div>
            <h3>No Products Available</h3>
            <p>Products will appear here once added through the admin panel.</p>
            <a href="/admin" className="cta-button">Go to Admin Panel</a>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="products-cta">
              <h3>Can't find what you're looking for?</h3>
              <p>We specialize in custom solutions. Contact us for tailored machinery.</p>
              <a className="cta-button" onClick={() => scrollToSection('contact')}>
                Request Custom Solution
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Products
