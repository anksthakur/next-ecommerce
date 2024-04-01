import Addtocart from "@/components/AddToCart";
import ShareBtn from "@/components/shareBtn";

// import {CheckBadgeIcon} from '@heroicons/vue/24/solid'
export default function Page(){
    return (
        <div className="m-2 px-20">
            <div className="flex justify-around items-center flex-wrap">
                <div className="w-80 h-80">
                    <img src='/images/main.jpg' className="w-full h-auto"/>
                </div>
                <div className="flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white">
                    <h2 className="text-3xl font-semibold">Shirt
                    </h2>
                    <div className="flex pt-2  gap-2">
                        {/* <CheckBadgeIcon className="text-line-500 w-5 h-5"/> */}
                        <span className="font-semibold">In Stock</span>
                        <ShareBtn/>
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <p className="text-gray-500">Price:</p>
                        <p className="text-xl font-semibold">3000</p>
                    </div>
                    <Addtocart/>
                </div>
            </div>
            <p className="mt-8 text-2xl">This will contain product description</p>
        </div>
    )
}