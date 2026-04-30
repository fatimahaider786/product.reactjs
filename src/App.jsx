import React from "react";
import { Link } from "react-router"; 

function App() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Shop</h1>

      <div className="flex gap-6 justify-center flex-wrap">
        {/* Card 1: RTX 5070 */}
        <div className="bg-white p-5 rounded-lg shadow-lg border w-64">
          <h2 className="text-xl font-bold">RTX 5070</h2>
          <p className="text-blue-600 font-semibold">$100</p>
          <Link to="/product/1" className="mt-4 block text-center bg-gray-700 text-white py-2 rounded">
            View Details
          </Link>
        </div>

        {/* Card 2: Cars */}
        <div className="bg-white p-5 rounded-lg shadow-lg border w-64">
          <h2 className="text-xl font-bold">Cars</h2>
          <p className="text-blue-600 font-semibold">$1000000</p>
          <Link to="/product/2" className="mt-4 block text-center bg-gray-700 text-white py-2 rounded">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;