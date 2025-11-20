import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Precision CNC Machine",
      description: "High-precision CNC machine for detailed manufacturing processes with advanced control systems.",
      price: "$24,500",
      image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Industrial Laser Cutter",
      description: "Powerful laser cutting system for metals and composites with automated material handling.",
      price: "$38,750",
      image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      name: "3D Printing System",
      description: "Advanced additive manufacturing system for rapid prototyping and production.",
      price: "$15,200",
      image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      name: "Automated Assembly Line",
      description: "Complete automated assembly solution with robotic arms and conveyor systems.",
      price: "$125,000",
      image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      name: "Industrial Grinding Machine",
      description: "High-performance grinding machine for precision surface finishing and material removal.",
      price: "$18,900",
      image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      name: "Hydraulic Press Machine",
      description: "Heavy-duty hydraulic press for forming, molding, and stamping applications.",
      price: "$32,500",
      image: "https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ]

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>Explore our range of high-performance industrial machines</p>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
