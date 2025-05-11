import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome to Sana's Bakery</p>
              <h1>Delicious Moments, Baked Fresh</h1>
              <p>
                Craving something sweet and delightful? At Sana's Bakery, we
                craft mouthwatering cakes, pastries, cookies, and desserts that
                bring joy to every celebration. From classic flavors to custom
                creations, every treat is made with love and the finest
                ingredients.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Order Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">View Menu</button>
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img
                src="/images/sweets.avif"
                alt="freshly baked cakes"
                width="400px"
                height="500px"
              />
            </div>
          </div>
        </section>
      </main>

     {/* 2nd section - Bakery Highlights */}
<section className="section-analytics">
  <div className="container grid grid-four-cols">
    <div className="div1">
      <h2>1000+</h2>
      <p>Happy Customers</p>
    </div>
    <div className="div1">
      <h2>250+</h2>
      <p>Custom Cakes Delivered</p>
    </div>
    <div className="div1">
      <h2>150+</h2>
      <p>Fresh Recipes</p>
    </div>
    <div className="div1">
      <h2>7 Days</h2>
      <p>Open Every Day</p>
    </div>
  </div>
</section>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero image */}
          <div className="hero-image">
            <img
              src="/images/bakery-item.webp"
              alt="variety of bakery items"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>Made with Passion</p>
            <h1>Experience the Sweetness</h1>
            <p>
              Whether it’s a birthday, wedding, or a casual treat, we have the
              perfect baked goods for every occasion. Come explore our
              delightful range and experience the warmth of freshly baked
              happiness.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Contact Us</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Explore Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
