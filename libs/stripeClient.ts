import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromice: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromice) {
    stripePromice = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
    );
  }
  
  return stripePromice;
};