import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <h2>Precision Engineering, Unmatched Performance</h2>
        <p>Discover our high-quality machinery designed to boost productivity and efficiency in your operations. Your trusted partner in industrial automation.</p>
        <a className="cta-button" onClick={() => scrollToSection('products')}>View Products</a>
      </div>
    </section>
  )
}

export default Hero
