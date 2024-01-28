import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Ratings from './Ratings'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import toast from 'react-hot-toast'

const ProductCard = ({ product, index }) => {

   const { addItem } = useShoppingCart();

   function onAddToCart(e) {
      e.preventDefault();
      const id = toast.loading("Adding 1 item...")
      addItem(product)
      toast.success(`${product.name} added`, { id })
   }

   return (
      <Link href={`products/${product.id}`} className='border-2 rounded-md group overflow-hidden'>
         <div className="relative h-64 w-full">
            <Image priority={index === 0} src={product.image} style={{ objectFit: "contain" }} alt={product.name} fill sizes='100' />
         </div>

         <div className="p-6 bg-white">
            <p className="font-semibold text-lg">{product.name}</p>
            <Ratings />
            <div className="mt-4 flex items-center justify-between space-x-2">
               <div>
                  <p className="text-gray-500">Price</p>
                  <p className="text-lg font-semibold">{formatCurrencyString({
                     currency: product.currency,
                     value: product.price,
                  })}</p>
               </div>
               <button onClick={onAddToCart} className='border rounded-lg py-1 px-4'>Add to Cart</button>
            </div>
         </div>
      </Link>
   )
}

export default ProductCard