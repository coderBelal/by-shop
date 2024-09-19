"use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';


  
const ProductPage = () => {
    // Sample product data
const products = [
    {
      id: 1,
      title: 'Premium Leather Backpack - Black',
      price: 1490,
 
      brand: 'Urban Style',
      status: 'In Stock',
      desc: 'The Premium Leather Backpack from Urban Style features a sleek black design with multiple compartments for convenience. Crafted from high-quality leather, it combines style with durability, making it perfect for everyday use or travel. With an original price of 1990, this backpack is now available for 1490, offering exceptional value for its premium quality and craftsmanship.',
      image: ' https://i.postimg.cc/kGjK4Srz/ahyr-RBg-Xk4h-Ft-Kr-UAZO.webp',
    },
    {
      id: 2,
      title: 'Versatile Canvas Tote Bag - Grey',
      price: 690,
 
      brand: 'Urban Style',
      status: 'In Stock',
      desc: 'The Versatile Canvas Tote Bag from Urban Style is designed for daily use with a durable grey canvas construction. It features a spacious main compartment and sturdy handles for easy carrying. This tote bag is perfect for shopping, work, or casual outings. Originally priced at 990, it is now available for 690, offering great value for its practicality and design.',
      image: 'https://i.postimg.cc/59pwphHg/s-Yi-Lez-Tt-X9-OTA5pfj71.webp ',
    },
    {
      id: 3,
      title: 'Travel Duffel Bag - Navy Blue',
      price: 3500,
 
      brand: 'Urban Style',
      status: 'In Stock',
      desc: 'The Travel Duffel Bag from Urban Style is crafted for travelers seeking both style and functionality. Featuring a spacious interior and durable navy blue fabric, this bag is ideal for trips and adventures. The sleek design ensures it stands out while offering practical features for easy packing and carrying. Priced at 3500, it reflects its high quality and suitability for travel enthusiasts.',
      image: 'https://i.postimg.cc/9FMykLZh/TNz-E0f-MVSZa-Ni-YVYuy8.webp ',
    },
  ];
  const { id } = useParams();
  const router = useRouter();

  if (!id) {
    return <p className="text-center text-red-500">No product selected!</p>;
  }

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col   md:flex-row gap-6">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Product Information */}
        <div className="md:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">{product.title}</h1>

          {/* Brand and Status */}
          <p className="text-gray-600 text-lg mb-2">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="text-green-600 text-lg mb-4">
            <strong>Status:</strong> {product.status}
          </p>

          {/* Price Section */}
          <div className="mb-4">
            <p className="text-xl sm:text-2xl text-orange-600 font-semibold mb-2">
              {product.price}৳
            </p>
          
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
            <button className="flex-grow px-4 py-2 mb-2 sm:mb-0 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">
              Add to Cart
            </button>
            <button className="flex-grow px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out">
              Buy Now
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700">{product.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
