import Link from 'next/link';
import React from 'react'

const  BackPack= () => {
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
  
  return (
    <div className=' mx-auto max-w-7xl'>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    {products.map((product, index) => (
      <div key={index} className="border rounded-lg p-4 shadow-lg">
        
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
        </div>
        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      
        <p className="text-orange-500 font-bold">TK. {product.price}</p>
        <div className="mt-4 space-x-2">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Add to Cart</button>
 
        <Link href={`/backpack/${product.id}`} className="bg-gray-300 px-4 py-2 rounded">Details</Link>
        </div>
      </div>
    ))}
  </div>
    </div>
 
  )
}

export default BackPack
