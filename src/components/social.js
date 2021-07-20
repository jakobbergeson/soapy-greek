import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faTwitch,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

const Social = () => {
  return (
    <div className="social-block">
      <Link to="https://www.twitch.tv/soapygreek">
        <FontAwesomeIcon icon={faTwitch} className="social-icon" />
      </Link>
      <Link to="https://twitter.com/?lang=en">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </Link>
      <Link to="https://www.instagram.com/timodowning/">
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </Link>
    </div>
  )
}
export default Social
