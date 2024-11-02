export default function ProjectsPage() {
  return (
    <div className="p-6 bg-white">
      {/* Overall Page Title */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-green-800">Gestion des Projets</h1>
        <p className="text-gray-600">Découvrez et filtrez les projets selon vos préférences.</p>
      </div>

      {/* Filter Section */}
      <div className="p-4 bg-gray-100 shadow-md">
        {/* Filter Title */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-green-800">Filtrer les Projets</h2>
          <p className="text-gray-600">Utilisez les options ci-dessous pour affiner votre recherche de projets selon des critères spécifiques.</p>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          {/* Project Dropdown */}
          <div className="w-full sm:w-1/3 md:w-1/4">
            <label htmlFor="project" className="block px-2 text-lg font-bold text-gray-700 mb-1">
              Projet
            </label>
            <select
              id="project"
              name="project"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 py-3 px-2 outline-none transition duration-300 hover:border-green-400"
            >
              <option value="">Sélectionner un projet</option>
              <option value="project1">Projet 1</option>
              <option value="project2">Projet 2</option>
              <option value="project3">Projet 3</option>
            </select>
          </div>

          {/* Year Dropdown */}
          <div className="w-full sm:w-1/3 md:w-1/4">
            <label htmlFor="year" className="block px-2 text-lg font-bold text-gray-700 mb-1">
              Année
            </label>
            <select
              id="year"
              name="year"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 py-3 px-2 outline-none transition duration-300 hover:border-green-400"
            >
              <option value="">Sélectionner une année</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          {/* City Dropdown */}
          <div className="w-full sm:w-1/3 md:w-1/4">
            <label htmlFor="city" className="block px-2 text-lg font-bold text-gray-700 mb-1">
              Ville
            </label>
            <select
              id="city"
              name="city"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 py-3 px-2 outline-none transition duration-300 hover:border-green-400"
            >
              <option value="">Sélectionner une ville</option>
              <option value="city1">Ville 1</option>
              <option value="city2">Ville 2</option>
              <option value="city3">Ville 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
