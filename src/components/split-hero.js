/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
  

const SplitHero = ({title, link, image}) => (
    <div className="split-hero-box" >
        <div className="split-child" 
        style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPositionX: "50%",
        backgroundPositionY: "50%",
        backgroundRepeat: "noRepeat"
        }}>
        <div className="img-overlay">
        <div className="split-child-content">
        <h2>{title}</h2>
        <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faPlayCircle} className="split-child-icon"/>
      </a>
        </div>
        </div>
        </div>
    </div>
)

export default SplitHero
