import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 className="icon">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <ul>
      <li>
        <Link to="/about">Projects</Link>
      </li>
      <li>
        <Link to="/about">Store</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
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
