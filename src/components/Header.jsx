import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from 'use-shopping-cart'

const Header = () => {

   const {formattedTotalPrice, cartCount} = useShoppingCart()

   return (
      <div className='sticky top-0 px-8 z-10 shadow bg-white'>
         <div className="container mx-auto p-6 flex justify-between">
            <Logo />
            <Link href='/cart' className='flex items-center space-x-1 text-gray-700 hover:text-gray-900'>
               <div className="relative">
                  <ShoppingCartIcon className='w-7 h-7 flex-shrink-0' />
               </div>
               <p className='text-lg'>
                  {formattedTotalPrice}
                  <span className='text-sm text-gray-500'> ({cartCount})</span>
               </p>
            </Link>
         </div>
      </div>
   )
}

export default Header