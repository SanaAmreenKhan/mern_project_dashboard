import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Oops! Page Not Found</h4>
          <p>
            The page you're looking for doesn't exist or may have been moved. If
            you think this is an error, please report it and we’ll take a look.
          </p>
          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report a Problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
