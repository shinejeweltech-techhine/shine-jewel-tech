import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Shine Jewel Tech</h3>
            <p>Providing premium industrial machinery solutions since 2008. Your trusted partner in industrial automation.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('products')}>Products</a></li>
              <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul>
              <li>Email: info@shinejeweltech.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Industrial Ave, Tech City</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Shine Jewel Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
