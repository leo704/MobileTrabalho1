import React, {createContext, useState} from 'react';

export const ProdContext = createContext({});

//https://dummyjson.com/products

export default function ProdProvider({children}) {
  const Produtos = useState([
    {
      id: 1,
      title: 'iPhone 9',
      price: 549.99,
      discountPercentage: 12.96,
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    },
    {
      id: 2,
      title: 'iPhone X',
      price: 899.99,
      discountPercentage: 17.94,
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/2/1.jpg',
        'https://i.dummyjson.com/data/products/2/2.jpg',
        'https://i.dummyjson.com/data/products/2/3.jpg',
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      ],
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      price: 1249.99,
      discountPercentage: 15.46,
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
    },
    {
      id: 4,
      title: 'OPPOF19',
      price: 280.99,
      discountPercentage: 17.91,
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/4/1.jpg',
        'https://i.dummyjson.com/data/products/4/2.jpg',
        'https://i.dummyjson.com/data/products/4/3.jpg',
        'https://i.dummyjson.com/data/products/4/4.jpg',
        'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      ],
    },
    {
      id: 5,
      title: 'Huawei P30',
      price: 499.99,
      discountPercentage: 10.58,
      thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/5/1.jpg',
        'https://i.dummyjson.com/data/products/5/2.jpg',
        'https://i.dummyjson.com/data/products/5/3.jpg',
      ],
    },
    {
      id: 6,
      title: 'MacBook Pro',
      price: 1749.99,
      discountPercentage: 11.02,
      thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
      images: [
        'https://i.dummyjson.com/data/products/6/1.png',
        'https://i.dummyjson.com/data/products/6/2.jpg',
        'https://i.dummyjson.com/data/products/6/3.png',
        'https://i.dummyjson.com/data/products/6/4.jpg',
      ],
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      price: 1499.99,
      discountPercentage: 4.15,
      thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/7/1.jpg',
        'https://i.dummyjson.com/data/products/7/2.jpg',
        'https://i.dummyjson.com/data/products/7/3.jpg',
        'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      ],
    },
    {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      price: 1499.99,
      discountPercentage: 10.23,
      thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/8/1.jpg',
        'https://i.dummyjson.com/data/products/8/2.jpg',
        'https://i.dummyjson.com/data/products/8/3.jpg',
        'https://i.dummyjson.com/data/products/8/4.jpg',
        'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
      ],
    },
    {
      id: 9,
      title: 'Infinix INBOOK',
      price: 1099.99,
      discountPercentage: 11.83,
      thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/9/1.jpg',
        'https://i.dummyjson.com/data/products/9/2.png',
        'https://i.dummyjson.com/data/products/9/3.png',
        'https://i.dummyjson.com/data/products/9/4.jpg',
        'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
      ],
    },
    {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      price: 1099.99,
      discountPercentage: 6.18,
      thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
      images: [
        'https://i.dummyjson.com/data/products/10/1.jpg',
        'https://i.dummyjson.com/data/products/10/2.jpg',
        'https://i.dummyjson.com/data/products/10/3.jpg',
        'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
      ],
    },
  ]);

  return (
    <ProdContext.Provider value={Produtos}>{children}</ProdContext.Provider>
  );
}
