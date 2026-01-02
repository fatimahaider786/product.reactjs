
import React from 'react'
import { useParams, Link } from 'react-router'

function Card() {
  const { id } = useParams()

  // Note: Real world mein yeh data API se aata hai ya kisi separate file se.
  const products = [
    { id: 1, name: "RTX 5070", desc: "High performance graphic card for gaming.", price: "100000", imgURL: " https://www.creativefabrica.com/wp-content/uploads/2023/04/06/futuristic-sports-car-Modern-car-Graphics-66382336-1.jpeg" },
    { id: 2, name: "Cars", desc: "High performance luxury car.", price: "1000000", imgURL: " https://cdn.vox-cdn.com/thumbor/IZ7fpJNSeEO1v2vNapVlLYlCWzc=/214x0:1037x549/1200x800/filters:focal(214x0:1037x549)/cdn.vox-cdn.com/uploads/chorus_image/image/45200072/new-ford-gt-supercar-0006.0.0.jpg" }
  ]

  const productInfo = products.find(p => p.id === parseInt(id))

  if (!productInfo) return <h2 className="text-center mt-10">Product Not Found</h2>

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-5">
        <img className="rounded-t-lg w-full h-48 object-cover" src={productInfo.imgURL} alt={productInfo.name} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{productInfo.name}</h5>
          <p className="mb-3 font-normal text-gray-700">{productInfo.desc}</p>
          <p className="text-3xl font-extrabold text-gray-900 mb-4">${productInfo.price}</p>
          <div className="flex justify-between">
            <Link to="/" className="text-blue-600 hover:underline">← Back to Shop</Link>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card