import { Link } from "react-router";

type Props = {
  title: string;
  link: string;
  image: string;
  description?: string;
};

export default function DisplayCard({ title, link, image, description }: Props) {
  return (
    <div>
      <img src={image} alt={title}/>
      <div>
        <h2>{title}</h2>
        {description && (<p>{description}</p>)}
        <Link to={link}> Open</Link>
      </div>
    </div>
  );
}
