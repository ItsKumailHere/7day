// TODO: To add Clerk authentication:
// 1. Import ClerkProvider from '@clerk/nextjs'
// 2. Wrap the entire app content with <ClerkProvider>
// 3. Follow Clerk's documentation for proper setup and configuration
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { ThemeProvider } from '@/components/theme-provider'
import { CartProvider } from "@/components/cart-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SNKRS",
  description: "Your ultimate destination for sneakers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <CartProvider>
            <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
              <Navbar />
              <main className="container mx-auto py-8 px-4">{children}</main>
            </div>
          </CartProvider>
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
