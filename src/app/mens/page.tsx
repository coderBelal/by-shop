import Link from "next/link";

const Mens = () => {
  const products = [
    {
      id: 1,
      comboName: 'Comfort Fit Mens Jeans',
      price: 1200,
      oldPrice: 1500,
      desc: 'Stylish and comfortable jeans made from high-quality denim. Features a relaxed fit and classic five-pocket design. Perfect for casual wear or a night out.',
      image: ' https://i.postimg.cc/zf7RGW1N/9ba-E5-Roakh2c0-BOp-PMZ.webp',
    },
    {
      id: 2,
      comboName: 'Premium Cotton T-Shirt - Pack of 3',
      price: 750,
      oldPrice: 1000,
      desc: 'A pack of three premium cotton t-shirts in assorted colors. Soft, breathable fabric ensures all-day comfort. Ideal for layering or wearing on its own.',
      image: ' https://i.postimg.cc/ydrgFHdr/EZdit-QDIx-W834-0rf9d.webp',
    },
    {
      id: 3,
      comboName: 'Classic Mens Chino Pants',
      price: 1500,
      oldPrice: 2000,
      desc: 'Elegant and versatile chino pants made from durable cotton blend. Features a slim fit and adjustable waistband. Suitable for both formal and casual occasions.',
      image: 'https://i.postimg.cc/zvbL7cHD/m-M71-Ejx-AMSXLl5-KP71-L.webp',
    },
    {
      id: 4,
      comboName: 'Lightweight Bomber Jacket',
      price: 1800,
      oldPrice: 2200,
      desc: 'A stylish bomber jacket designed for cooler weather. Made from lightweight, water-resistant fabric with a zip closure and ribbed cuffs. Ideal for layering over casual outfits.',
      image: 'https://i.postimg.cc/j2pDF4yH/QTKla-Ui7-Ffpfb-Eaay-HW.webp ',
    },
    {
      id: 5,
      comboName: 'Casual Polo Shirt - Set of 2',
      price: 950,
      oldPrice: 1300,
      desc: 'A set of two casual polo shirts made from breathable cotton. Features a classic collar and button placket. Perfect for a relaxed yet polished look.',
      image: ' https://i.postimg.cc/nzL9jzHD/slynnj-xi7swl0-Nlu3x.webp',
    },
    {
        id: 1,
        comboName: 'Comfort Fit Mens Jeans',
        price: 1200,
        oldPrice: 1500,
        desc: 'Stylish and comfortable jeans made from high-quality denim. Features a relaxed fit and classic five-pocket design. Perfect for casual wear or a night out.',
        image: ' https://i.postimg.cc/zf7RGW1N/9ba-E5-Roakh2c0-BOp-PMZ.webp',
      },
      {
        id: 2,
        comboName: 'Premium Cotton T-Shirt - Pack of 3',
        price: 750,
        oldPrice: 1000,
        desc: 'A pack of three premium cotton t-shirts in assorted colors. Soft, breathable fabric ensures all-day comfort. Ideal for layering or wearing on its own.',
        image: ' https://i.postimg.cc/ydrgFHdr/EZdit-QDIx-W834-0rf9d.webp',
      },
      {
        id: 3,
        comboName: 'Classic Mens Chino Pants',
        price: 1500,
        oldPrice: 2000,
        desc: 'Elegant and versatile chino pants made from durable cotton blend. Features a slim fit and adjustable waistband. Suitable for both formal and casual occasions.',
        image: 'https://i.postimg.cc/zvbL7cHD/m-M71-Ejx-AMSXLl5-KP71-L.webp',
      },
      {
        id: 4,
        comboName: 'Lightweight Bomber Jacket',
        price: 1800,
        oldPrice: 2200,
        desc: 'A stylish bomber jacket designed for cooler weather. Made from lightweight, water-resistant fabric with a zip closure and ribbed cuffs. Ideal for layering over casual outfits.',
        image: 'https://i.postimg.cc/j2pDF4yH/QTKla-Ui7-Ffpfb-Eaay-HW.webp ',
      },
      {
        id: 5,
        comboName: 'Casual Polo Shirt - Set of 2',
        price: 950,
        oldPrice: 1300,
        desc: 'A set of two casual polo shirts made from breathable cotton. Features a classic collar and button placket. Perfect for a relaxed yet polished look.',
        image: ' https://i.postimg.cc/nzL9jzHD/slynnj-xi7swl0-Nlu3x.webp',
      },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-3xl">Men's Collection</div>
        
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <div className="relative">
              <img src={product.image} alt={product.comboName} className="w-full h-40 object-cover" />
            </div>
            <h2 className="text-lg font-bold mt-2">{product.comboName}</h2>
            {product.oldPrice && (
              <p className="text-gray-600 line-through">TK. {product.oldPrice}</p>
            )}
            <p className="text-orange-500 font-bold">TK. {product.price}</p>
            <div className="mt-4 space-x-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded">Add to Cart</button>
         
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens;
