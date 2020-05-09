import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <p>site design &copy;2020 Sam Montalvo Jr</p>
        <div className="footerLinks">
          <Link href="">
            <a>
              <FontAwesomeIcon icon={faGithubSquare} size="1x" color="white" />
              Github
            </a>
          </Link>
          <Link href="">
            <a>Portfolio</a>
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
        footer p {
          color: white;
        }
        .footerLinks {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .footerLinks a:first-child {
          border-right: 2px solid white;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default Footer;
