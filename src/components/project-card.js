import * as React from "react";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';
import {
  projectCardStyle,
  projectText,
  projectTitleStyle,
  projectDescriptionStyle,
  projectLink,
  postDate,
} from "./project-card.module.css";

const ProjectCard = ({
  key,
  title,
  description,
  link,
  date,
  bg
}) => {

  const bgImage = convertToBgImage(bg);

  return (
    <a
      key={key}
      href={link}
      className={projectLink}
    >
      <BackgroundImage
        className={projectCardStyle}
        {...bgImage}
        preserveStackingContext
        alt={title}
      >
        <div className={postDate}>
          <h4>{date}</h4>
        </div>
        <div
          className={projectText}
        >
          <h1
            className={projectTitleStyle}
          >
            {title}
          </h1>
          <p
            className={projectDescriptionStyle}
          >
            {description}
          </p>
        </div>
        <div
          className='overlayGradient'
        ></div>
      </BackgroundImage>
    </a>
  );
};

export default ProjectCard;