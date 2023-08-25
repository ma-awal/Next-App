import Link from 'next/link';
import React from 'react';

export default function ProductItems({ product }) {
  return (
    <div className="card  ">
      <Link href={`product/${product.slug}`}>
        <img src={product.image} className="rounded  shadow" />
      </Link>
      <div className="flex flex-col justify-between items-center p-5">
        <Link href={`product/${product.slug}`}>
          <h2>{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button mt-1 " type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
