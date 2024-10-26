import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full h-full">
      <h1 className="text-6xl font-bold text-gray-800">404 | Non trouvé</h1>
      <p className="mt-4 text-lg text-gray-600">Hé, on dirait que vous vous êtes perdu !</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white shadow hover:bg-blue-600 transition duration-200">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
