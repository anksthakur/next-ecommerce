
// import ShareBtn from "@/components/shareBtn";
import Productcard from "@/components/ProductCard";
import { getProducts } from "@/services/product";
import Link from "next/link";


export default async function Home  () {
const products = await getProducts(5)
  return (
    <main >
      {/* Banner */}
      <div className="bg-gray-400 h-72">
        <h1 className="text-white text-center text-5xl font bold pt-20"><span className="text-orange-400">Bharat</span> m<span className="text-blue-700">os</span>t <span className="text-green-600">Loved</span> brand</h1>
      </div>
      {/* cards */}
      <div className="m-4 flex flex-wrap gap-2">
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
          </div>
          <Link href="/product" className="inline-block text-orange-400 p-4 font-bold hover:underline">View All </Link>
    </main>
  );
}
