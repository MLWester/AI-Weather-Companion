import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">WeatherCompanion</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Forecast</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">History</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Favorites</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Ask AI</a>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Forecast</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">History</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Favorites</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Ask AI</a>
        </div>
      )}
    </nav>
  );
}
