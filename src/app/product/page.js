import Productcard from "@/components/ProductCard";


export default function Page(){
    return(
        <div className="my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
       <Productcard/>
       <Productcard/>
       <Productcard/>
       <Productcard/>
       <Productcard/>
       <Productcard/>
       <Productcard/>
       <Productcard/>
        </div>
    )
}