import { Link } from "react-router-dom";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full h-full">
      <h1 className="text-6xl font-bold text-gray-800">Maintenance</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">Nous travaillons actuellement sur des améliorations. Veuillez revenir plus tard.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white shadow hover:bg-blue-600 transition duration-200">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
