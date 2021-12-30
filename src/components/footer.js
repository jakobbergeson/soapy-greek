import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Social from "./social";
import About from "../components/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-box">
          <div className="footer-child">
            <h4>- About Soapy Greek -</h4>
            <p>
              San Diego based woodcrafter and gamer. Carving videos and DIY
              projects. Join the movement on social media.
            </p>
            <Social />
          </div>
          <div className="footer-child">
            <h4>- Categories -</h4>
            <ul>
              <li>
                <h5>
                  <Link to="/projects">Projects</Link>
                </h5>
              </li>
              <li>
                <h5>
                  <Link to="/products/">Store</Link>
                </h5>
              </li>
              <li>
                <h5>
                  <About />
                </h5>
              </li>
            </ul>
          </div>
          <div className="footer-child">
            <FontAwesomeIcon
              icon={faSoap}
              size="5x"
              spin
              style={{ color: "rgb(73, 4, 143)" }}
            />
          </div>
        </div>
        <div className="footer-notes">
          <div className="footer-notes-template">
            <div className="copyright-text">
              © 2021 <span>{data.site.siteMetadata.title}</span>. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
