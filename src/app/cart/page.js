"use client"
import { formatAmount } from "@/utils/stripe"
import { useCart } from "@/utils/useCart"
import Link from "next/link"

// import {TrashIcon,MinusIcon} from "@heroicons/vue/24/solid"

export default function Page(){
    const {cartCount, cartItem , cartTotal ,incrementcartItem,decrementcartItem,deleteAllItems,deleteById} = useCart()
    
    return(
       
        <div className="m-5 px-20">
            {/*  cart page top area */}
            {cartCount > 0 ?(
            <>
            <h2 className="text-4xl font-semibold">Cart Item:{cartCount}</h2>
            <button onClick={deleteAllItems} className="text-orange-400 mt-2 font-bold hover:text-red-600 hover:cursor-pointer">Clear All
            {/* <TrashIcon className="inline-block w-4 h-4"/> */}
            </button>
            </>
            ):(
              <>
              <h2 className="text-4xl font-semibold">Your Shopping Cart is Empty !</h2>
              <Link href="/product" className="text-xl mt-1 text-orange-500 underline">Shop Here</Link>
              </>
            )}
            {/* cart page middle area */}
            {
                Array.isArray(cartItem) && cartCount > 0 && (
                    <div>
                        {cartItem.map(item=>{
                            return(
                                <div key={item.id} className="flex-justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg">
                                    <Link href={`/product/${item.id}`} className='flex-items-center'>
                                        <img src="/images/main.jpg" className="w-20 h-auto"/>
                                        <p className="font-semibold text-xl ml-2">{item.name}</p>
                                    </Link>
                                    <div className="flex items-center gap-5">
                                        <div className="flex items-center gap-3">
                                            <button onClick={()=>decrementcartItem(item.id)} className="p-1  rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed">-
                                                {/* <MinusIcon className="w-6 h-6"/> */}
                                            </button>
                                            <p className="font-semibold text-xl">{item.quantity}</p>
                                            <button onClick={()=>incrementcartItem(item.id)} className="p-1  rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed">+
                                                {/* <MinusIcon className="w-6 h-6"/> */}
                                            </button>
                                        </div>
                                        <p>x <span className="text-xl font-semibold">{formatAmount(item.price)}</span></p>
                                        <button onClick={()=>deleteById(item.id)} className="text-orange-500 hover:text-red-600">
                                            {/* <XCircleIcon className='w-6 h-6' */}
                                            close</button>
                                    </div>
                                </div>
                            )
                        })}
                    
                    <div className="flex flex-col items-end border-t py-4 mt-8">
                        <p className="text-xl ">Total <span className="font-bold text-green-500">{cartTotal}</span></p>
                        <button className=" mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md">
                            Checkout
                        </button>
                    </div>
                    </div>
                )
            }
        </div>
        
    )
}
