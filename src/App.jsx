import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productjs-server-production-6f0b.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Our Shop
      </h1>

      <div className="flex gap-6 justify-center flex-wrap">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-5 rounded-lg shadow-lg border w-64"
          >
            <h2 className="text-xl font-bold">{p.title}</h2>

            <p className="text-blue-600 font-semibold">
              ${p.price}
            </p>

            <Link
              to={`/product/${p.id}`}
              className="mt-4 block text-center bg-black text-white py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;