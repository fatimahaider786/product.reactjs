import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apka working Railway link
    fetch('https://productjs-server-production-6f0b.up.railway.app/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-20 font-sans">Loading...</div>;

  return (
    <div className="bg-white min-h-screen p-10 font-sans">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-10 text-left ml-4">Our Shop</h1>
      
      {/* Grid Layout - Jaisa aapne manga tha */}
      <div className="flex flex-wrap gap-8 justify-start ml-4">
        {products.map((p) => (
          <div key={p.id} className="w-72 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            
            {/* Image Box */}
            <div className="h-48 bg-gray-100">
              <img 
                src={p.imageURL} 
                alt={p.title} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
              />
            </div>
            
            {/* Text Content - Left Aligned */}
            <div className="p-5 text-left">
              <h2 className="text-xl font-bold text-gray-800">{p.title}</h2>
              <p className="text-blue-600 font-semibold text-lg mt-1">${p.price}</p>
              
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {p.description}
              </p>
              
              {/* Button - Black & Rounded */}
              <button className="mt-5 w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;