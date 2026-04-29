import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const backendURL = 'https://productjs-server-production-6f0b.up.railway.app/products';

    fetch(backendURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response sahi nahi tha');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data mil gaya:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Backend se data nahi mil raha. Check karein ke server on hai.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-bold">Data load ho raha hai...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <h2 className="text-xl">{error}</h2>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Welcome to Our Shop
      </h1>
      
      {/* Products Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-80 transform transition hover:scale-105">
              {/* Image Section */}
              <img 
                src={p.imageURL} 
                alt={p.title} 
                className="w-full h-48 object-cover rounded-xl mb-4" 
              />
              
              {/* Content Section */}
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{p.title}</h2>
              <p className="text-gray-500 text-sm mb-4 h-12 overflow-hidden">
                {p.description}
              </p>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-blue-600">${p.price}</span>
                <Link 
                  to={`/product/${p.id}`} 
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  View details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-600">Koi products nahi mile.</p>
        )}
      </div>
    </div>
  );
}

export default App;