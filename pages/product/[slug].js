import Layout from '@/components/Layout';
import data from '@/utils/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div>
          <Image
            src={product.image}
            width={650}
            height={650}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>

        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
          </div>
          <button className="primary-button w-full">Add to cart</button>
        </div>
      </div>
    </Layout>
  );
}