import Link from "next/link";

export default function Productcard(){
    return(
            <Link href="/product/p1" className="w-full sm:w-60 h-70 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl">
        <img src="/images/main.jpg" className="w-full h-55 "/>
        <div className="flex justify-between p-2">
          <div>
            <h1 className="font-bold">shirt</h1>
            <p className="w-40 truncate">This is Description</p>
            </div>
            <div className="text-green-500 py-2 font-bold">
              2000
            </div>
            </div>
            </Link>
            
    )
}