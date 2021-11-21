import { Nav } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="page-header section-dark">
        <div className="filter"></div>
        <div className="content-center">
          <div className="container">
            <h1 className="presentation-title animate__animated animate__bounceInUp">Travelly</h1>
            <Nav.Link
              className="text-white text-center vacations cursor animate__animated animate__bounceInDown"
              href="/login"
            >
              See all vacations click here.
            </Nav.Link>
            <div className="title-brand">
              <div className="fog-low">
                <img
                  src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
                  alt=""
                />
              </div>
              <div className="fog-low right">
                <img
                  src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="moving-clouds"></div>
      </div>
    </div>
  );
}

export default Home;
