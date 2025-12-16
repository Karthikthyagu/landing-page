import '../styles/navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LEFT */}
        <div className="navbar-left">
          <div className="logo-icon">T</div>
          <span className="nav-logo-text">TechFlow</span>
        </div>

        {/* CENTER */}
        <nav className="navbar-center">
          <a href="#features">Features</a>
          <a href="#why">Why Us</a>
          <a href="#testimonials">Testimonials</a>
        </nav>

        {/* RIGHT */}
        <div className="navbar-right">
          <button className="btn-signin">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>

      </div>
    </header>
  )
}

export default Navbar
