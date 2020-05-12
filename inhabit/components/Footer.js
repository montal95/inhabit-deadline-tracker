import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <p>site design &copy;2020 Sam Montalvo Jr</p>
        <div className="footerLinks">
          <Link href="https://github.com/montal95/inhabit-deadline-tracker">
            <a target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} size="1x" color="white" />
              Github
            </a>
          </Link>
          <Link href="http://www.sammontalvojr.com/">
            <a target="_blank">Portfolio</a>
          </Link>
        </div>
      </footer>
      <style jsx>{`
        .footerContainer {
          width: 100%;
          position: fixed;
          bottom: 0;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          background: black;
        }
        footer {
          grid-column: 2;
          padding: 15px 15px 20px 15px;
        }
        footer p,
        a {
          font-size: 13px;
          color: white;
          text-transform: uppercase;
        }
        .footerLinks {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .footerLinks a:first-child {
          border-right: 2px solid white;
          margin-right: 5px;
          padding-right: 5px;
          text-align: end;
        }
        .footerLinks a {
          text-decoration: none;
          transition: 0.3s all ease-in-out;
        }
        .footerLinks a:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

export default Footer;
