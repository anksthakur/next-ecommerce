import { formatAmount } from "@/utils/stripe";
import Link from "next/link";

export default function Productcard({item}){
    return(
            <Link href={`/product/${item.id}`} className="w-full sm:w-60 h-70 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl">
        <img src={item.images[0]} alt={item.name} className="w-full h-55 "/>
        <div className="flex justify-between p-2">
          <div>
            <h1 className="font-bold">{item.name}</h1>
            <p className="w-40 truncate">{item.description}</p>
            </div>
            <div className="text-green-500 py-2 font-bold">
              {formatAmount(item.default_price.unit_amount)}
            </div>
            </div>
            </Link>     
    )
}
// import Link from "next/link";

// export default function ProductCard({ item }) {
//   return (
//     <Link href={`/product/p1 ${item.id}`}>
//       <a className="w-full sm:w-60 h-70 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl">
//         <img src={item.images[0]} className="w-full h-55" alt={item.name} />
//         <div className="flex justify-between p-2">
//           <div>
//             <h1 className="font-bold">{item.name}</h1>
//             <p className="w-40 truncate">{item.description}</p>
//           </div>
//           <div className="text-green-500 py-2 font-bold">2000</div>
//         </div>
//       </a>
//     </Link>
//   );
// }
