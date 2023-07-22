import { ReactElement } from 'react';

interface CardInfoProps {
  title: string;
  description: string;
  image: string;
  isMobile: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  isMobile,
}: CardInfoProps): ReactElement {
  if (isMobile === false) {
    return (
      <div className="projectcard">
        <img src={image} alt="testgif" className="projectcard__image" />
        <div className="projectcard__info">
          <h3 className="projectcard__title">{title}</h3>
          <p className="projectcard__description">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="projectcard">
      <img src={image} alt="testgif" className="projectcard__image" />
      <div className="projectcard__info">
        <h3 className="projectcard__title">{title}</h3>
      </div>
    </div>
  );
}
