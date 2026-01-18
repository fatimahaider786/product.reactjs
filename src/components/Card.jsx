import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router"; 
import axios from "axios";

function CardDetail() {
  const [backendCards, setBackendCards] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("http://localhost:5050/products");
        setBackendCards(res.data);
      } catch (err) {
        console.error("Error fetching cards:", err);
      }
    };
    fetchCards();
  }, []);

  
  const products = [
    {
      id: 1,
      name: "RTX 5070",
      desc: "High performance graphic card for gaming.",
      price: "100000",
      imgURL: "https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg",
    },
    {
      id: 2,
      name: "Cars",
      desc: "High performance luxury car.",
      price: "1000000",
      imgURL: "https://cdn.vox-cdn.com/thumbor/IZ7fpJNSeEO1v2vNapVlLYlCWzc=/214x0:1037x549/1200x800/filters:focal(214x0:1037x549)/cdn.vox-cdn.com/uploads/chorus_image/image/45200072/new-ford-gt-supercar-0006.0.0.jpg",
    },
  ];

  const productInfo = products.find((p) => p.id === parseInt(id));

  if (!productInfo) return <h2 className="text-center mt-10">Product Not Found</h2>;

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
    
      <div className="flex justify-center mb-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-5">
          <img src={productInfo.imgURL} alt={productInfo.name} className="rounded-lg w-full h-48 object-cover" />
          <h5 className="mt-4 text-2xl font-bold">{productInfo.name}</h5>
          <p className="text-gray-700">{productInfo.desc}</p>
          <p className="text-3xl font-extrabold mt-2">${productInfo.price}</p>
          <Link to="/" className="text-blue-600 hover:underline block mt-4">← Back to Shop</Link>
        </div>
      </div>

      <hr className="my-10" />

      {/* Backend Data Display */}
      <h3 className="text-center text-xl font-bold mb-5">Products from Backend</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {backendCards.length > 0 ? (
          backendCards.map((pr) => (
            <div key={pr.id} className="w-72 border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
              <img 
                src={pr.imageURL} 
                alt={pr.title} 
                className="w-full h-40 object-cover rounded-md bg-gray-200" 
              />
              <h4 className="font-bold mt-2 capitalize">{pr.title}</h4>
              <p className="text-sm text-gray-600">{pr.description}</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Update</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No backend data found. Make sure server is running on port 5050.</p>
        )}
      </div>
    </div>
  );
}

export default CardDetail;