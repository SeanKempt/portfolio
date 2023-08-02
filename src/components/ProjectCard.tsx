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
      <div className="projectcard grid grid-cols-2 grid-rows-1 gap-2 py-3 items-center ">
        <img
          src={image}
          alt="testgif"
          className="projectcard__image rounded max-w-md row-start-1"
        />
        <div className="projectcard__info flex flex-col justify-center py-5 leading-7 px-5 col-span-5 row-start-1">
          <h3 className="projectcard__title text-xl">{title}</h3>
          <p className="projectcard__description text-base">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="projectcard">
      <img src={image} alt="testgif" className="projectcard__image rounded" />
      <div className="projectcard__info">
        <h3 className="projectcard__title">{title}</h3>
      </div>
    </div>
  );
}
