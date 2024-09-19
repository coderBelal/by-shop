 "use client";
import { useState } from "react";
import { Image, Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: 'Refreshing Perfume Oil Box 2.0',
    price: 890,
    oldPrice: 1290,
    desc: 'A premium collection of perfume oils with a refreshing fragrance.',
    image: ' https://i.postimg.cc/cJ6j4Rpy/mv-P4e-OK3-JJ0ah3-XJQD0.webp',
  },
  {
    id: 2,
    title: 'Exclusive Twin - 12 ml',
    price: 950,
    oldPrice: 1900,
    desc: 'An exclusive twin set of premium Arabic perfume oils.',
    image: ' https://i.postimg.cc/rs2YJvKM/4-Gwi1-Of-Gt6-8-NSUg-Wil.webp',
  }, 
{
    id: 3,
  title: 'Platinum Attar - Wooden Box',
  price: 5000,
  oldPrice: null,
  discount: null,
  image: 'https://i.postimg.cc/Y0NDybWg/of-JXBWr-R42q-Us-K-Zg8d.webp ',
},
{
  id: 1,
  title: 'Premium Leather Backpack - Black',
  price: 1490,
  oldPrice: 1990,
  brand: 'Urban Style',
  status: 'In Stock',
  desc: 'The Premium Leather Backpack from Urban Style features a sleek black design with multiple compartments for convenience. Crafted from high-quality leather, it combines style with durability, making it perfect for everyday use or travel. With an original price of 1990, this backpack is now available for 1490, offering exceptional value for its premium quality and craftsmanship.',
  image: ' https://i.postimg.cc/kGjK4Srz/ahyr-RBg-Xk4h-Ft-Kr-UAZO.webp',
},
{
  id: 2,
  title: 'Versatile Canvas Tote Bag - Grey',
  price: 690,
  oldPrice: 990,
  brand: 'Urban Style',
  status: 'In Stock',
  desc: 'The Versatile Canvas Tote Bag from Urban Style is designed for daily use with a durable grey canvas construction. It features a spacious main compartment and sturdy handles for easy carrying. This tote bag is perfect for shopping, work, or casual outings. Originally priced at 990, it is now available for 690, offering great value for its practicality and design.',
  image: 'https://i.postimg.cc/59pwphHg/s-Yi-Lez-Tt-X9-OTA5pfj71.webp ',
},
{
  id: 3,
  title: 'Travel Duffel Bag - Navy Blue',
  price: 3500,
  oldPrice: null,
  brand: 'Urban Style',
  status: 'In Stock',
  desc: 'The Travel Duffel Bag from Urban Style is crafted for travelers seeking both style and functionality. Featuring a spacious interior and durable navy blue fabric, this bag is ideal for trips and adventures. The sleek design ensures it stands out while offering practical features for easy packing and carrying. Priced at 3500, it reflects its high quality and suitability for travel enthusiasts.',
  image: 'https://i.postimg.cc/9FMykLZh/TNz-E0f-MVSZa-Ni-YVYuy8.webp ',
},
];

const Topnav = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [showResults, setShowResults] = useState(false); // Control search results display

  const handleSearchClick = () => {
    setShowResults(true);
  };

  const handleMobileSearchClose = () => {
    setIsMobileSearchOpen(false);
    setSearchTerm("");
    setShowResults(false);  
  };

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-h-7">
      <div className="relative flex items-center justify-between w-full p-4">
        <div className="text-2xl font-bold">
           by<span className="text-orange-600">Shop</span>
      
        </div>

        <div className="hidden md:flex items-center w-1/2 relative">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full p-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-orange-400"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(true);
            }}
          />
 
          <button
            className="p-2 bg-orange-600 text-white rounded-r-lg"
        
          >
            <Search className="w-6 h-6" />
          </button>
 
          {showResults && searchTerm.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="flex items-center p-2 border-b hover:bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{product.title}</span>
                      <span className="text-orange-600">৳ {product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-500 line-through">৳ {product.oldPrice}</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-gray-500">No products found.</div>
              )}
            </div>
          )}
        </div>

        {/* Icons for mobile */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden p-2" onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}>
            <Search className="w-6 h-6 text-orange-600" />
          </button>

          <button className="p-2 text-orange-600">
            <User className="w-6 h-6" />
          </button>
          <button className="relative p-2 text-orange-600">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 p-1 text-xs text-white bg-orange-600 rounded-full">
              0
            </span>
          </button>
        </div>
      </div>

        {isMobileSearchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-gray-800 bg-opacity-75">
          <div className="flex justify-between items-center p-4 bg-white w-full">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full p-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-orange-400"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowResults(true);
              }}
            />
            <button className="p-2 text-gray-500" onClick={handleMobileSearchClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

 
          {showResults && searchTerm.length > 0 && (
            <div className="bg-white w-full max-h-80 overflow-y-auto p-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="flex items-center p-2 border-b hover:bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{product.name}</span>
                      <span className="text-orange-600">৳ {product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-500 line-through">৳ {product.oldPrice}</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-gray-500">No products found.</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Topnav;
