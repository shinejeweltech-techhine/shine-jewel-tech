import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <h1>Shine <span>Jewel Tech</span></h1>
        </div>
        <nav>
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('products')}>Products</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
        <a className="cta-button" onClick={() => scrollToSection('contact')}>Get Quote</a>
      </div>
    </header>
  )
}

export default Header
