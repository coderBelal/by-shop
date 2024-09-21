import Link from 'next/link';
import React from 'react'

const Combo = () => {
    const products = [
        {
          id: 1,
          title: 'Refreshing Perfume Oil Box 2.0 Combo',
          price: 890,
 
          desc: 'A premium collection of perfume oils with a refreshing fragrance.',
          image: ' https://i.postimg.cc/cJ6j4Rpy/mv-P4e-OK3-JJ0ah3-XJQD0.webp',
        },
        {
          id: 2,
       title: 'Exclusive Twin - 12 ml Combo',
          price: 950,
  
          desc: 'An exclusive twin set of premium Arabic perfume oils.',
          image: ' https://i.postimg.cc/bJtB1zYm/U3-Xf9mutry58-YDq73wi.webp',
        },
        {
          id: 3,
          title: 'Platinum Attar - Wooden Box Combo',
          price: 5000,
 
          image: ' https://i.postimg.cc/nrTgh3hx/JZul1v4ar1q-MWfxp-GO7.webp',
        },
        // Add more products as needed
      ];
      
  return (
    <div className=' mx-auto max-w-7xl'>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    {products.map((product, index) => (
      <div key={index} className="border rounded-lg p-4 shadow-lg">
        <div className="relative">
       
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
        </div>
        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
     
        <p className="text-orange-500 font-bold">TK. {product.price}</p>
        <div className="mt-4 space-x-2">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Add to Cart</button>
 
        <Link href={`/combo/${product.id}`} className="bg-gray-300 px-4 py-2 rounded">Details</Link>
        </div>
      </div>
    ))}
  </div>
    </div>
 
  )
}

export default Combo