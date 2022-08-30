import { APIGatewayEvent } from "aws-lambda";
import { Stripe } from "stripe";
import { handler } from "utils";

export const main = handler(async (event: APIGatewayEvent) => {
  const { storage, source } = JSON.parse(event.body ?? "");
  const amount = storage * 10;
  const description = "Scratch charge";

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2022-08-01",
  });

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });

  return { status: true };
});
