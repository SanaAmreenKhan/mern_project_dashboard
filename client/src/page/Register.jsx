import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
      if (response.ok) {
        setUserData({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="containers grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="../../public/images/register.png"
                  alt="Register image"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmitData}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      onChange={handleInput}
                      required
                      value={userData.username}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      value={userData.email}
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="enter your phone"
                      id="phone"
                      required
                      value={userData.phone}
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="text"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      required
                      value={userData.password}
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
