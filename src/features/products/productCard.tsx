import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>
    </div>
  );
}

export default ProductCard;
