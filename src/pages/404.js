/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Icon from '../images/Favicon_SOAP_w_bubbles-01.png';
import NotFound from "../icons/not-found";
import HeadTag from "../components/head";

const NotFoundPage = () => {

  const [homeHover, sethomeHover] = React.useState(false);

  return (
    <div
      className="not-found-wrapper"
    >
      <HeadTag title="Not Found" />
      <div
        className="not-found-container"
      >
        <div
          className="not-found-text four-oh-four"
        >
          <h1
            className=" heading"
          >
            OOPS!
          </h1>
          <p
            className="blurb"
          >
            It looks like we don't have that page in our system
          </p>

        </div>
        <div
          className={homeHover ? "not-found-overlay overlay-active" : "not-found-overlay"}
        />
        <img
          className={homeHover ? "not-found-icon og-position" : "not-found-icon translate-roll"}
          src={Icon}
        />
        <NotFound />
      </div>
      <Link
        to="/"
        className="not-found-text button"
        onMouseOver={() => { sethomeHover(true); }}
        onMouseOut={() => { sethomeHover(false); }}
      >
        <h3>
          Back To Home
        </h3>
      </Link>
    </div>
  );
};

export default NotFoundPage;
