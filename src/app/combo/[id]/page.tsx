"use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';


  
const ProductPage = () => {
    const products = [
        {
          id: 1,
          title: 'Refreshing Perfume Oil Box 2.0 Combo',
          price: 890,
          oldPrice: 1290,
          desc: 'A premium collection of perfume oils with a refreshing fragrance. This combo includes a variety of scents designed to uplift your mood and add a touch of elegance to your daily routine. Ideal for personal use or as a thoughtful gift for loved ones.',
          image: 'https://i.postimg.cc/cJ6j4Rpy/mv-P4e-OK3-JJ0ah3-XJQD0.webp',
        },
        {
          id: 2,
          title: 'Exclusive Twin - 12 ml Combo',
          price: 950,
          oldPrice: 1900,
          desc: 'An exclusive twin set of premium Arabic perfume oils. Each bottle features a unique fragrance blend crafted to deliver a luxurious and long-lasting aroma. Perfect for those who appreciate high-quality scents and want to make a statement with their fragrance.',
          image: 'https://i.postimg.cc/bJtB1zYm/U3-Xf9mutry58-YDq73wi.webp',
        },
        {
          id: 3,
          title: 'Platinum Attar - Wooden Box Combo',
          price: 5000,
          oldPrice: null,
          discount: null,
          desc: 'A sophisticated and opulent collection of Platinum Attar presented in a beautifully crafted wooden box. This high-end combo includes some of the most exclusive and rare attars, offering a rich and deep fragrance experience. Ideal for connoisseurs of fine perfumes who appreciate luxury and refinement.',
          image: 'https://i.postimg.cc/nrTgh3hx/JZul1v4ar1q-MWfxp-GO7.webp',
        },
        // Add more products as needed
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
