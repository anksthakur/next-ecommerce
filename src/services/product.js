import Stripe from "stripe";

export const getProducts = async (limit) => {
  let product = {
    data:[]
  }
    try {
      const stripe = Stripe(process.env.STRIPE_SK);
     product = await stripe.products.list({
      limit: limit || 6 ,
      expand:['data.default_price']
    });
    // console.log("--------Products---------")
    // console.log(JSON.stringify(products,null,2));
    } catch (error) {
      console.log("error from stripe:",error)
    }
    return product;
};

export const getProductbyId = async (productId) => {
  let product = null
  try{
    const stripe = Stripe(process.env.STRIPE_SK);
     product = await stripe.products.retrieve(productId,{
      expand:['default_price']
    });
    // console.log("--------Product---------")
    // console.log(JSON.stringify(product,null,2));
  }catch(err){
    console.log("error from stripe:",err)
  }
  return product;
 
};

