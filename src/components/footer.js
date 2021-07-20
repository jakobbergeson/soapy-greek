import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Social from "./social"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
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
                  <Link to="/about">Projects</Link>
                </h5>
              </li>
              <li>
                <h5>
                  <Link to="/about">Store</Link>
                </h5>
              </li>
              <li>
                <h5>
                  <Link to="/about">About Me</Link>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-notes">
        <div className="footer-notes-template">
          <div className="copyright-text">
            © 2021 Soapy Greek. All rights reserved.
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
