import React from "react";
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        {/* Intro Section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Welcome{" "}
                {user.username
                  ? `${user.username} to our website`
                  : `to our website`}{" "}
                ,
              </p>
              <p>About Sana's Bakery</p>
              <h1>Freshly Baked with Love</h1>
              <p>
                Sana’s Bakery started with a simple passion for baking and a
                mission to bring smiles with every bite. What began in a cozy
                kitchen has grown into a beloved neighborhood bakery known for
                its artisanal cakes, pastries, cookies, and more — made fresh
                every single day.
              </p>
            </div>

            <div className="hero-image">
              <img
                src="/images/Bakery.png"
                alt="about bakery"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-hero reverse-section">
          <div className="container grid grid-two-cols">
            <div className="hero-image">
              <img
                src="/images/cupcake.jpg"
                alt="baking values"
                width="400"
                height="500"
              />
            </div>

            <div className="hero-content">
              <p>What Makes Us Special</p>
              <h1>Quality, Creativity & Community</h1>
              <p>
                We bake everything using high-quality ingredients, no shortcuts.
                Our team constantly experiments with new flavors and designs to
                make your celebrations unforgettable. Most importantly, we
                cherish being a part of your happiest moments.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Meet Our Team</p>
              <h1>The Heart Behind the Oven</h1>
              <p>
                From skilled pastry chefs to friendly customer service staff,
                our team works together like a well-blended batter. Each member
                brings their unique flair, making your experience with us extra
                special.
              </p>
            </div>

            <div className="hero-image">
              <img
                src="/images/sweet.jpeg"
                alt="our bakery team"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
