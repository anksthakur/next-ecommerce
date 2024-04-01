import Link from "next/link"

// import {TrashIcon,MinusIcon} from "@heroicons/vue/24/solid"
export default function Page(){
    const cartCount = 1
    return(
       
        <div className="m-5 px-20">
            {/*  cart page top area */}
            {cartCount > 0 ?(
            <>
            <h2 className="text-4xl font-semibold">Cart Item:{cartCount}</h2>
            <button className="text-orange-400 mt-2 font-bold hover:text-red-600 hover:cursor-pointer">Clear All
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
                cartCount > 0 && (
                    <div>
                    <div className="flex-justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg">
                        <Link href="/product/p1" className='flex-items-center'>
                            <img src="/images/main.jpg" className="w-20 h-auto"/>
                            <p className="font-semibold text-xl ml-2">Thakur Shirt</p>
                        </Link>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-3">
                                <button className="p-1  rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed">-
                                    {/* <MinusIcon className="w-6 h-6"/> */}
                                </button>
                                <p className="font-semibold text-xl">0</p>
                                <button className="p-1  rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed">+
                                    {/* <MinusIcon className="w-6 h-6"/> */}
                                </button>
                            </div>
                            <p>x <span className="text-xl font-semibold">999</span></p>
                            <button className="text-orange-500 hover:text-red-600">
                                {/* <XCircleIcon className='w-6 h-6' */}
                                close</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-end border-t py-4 mt-8">
                        <p className="text-xl ">Total <span className="font-bold text-green-500">3000</span></p>
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