"use client"

import { createContext, useState } from "react"

export const ProductCtx = createContext()


export default function Provider({children}){
    const [cartItem,setCartItem]= useState([])
    return(
        <ProductCtx.Provider value={{cartItem,setCartItem}}>
        {children}
        </ProductCtx.Provider>
    )
}