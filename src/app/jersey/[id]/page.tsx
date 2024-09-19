"use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';


  
const ProductPage = () => {
    const products = [
        {
            id: 1,
            title: 'Classic Football Jersey - Home',
            price: 890,
            oldPrice: 1290,
            desc: 'Experience the ultimate comfort with our Classic Football Jersey, designed for home games. Made from high-quality fabric, this jersey features a classic design that ensures both style and performance. Ideal for fans and players alike, it offers a perfect fit and lasting durability.',
            image: 'https://i.postimg.cc/X7B93Q76/k-SFWW8-Sc-Rn-FPl-F4y-X3.webp',
        },
        {
            id: 2,
            title: 'Exclusive Retro Jersey - Away',
            price: 950,
            oldPrice: 1900,
            desc: 'Our Exclusive Retro Jersey brings a touch of nostalgia with its classic away design. Crafted from premium materials, this jersey combines retro aesthetics with modern comfort. Perfect for fans who appreciate timeless style and superior quality in their sportswear.',
            image: 'https://i.postimg.cc/g29808nX/c-Vzk-Ia-N5-AMz-P5k0xb18.webp',
        },
        {
            id: 3,
            title: 'Platinum Edition Jersey - Special Box',
            price: 5000,
            oldPrice: null,
            discount: null,
            desc: 'The Platinum Edition Jersey comes in a special box, featuring exclusive designs and premium materials. This limited-edition jersey is a collector’s dream, offering unmatched quality and style. Ideal for those who seek exclusivity and elegance in their sportswear.',
            image: 'https://i.postimg.cc/L4bjrrSV/jd-Net-VGfn0-Wp-Np-ADG6.webp',
        },
        {
            id: 4,
            title: 'Platinum Edition Jersey - Special Box',
            price: 5000,
            oldPrice: null,
            discount: null,
            desc: 'This Platinum Edition Jersey, housed in a special box, is designed for the discerning collector. With its high-end materials and unique design, it offers both luxury and performance. A perfect addition for those who value exclusivity and sophistication in their apparel.',
            image: 'https://i.postimg.cc/nrTgh3hx/JZul1v4ar1q-MWfxp-GO7.webp',
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
