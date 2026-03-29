import { Link } from "react-router";

type Props = {
  title: string;
  link: string;
  image: string;
  description?: string;
};

export default function DisplayCard({ title, link, image, description }: Props) {
  return (
    <div className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg hover:bg-gray-600 transition duration-300 w-72">
      <img src={image} alt={title} className="w-full h-auto object-cover"/>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">{title}</h2>
        {description && (<p className="text-sm text-gray-400">{description}</p>)}
        <Link to={link} className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition"> Open</Link>
      </div>
    </div>
  );
}
