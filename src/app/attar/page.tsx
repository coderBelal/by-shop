import Link from 'next/link';
import React from 'react';

// Define the type for a product
interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number | null;
  discount?: string | null;
  desc?: string;
  image: string;
}

const AttarPage = () => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Refreshing Perfume Oil Box 2.0',
      price: 890,
      oldPrice: 1290,
      desc: 'A premium collection of perfume oils with a refreshing fragrance.',
      image: 'https://i.postimg.cc/cJ6j4Rpy/mv-P4e-OK3-JJ0ah3-XJQD0.webp',
    },
    {
      id: 2,
      title: 'Exclusive Twin - 12 ml',
      price: 950,
      oldPrice: 1900,
      desc: 'An exclusive twin set of premium Arabic perfume oils.',
      image: 'https://i.postimg.cc/rs2YJvKM/4-Gwi1-Of-Gt6-8-NSUg-Wil.webp',
    },
    {
      id: 3,
      title: 'Platinum Attar - Wooden Box',
      price: 5000,
      oldPrice: null,
      discount: null,
      image: 'https://i.postimg.cc/Y0NDybWg/of-JXBWr-R42q-Us-K-Zg8d.webp',
    },
    // Add more products as needed
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <div className="relative">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount} FLAT
                </span>
              )}
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            </div>
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            {product.oldPrice && (
              <p className="text-gray-600 line-through">TK. {product.oldPrice}</p>
            )}
            <p className="text-orange-500 font-bold">TK. {product.price}</p>
            <div className="mt-4 space-x-2 flex ">
              <button className="bg-orange-500 text-white px-4 py-2 rounded">Add to Cart</button>
              <Link href={`/attar/${product.id}`} passHref>
                <h1 className="bg-gray-300 px-4 py-2 rounded w-24">Details</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttarPage;
