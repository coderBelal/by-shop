import Link from 'next/link';
import React from 'react'

const Jersey = () => {
    const products = [
        {
            id: 1,
            title: 'Classic Football Jersey - Home',
            price: 890,
            oldPrice: 1290,
            desc: 'A premium collection of jersey designs with a refreshing style.',
            image: 'https://i.postimg.cc/X7B93Q76/k-SFWW8-Sc-Rn-FPl-F4y-X3.webp ',
        },
        {
            id: 2,
            title: 'Exclusive Retro Jersey - Away',
            price: 950,
            oldPrice: 1900,
            desc: 'An exclusive retro set of premium jersey designs.',
            image:  ' https://i.postimg.cc/g29808nX/c-Vzk-Ia-N5-AMz-P5k0xb18.webp',
        },
        {
            id: 3,
            title: 'Platinum Edition Jersey - Special Box',
            price: 5000,
            oldPrice: null,
            discount: null,
            image: ' https://i.postimg.cc/L4bjrrSV/jd-Net-VGfn0-Wp-Np-ADG6.webp',
        },
        ,
        {
            id: 4,
            title: 'Platinum Edition Jersey - Special Box',
            price: 5000,
            oldPrice: null,
            discount: null,
            image: 'https://i.postimg.cc/L4bjrrSV/jd-Net-VGfn0-Wp-Np-ADG6.webp ',
        },
   
    ];
    
  return (
    <div className=' mx-auto max-w-7xl'>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    {products.map((product, index) => (
      <div key={index} className="border rounded-lg p-4 shadow-lg">
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
        <div className="mt-4 space-x-2">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Add to Cart</button>
 
        <Link href={`/jersey/${product.id}`} className="bg-gray-300 px-4 py-2 rounded">Details</Link>
        </div>
      </div>
    ))}
  </div>
    </div>
 
  )
}

export default Jersey