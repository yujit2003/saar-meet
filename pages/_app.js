import "@/styles/globals.css";

import { SocketProvider } from "@/context/socket";
import { ClerkProvider } from "@clerk/clerk-react";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>

    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
    </ClerkProvider>
  );
}
