/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { gsap } from "gsap";
import Atlas from "../images/404-parallax/atlas-2x.png";
import Bubbles1 from "../images/404-parallax/bubbles-1-2x.png";
import Bubbles2 from "../images/404-parallax/bubbles-2-2x.png";
import Bubbles3 from "../images/404-parallax/bubbles-3-2x.png";
import Soap from "../images/404-parallax/soap-2x.png";
import Bg from "../images/404-parallax/bg-2x.png";
import HeadTag from "../components/head";

const NotFoundPage = () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".not-found-image-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    tl.to(layer, { y: movement, ease: "none" }, 0);
  });

  return (
    <div
      className="not-found-wrapper"
      style={{
        backgroundImage: `url(${Bg})`
      }}
    >
      <HeadTag title="Not Found" />
      <h1
        className="not-found-text heading"
      >
        OOPS!
      </h1>
      <h3
        className="not-found-text blurb"
      >
        Something Went <strong>Wrong</strong>
      </h3>
      <div
        className="not-found-image-wrapper"
      >
        <img
          className="atlas layer parallax"
          src={Atlas}
          alt="Atlas"
          data-depth='1.00'
        />
        <img
          className="soap layer parallax"
          src={Soap}
          alt="Soap"
          data-depth='0.85'
        />
        <img
          className="bubbles1 layer parallax"
          src={Bubbles1}
          alt="Bubbles"
          data-depth='0.80'
        />
        <img
          className="bubbles2 layer parallax"
          src={Bubbles2}
          alt="Bubbles"
          data-depth='0.50'
        />
        <img
          className="bubbles3 layer parallax"
          src={Bubbles3}
          alt="Bubbles"
          data-depth='0.20'
        />
      </div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          zIndex: '50',
        }}
      >
        <Link
          to="/"
          className="not-found-text button"
        >
          <h3>
            Back To Home
          </h3>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;
