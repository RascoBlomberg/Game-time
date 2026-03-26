import { Link } from "react-router";

type Props = {
    title: string;
    link: string;
}

export default function DisplayCard({ title, link }: Props){
    return (
        <div>
            <h2>{title}</h2>
            <Link to={link}> Open</Link>
        </div>
    )
}