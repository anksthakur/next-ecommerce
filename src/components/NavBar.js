import Link from "next/link";

// import {ShoppingCartIcon} from '@heroicons/vue/24/outline'

export default function NavBar (){
    return(
        <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className='text-blue-600 font-bold text-3xl cursor-pointer'>Thakur</Link>
      <Link href="/cart" className='text-blue-600 px-4 py-2 font-bold hover:text-red-600 hover:cursor-pointer'>
      {/* <ShoppingCartIcon className='w-7 h-7 inline-block'/>  */}
        Cart 
        <span> {0}</span>
      </Link>
    </nav>
    )
}





