import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faTwitch,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Social = () => {
  return (
    <div className="social-block">
      <a href="https://www.twitch.tv/soapygreek" target="_blank">
        <FontAwesomeIcon icon={faTwitch} className="social-icon" />
      </a>
      <a href="https://twitter.com/?lang=en" target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </a>
      <a href="https://www.instagram.com/timodowning/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </a>
    </div>
  )
}
export default Social
