 "use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

// Sample product data
const products = [
  {
    id: 1,
    title: 'Refreshing Perfume Oil Box 2.0',
    price: 890,
    oldPrice: 1290,
    brand: 'Believers Sign',
    status: 'In Stock',
    desc: 'The Exclusive Twin set from Believers Sign features two premium Arabic perfume oils, each 12 ml, known for their captivating and exotic scents. This set is perfect for anyone who values unique and luxurious fragrances. The oils are crafted to offer a rich and memorable aroma experience, whether for personal use or as a refined gift. With an original price of 1900, this exclusive set is now available for 950, offering exceptional value for its quality.',
    image: 'https://i.postimg.cc/cJ6j4Rpy/mv-P4e-OK3-JJ0ah3-XJQD0.webp',
  },
  {
    id: 2,
    title: 'Exclusive Twin - 12 ml',
    price: 950,
    oldPrice: 1900,
    brand: 'Believers Sign',
    status: 'In Stock',
    desc: 'The Exclusive Twin set from Believers Sign features two premium Arabic perfume oils, each 12 ml, known for their captivating and exotic scents. This set is perfect for anyone who values unique and luxurious fragrances. The oils are crafted to offer a rich and memorable aroma experience, whether for personal use or as a refined gift. With an original price of 1900, this exclusive set is now available for 950, offering exceptional value for its quality.',
    image: 'https://i.postimg.cc/rs2YJvKM/4-Gwi1-Of-Gt6-8-NSUg-Wil.webp',
  },
  {
    id: 3,
    title: 'Platinum Attar - Wooden Box',
    price: 5000,
    oldPrice: null,
    brand: 'Believers Sign',
    status: 'In Stock',
    desc: 'Experience luxury with the Platinum Attar from Believers Sign, presented in an elegant wooden box. This attar is known for its high-quality ingredients and sophisticated fragrance, making it an excellent choice for those who appreciate a refined scent. Ideal for gifting or personal use, the wooden box adds a touch of elegance to the presentation. With a price of 5000 and no old price, it reflects its premium status and quality, making it a standout choice for fragrance lovers.',
    image: 'https://i.postimg.cc/Y0NDybWg/of-JXBWr-R42q-Us-K-Zg8d.webp',
  },
];

const ProductPage = () => {
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
            {product.oldPrice && (
              <p className="text-lg sm:text-xl text-red-600 line-through">
                Old Price: {product.oldPrice}৳
              </p>
            )}
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
