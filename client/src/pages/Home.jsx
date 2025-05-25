import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Leading the Way in Innovative IT Solutions</p>
              <h1>Welcome to Codify</h1>
              <p>
                Ready to elevate your business with next-generation IT solutions? At Codify, we specialize in delivering tailored, innovative services that empower your growth and success.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="design and development"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We're Here to Support You</p>
            <h1>Start Your Digital Transformation</h1>
            <p>
              Take the first step toward a smarter, more secure IT infrastructure. Contact Codify today for a free consultation and discover how we can help your business thrive in the digital world.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
