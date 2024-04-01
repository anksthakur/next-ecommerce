"use client"
import toast, { Toaster } from 'react-hot-toast';
export default function  Addtocart (){
    const handleAdd =()=>{
        toast.success("Item Added to Cart")
    }
    return (
        <div>
            <button onClick={handleAdd} className="w-full mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md">Add To Cart</button>
            <Toaster/>
        </div>
    )
}