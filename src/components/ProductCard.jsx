import React from 'react'

const ProductCard = ({ product }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleImageError = (e) => {
    e.target.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-mKVPip0R8h8uf0dCsmd3cIUD_dJzvLxFBXT80fHWhD5PAAcW0zYCPMaVkO-xWDTZsEP2p_8OuP0_OHmyphRbmGb5l_zYa8Vz3w7nYZtWwoGbDxCqwvFJ6Fxss0hG_cSvYGgBAVFSo0FYZSk06FnIpQxnOsLwIkNXXgAE9UPrwtR6J2431-ubBiX3Rsg/s1024/Gemini_Generated_Image_3kfjiu3kfjiu3kfj.png'
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
