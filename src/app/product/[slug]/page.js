import Addtocart from "@/components/AddToCart";
import ShareBtn from "@/components/shareBtn";
import { getProductbyId, getProducts } from "@/services/product";
import { formatAmount } from "@/utils/stripe";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = true


export async function generateMetadata({params:{slug}}){
    const product = await getProductbyId(slug)
    if(!product){
        notFound()
    }
    return{
        title:`thakur | ${product.name}`
    }
}

// import {CheckBadgeIcon} from '@heroicons/vue/24/solid'
export default async function Page({params:{slug}}){
    console.log("individual product page returned",slug)
const product = await getProductbyId(slug)
const clientProduct = {
    name:product.name,
    description:product.description,
    id:product.id,
    price:product.default_price.unit_amount,
    price_id:product.default_price.id,
    currency:'INR',
    image:product.images[0]
}

    return (
        <div className="m-2 px-20">
            <div className="flex justify-around items-center flex-wrap">
                <div className="w-80 h-80">
                    <Image src={product.images[0]} width={160} height={160} className="w-full h-auto"/>
                </div>
                <div className="flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white">
                    <h2 className="text-3xl font-semibold">{product.name}
                    </h2>
                    <div className="flex pt-2  gap-2">
                        {/* <CheckBadgeIcon className="text-line-500 w-5 h-5"/> */}
                        <span className="font-semibold">In Stock</span>
                        <ShareBtn/>
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <p className="text-gray-500">Price:</p>
                        <p className="text-xl font-semibold">{formatAmount(product.default_price.unit_amount)}</p>
                    </div>
                    <Addtocart product={clientProduct}/>
                </div>
            </div>
            <p className="mt-8 text-2xl">{product.description} </p>
        </div>
    )
}