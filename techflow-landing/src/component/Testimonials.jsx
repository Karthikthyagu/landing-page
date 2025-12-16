import '../styles/testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        
        <h2>Loved by developers worldwide</h2>
        <p className="testimonials-subtitle">
          Don't just take our word for it. Here's what our customers have to say.
        </p>

        <div className="testimonials-grid">

          {/* CARD 1 */}
          <div className="testimonial-card">
            <div className="stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "TechFlow has transformed how our team collaborates. We've cut our
              development time in half and the results speak for themselves."
            </p>

            <div className="testimonial-user">
              <div className="avatar">SC</div>
              <div>
                <h4>Sarah Chen</h4>
                <span>CTO at StartupX</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="testimonial-card active">
            <div className="stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "The integration capabilities are unmatched. We connected all our
              tools in days, not months. Absolutely game-changing for our
              workflow."
            </p>

            <div className="testimonial-user">
              <div className="avatar">MJ</div>
              <div>
                <h4>Marcus Johnson</h4>
                <span>Product Lead at ScaleUp</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="testimonial-card">
            <div className="stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "Finally, a platform that just works. The performance is incredible
              and the support team is always there when we need them."
            </p>

            <div className="testimonial-user">
              <div className="avatar">ER</div>
              <div>
                <h4>Emily Rodriguez</h4>
                <span>Engineering Manager at CloudTech</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
