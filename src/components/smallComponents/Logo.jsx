import { Link } from "react-router-dom";

export default function Logo({ taille }) {
  return (
    <>
      <Link to={"/"}>
        <img className={`${taille}`} src="/fa3ilkhairv2/assets/logos/logoGreenNoBg.png" alt="Logo.png" />
      </Link>
    </>
  );
}
