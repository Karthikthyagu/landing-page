import '../styles/whychoose.css'
import bluetick from "../assets/check_811868.png"

const WhyChoose = () => {
  return (
    <section className="why-choose" id="why">
      <div className="why-container">
        <div className="why-left">
          <h2>Why teams choose TechFlow</h2>
          <p className="why-desc">
            We're not just another platform. We're your partner in building
            exceptional products that users love.
          </p>

          <ul className="why-list">
            <li>
              <img src={bluetick} alt="tick" height={20} width={20} />
              <div>
                <h3>Trusted by industry leaders worldwide</h3>
                <p>Join thousands of companies who trust us with their most critical workflows.</p>
              </div>
            </li>

            <li>
              <img src={bluetick} alt="tick" height={20} width={20} />
              <div>
                <h3> 99.9% uptime guarantee</h3>
                <p>We ensure your services are always available when you need them most.</p>
              </div>
            </li>

            <li>
              <img src={bluetick} alt="tick" height={20} width={20} />
              <div>
                <h3>Built with modern technology</h3>
                <p>Leveraging the latest tech stack to deliver superior performance and reliability.</p>
              </div>
            </li>
            
            <li>
              <img src={bluetick} alt="tick" height={20} width={20} />
              <div>
                <h3>24/7 expert support</h3>
                <p>Our dedicated team is always ready to help you succeed around the clock.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="why-right">
          <div className="stat-card">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div className="stat-card">
            <h3>50M+</h3>
            <p>API Requests / Day</p>
          </div>
          <div className="stat-card">
            <h3>150+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-card">
            <h3>&lt;50ms</h3>
            <p>Response Time</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
