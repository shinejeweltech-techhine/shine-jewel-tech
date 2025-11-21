import React from 'react'

const ProductCard = ({ product }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1581094794329-cd6d1d3d7ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          onError={handleImageError}
        />
        <div className="product-overlay">
          <button 
            className="quick-view-btn"
            onClick={() => scrollToSection('contact')}
          >
            Quick Inquiry
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">{product.price}</div>
        <div className="product-features">
          <span className="feature-tag">In Stock</span>
          <span className="feature-tag">Free Support</span>
        </div>
        <a className="cta-button" onClick={() => scrollToSection('contact')}>
          Get Quote
        </a>
      </div>
    </div>
  )
}

export default ProductCard
