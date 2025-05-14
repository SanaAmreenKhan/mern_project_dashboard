import { useAuth } from "../store/auth";

const Service = () => {
  const { menu } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid-four-cols">
        {menu?.map((men) => (
          <div className="card" key={men._id}>
            <div className="card-img">
              <img src={men.image ?? "/images/Bakery.png"} alt="Bakery" />
            </div>
            <div className="card-details">
              <div className="grid">
                <p>
                  <strong>{men.name}</strong>
                </p>
                <p>Price: ₹{men.price}</p>
                <p>Category: {men.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
