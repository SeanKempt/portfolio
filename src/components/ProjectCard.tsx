import { ReactElement } from 'react';

interface CardInfoProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: CardInfoProps): ReactElement {
  return (
    <div className="projectcard">
      <h3 className="projectcard__title">{title}</h3>
      <img src={image} alt="testgif" className="projectcard__image" />
      <p className="projectcard__description">{description}</p>
    </div>
  );
}
