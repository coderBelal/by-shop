import Link from 'next/link';
import Card from './Card';

const AllCard = () => {
  const products = [
    { id: 1, imageSrc: 'https://i.postimg.cc/3xQLgC5H/a-Ak-Fso77y0v2w6-UKt-Wf.webp', title: 'Attar', href: '/attar' },
    { id: 2, imageSrc: 'https://i.postimg.cc/4xvWw7sH/4-A4-VPxb4-WWc-FI0-Sh-Ow0.webp', title: 'Backpack', href: '/backpack' },
    { id: 3, imageSrc: 'https://i.postimg.cc/zBvpJxWT/q-Bg-Kr-KSMk-Eph-KNz-Cayx.webp', title: 'Combo & Gifts', href: '/combo' },
    { id: 4, imageSrc: 'https://i.postimg.cc/GpqqwWBc/nc-Upw-JDG6-M7e-H16-Oj-Tf.webp', title: 'Dawah Jersey', href: '/jersey' },
    { id: 5, imageSrc: 'https://i.postimg.cc/fbwBPzR2/a-Hex9jf-H7-WBxe-Poh-WO4.webp', title: 'Panjabi', href: '/panjabi' },
    { id: 6, imageSrc: 'https://i.postimg.cc/FR6p10g8/Sh-Fiw-Yoecfh-ZQg0u-Ut-V.webp', title: 'Trousers', href: '/trousers' },
    { id: 7, imageSrc: 'https://i.postimg.cc/s1dJ4yLJ/y-Tx8-V-q-GD5-SPEjp-JXER.webp', title: 'Dawah Canvas', href: '/dawah-canvas' },
    { id: 8, imageSrc: 'https://i.postimg.cc/yxSPRWLd/Sj-XCALc-G8-Yvpm-Aj-Fr4.webp', title: 'Polo Shirt', href: '/polo-shirt' },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} href={product.href} passHref>
            <h2 className="block">
              <Card imageSrc={product.imageSrc} title={product.title} />
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
