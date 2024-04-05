import Productcard from "@/components/ProductCard";
import { getProducts } from "@/services/product";


export default async function Page(){
    console.log("All Product returned")
    const products = await getProducts()
    return(
        <div className="my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
       {products.data.map(item=> <Productcard key={item.id} item={item}/>)}
        </div>
    )
}