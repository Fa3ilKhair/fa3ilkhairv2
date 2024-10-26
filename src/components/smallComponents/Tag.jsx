import { Link } from "react-router-dom";

export default function Tag({ content, route, color, onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link className={`${color} font-semibold hover:underline underline-offset-3 text-[1.1rem]`} to={route} onClick={handleClick}>
      {content}
    </Link>
  );
}
