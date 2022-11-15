import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.css"
// import img1 from "../../images/LOGO.png"


export default function NavBar() {
    const [HamShow, setHamShow] = useState(false);
  return (
    <div>


<section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {/* <a className="navbar-brand"><img src={img1} alt="logo" /></a> */}
            <button
              className="navbar-toggler bg-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setHamShow(!HamShow);
              }}
            >
              <span className="navbar-toggler-icon  "></span>
            </button>
            <div
              className={`collapse navbar-collapse ${HamShow ? "show" : ""}   `}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact="true"
                    className="nav-link pe-4"
                    aria-current="page"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link pe-4 "
                    aria-current="page"
                    activeclassname="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/skills"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeclassname="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Skills
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    to="/achivements"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeclassname="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Achivements
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    className="nav-link pe-4 "
                    aria-current="page"
                    activeclassname="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeclassname="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}
