/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import About from "./about"

const Header = ({ siteTitle }) => (
  <div
    className = "header-wrapper">
      <h1 className="icon">
        <Link to="/">{siteTitle}</Link>
      </h1>
        <ul className="header-list">
          <li>
            <Link to="/about">Projects</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <About/>
          </li>
        </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Soapy Greek`,
}

export default Header
