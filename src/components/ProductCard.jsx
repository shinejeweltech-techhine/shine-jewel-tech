import React from 'react'

const ProductCard = ({ product }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="product-card">
      <div className="product-img" style={{backgroundImage: `url(${product.image})`}}>
        {/* Image will be set via backgroundImage */}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">{product.price}</div>
        <a className="cta-button" onClick={() => scrollToSection('contact')}>Inquire Now</a>
      </div>
    </div>
  )
}

export default ProductCard
