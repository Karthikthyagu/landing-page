import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">T</span>
            <span className="logo-text">TechFlow</span>
          </div>
          <p>
            Building the future of developer tools, <br />
            one feature at a time.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
            <a href="#">Changelog</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">Help Center</a>
            <a href="#">Community</a>
            <a href="#">Status</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 TechFlow. All rights reserved.</p>
        <div className="footer-socials">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
