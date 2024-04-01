import Stripe from "stripe";

export const getProducts = async (limit) => {
    const stripe = Stripe(process.env.STRIPE_SK);
    const products = await stripe.products.list({
      limit: limit || 6
    });
    console.log(JSON.stringify(products,null,2));
    return products;
};

