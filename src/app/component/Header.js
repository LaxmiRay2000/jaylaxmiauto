"use client";
import React from 'react'
// import  {ShoppingCartIcon} from '@heroicons/react/24/outline';
import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon';
import Link from 'next/link';



function Header() {
  return (
    <header className='py-4 bg-white drop-shadow-md'>
      <div className='flex items-center justify-between px-4 mx-auto max-w-7xl'>
        {/*left part */}
        <div>
          <span className='ml-4 text-xl font-bold cursor-pointer'>
            JayLaxmiAuto{""}
            <span className='ml-1 font-bold text-blue-500'>Two Wheeler Parts

            </span>
          </span>

        </div>
          {/* Middle links */}
          <div className='flex-row hidden space-x-4 sm:flex'>
            <p>Offers</p>
            <p>Products</p>
            <p>Services</p>
          </div>

        {/*Right part here */}
        <div className='flex items-center space-x-4'>
          <button className='hidden px-4 py-2 text-blue-500 border border-blue-500 rounded md:inline-block hover:bg-blue-50'>Your Cart</button>

          <Link href="/cart">
            <ShoppingCartIcon className="w-6 h-6 text-gray-500" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;