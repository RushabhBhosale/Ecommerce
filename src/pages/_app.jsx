import AppLayout from "@/components/layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "use-shopping-cart";

export default function App({ Component, pageProps }) {

  const stripeKey = process.env.NEXT_PUBLICSTRIPE_PUBLISHABLE_KEY

  return (
    <CartProvider stripe={stripeKey} cartMode="checkout-session" currency="USD">
      <AppLayout>
        <Component {...pageProps} />
        <Toaster/>
      </AppLayout>
    </CartProvider>
  );
}
