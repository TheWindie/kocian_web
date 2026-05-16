import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  const { items } = await req.json();
  if (!items?.length) return NextResponse.json({ error: 'Empty cart' }, { status: 400 });

  const line_items = items.map((item: any) => ({
    price_data: {
      currency: 'czk',
      product_data: { name: item.name },
      unit_amount: item.price * 100, // Stripe expects haléře
    },
    quantity: item.qty,
  }));

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/kontakt?platba=uspesna`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/kosik`,
  });

  return NextResponse.json({ url: session.url! });
}
