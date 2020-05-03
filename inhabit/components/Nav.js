import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClock } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menu, changeMenu] = useState(true);

  return (
    <div className="nav-container">
      <nav>
        <div className="burger-menu" onClick={() => changeMenu(!menu)}>
          <FontAwesomeIcon icon={faBars} size="2x" color="white" />
        </div>
        <div className="logo">
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faClock} size="1x" color="white" />
              Inhabit
            </a>
          </Link>
        </div>

        <div className="right-menu">
          <Link href="/profile">
            <a>Profile</a>
          </Link>

          <Link href="/planner">
            <a>Planner</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .nav-container {
          width: 100%;
          background: linear-gradient(to right, green, cyan);
          padding-bottom: 0.5em;
        }
        nav {
          background: black;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
        }
        .logo {
          grid-column: 2;
          margin: auto;
        }
        .burger-menu {
          display: none;
          grid-column: 1;
          align-self: center;
          margin-left: 20px;
        }
        nav a {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          transition: 0.3s all ease-in-out;
        }
        .right-menu a {
          padding: 15px auto;
          margin: 0 auto;
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.5px;
        }
        .logo {
          font-size: 40px;
          padding: 1rem;
        }
        .right-menu {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          height: 40px;
          grid-column: 2;
          align-self: center;
        }
        nav a:hover {
          opacity: 0.7;
        }
        @media only screen and (max-width: 1025px) {
          .burger-menu {
            display: inline-block;
            width: 40px;
          }
          .right-menu {
            ${menu ? "display: none;" : ""}
            grid-column: 1 / span 3;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
