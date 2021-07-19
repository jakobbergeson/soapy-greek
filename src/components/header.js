import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 className="icon">
      <Link to="/" className="header-link">
        {siteTitle}
      </Link>
    </h1>
    <ul>
      <li style={{ marginTop: `1rem` }}>
        <Link to="/about" className="header-link">
          Projects
        </Link>
      </li>
      <li style={{ marginTop: `1rem` }}>
        <Link to="/about" className="header-link">
          Store
        </Link>
      </li>
      <li style={{ marginTop: `1rem` }}>
        <Link to="/about" className="header-link">
          About Me
        </Link>
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
