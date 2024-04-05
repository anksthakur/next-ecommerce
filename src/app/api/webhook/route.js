// import { stripe } from "@/utils/stripe";
// import { revalidatePath } from "next/cache";

// export async function POST(req,res){
// const body = await req.text()
// const sig = req.headers.get('stripe-signature')
// const webhookSecret = process.env.WEBHOOK_SECRET
// let event;

//   try {
//     event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
//   } catch (err) {
//    console.log("ERROR Message",err.message)
//     return res.json({error:`webhook error:${err.message}`},{status:400});
//   }
//   if(event.type == 'product.created'|| event.type == 'product.updated'){
//     console.log('event.type',event.type)
//     revalidatePath('/product','page')
//   }else{
//     console.log(`Unhandled event type ${event.type}`);
//   }
//   return res.json({message:'success'})
// }
