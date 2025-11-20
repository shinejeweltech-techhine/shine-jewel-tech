import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Shine Jewel Tech</h2>
            <p>With over 15 years of experience in the industrial machinery sector, Shine Jewel Tech has established itself as a trusted provider of high-quality manufacturing equipment.</p>
            <p>Our mission is to empower businesses with cutting-edge technology that enhances productivity, reduces operational costs, and drives growth.</p>
            <p>We partner with leading manufacturers to bring you the most reliable and efficient machinery available in the market.</p>
            <p><strong>Why Choose Us?</strong></p>
            <ul>
              <li>✓ Premium quality machines</li>
              <li>✓ Expert technical support</li>
              <li>✓ Competitive pricing</li>
              <li>✓ After-sales service</li>
              <li>✓ Custom solutions</li>
            </ul>
          </div>
          <div className="about-image">
            {/* Background image set via CSS */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
