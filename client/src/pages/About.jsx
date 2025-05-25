import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Welcome{user ? `, ${user.username}` : ""} to our platform!
              </p>
              <h1>Why Choose Codify?</h1>
              <p>
                <strong>Expertise:</strong> Our experienced IT professionals stay ahead of the curve with the latest industry innovations.
              </p>
              <p>
                <strong>Customization:</strong> We understand that every business is unique. That’s why we deliver tailored solutions aligned with your specific goals.
              </p>
              <p>
                <strong>Client-First Approach:</strong> Your satisfaction is our priority. We offer responsive support and reliable service.
              </p>
              <p>
                <strong>Affordability:</strong> Get premium IT services at competitive prices—without compromising on quality.
              </p>
              <p>
                <strong>Reliability:</strong> We're available 24/7 to ensure your IT environment is secure, stable, and always up and running.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Connect Now</button>
                </NavLink>
                <NavLink to="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </NavLink>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="team collaboration"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
