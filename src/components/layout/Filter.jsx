export default function Filter() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Filtrer</h2>
            <div className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700">Projet</label>
                    <select id="project" name="project" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="">Sélectionner un projet</option>
                        <option value="project1">Projet 1</option>
                        <option value="project2">Projet 2</option>
                        <option value="project3">Projet 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Année</label>
                    <select id="year" name="year" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="">Sélectionner une année</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ville</label>
                    <select id="city" name="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="">Sélectionner une ville</option>
                        <option value="city1">Ville 1</option>
                        <option value="city2">Ville 2</option>
                        <option value="city3">Ville 3</option>
                    </select>
                </div>
            </div>
            <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700">
                Appliquer le filtre
            </button>
        </div>
    );
}
