import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function Card() {
  const { id } = useParams();
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch("https://productjs-server-production-6f0b.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setBackendData(found);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      
      {/* Upper Section: Frontend Static Card (Jaisa aapki pic mein hai) */}
      <div className="max-w-md bg-white border rounded-lg shadow-md p-5 mb-10">
        <img 
          className="rounded-lg w-full h-60 object-cover" 
          src="https://tse3.mm.bing.net/th/id/OIP.3foQ1VwX7DFUG0bJWSVZYwHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="Product" 
        />
        <h2 className="text-2xl font-bold mt-4">RTX 5070</h2>
        <p className="text-gray-600">High performance graphic card for gaming.</p>
        <p className="text-3xl font-extrabold my-2">$100000</p>
        <Link to="/" className="text-blue-600">← Back to Shop</Link>
      </div>

      <hr className="w-full border-gray-300 my-5" />

      {/* Lower Section: Products from Backend */}
      <div className="text-center w-full">
        <h3 className="text-xl font-bold mb-4">Products from Backend</h3>
        
        {backendData ? (
          <div className="bg-white p-5 border rounded inline-block shadow-sm">
             <h4 className="font-bold text-lg">{backendData.title}</h4>
             <p className="text-blue-600">${backendData.price}</p>
             {/* Backend wali image agar dikhani hai */}
             <img src={backendData.imageURL} className="w-32 h-32 mx-auto mt-2" alt="backend" />
          </div>
        ) : (
          <p className="text-gray-500">No backend data found. Make sure server is running on port 5050.</p>
        )}
      </div>
    </div>
  );
}

export default Card;