import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Yahan apna sahi Railway URL dalein aur aakhir mein /products lazmi lagayein
    fetch('https://productjs-server-production-6f0b.up.railway.app/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Data mangwane mein galti hui:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Data load ho raha hai...</div>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Shop</h1>
      
      <div className="flex flex-wrap gap-6 justify-center">
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p.id} className="bg-white p-5 rounded-lg shadow-lg border w-72">
              {/* Image dikhane ke liye */}
              <img 
                src={p.imageURL} 
                alt={p.title} 
                className="w-full h-40 object-cover rounded-md mb-4" 
              />
              
              {/* Backend mein 'title' hai */}
              <h2 className="text-xl font-bold mb-2">{p.title}</h2>
              
              {/* Backend mein 'description' hai */}
              <p className="text-gray-600 text-sm mb-4">{p.description}</p>
              
              <Link 
                to={`/product/${p.id}`} 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>Koi products nahi mile.</p>
        )}
      </div>
    </div>
  );
}

export default App;