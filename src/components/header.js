import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      justifyContent: `space-between`,
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <ul
      style={{
        display: `flex`,
        flexDirection: `row`,
        listStyleType: `none`,
      }}
    >
      <li>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </li>
      <li style={{ marginTop: `1rem` }}>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
      </li>
      <li style={{ marginTop: `1rem` }}>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Store
        </Link>
      </li>
      <li style={{ marginTop: `1rem` }}>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About Me
        </Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Soapy Greek`,
}

export default Header
