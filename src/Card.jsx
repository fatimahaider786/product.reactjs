import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function Card() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://productjs-server-production-6f0b.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-xl">
        Loading...
      </h2>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-sm bg-white border rounded-lg shadow-md p-5">
        <img
          className="rounded-lg w-full h-48 object-cover"
          src={product.imageURL}
          alt={product.title}
        />

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">
            {product.title}
          </h2>

          <p className="text-gray-700 mb-3">
            {product.description}
          </p>

          <p className="text-3xl font-extrabold mb-4">
            ${product.price}
          </p>

          <div className="flex justify-between">
            <Link to="/" className="text-blue-600">
              ← Back
            </Link>

            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;