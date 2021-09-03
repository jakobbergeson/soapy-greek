/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import { CartButton } from "./cart.button"
import { Toast } from "./toast"
import About from "./about"

const Header = ({ siteTitle }) => {
 
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return(
    <>
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
            <Link to="/products/">Store</Link>
          </li>
          <li>
            <About/>
          </li>
        </ul>
          <CartButton quantity={quantity} />
          <Toast show={loading || didJustAddToCart}>
          {!didJustAddToCart ? (
            "Updating…"
          ) : (
            <>
              Added to cart{" "}
              <svg
                width="14"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                  fill="#fff"
                />
                <path
                  d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                  fill="#fff"
                />
                <path
                  d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                  fill="#fff"
                />
              </svg>
            </>
          )}
        </Toast>
  </div>
        </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Soapy Greek`,
}

export default Header
