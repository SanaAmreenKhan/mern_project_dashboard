import React, { useState } from "react";

const Login = () => {
    const [userData, setUserData] = useState({
      email: "",
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
    
    
    const handleSubmitData=(e)=>{
  e.preventDefault()
  alert(userData)
    }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="containers grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="Login image"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">login form</h1>
                <br />
                <form onSubmit={handleSubmitData}>
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
                    Login Now
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

export default Login;
