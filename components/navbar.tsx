'use client';

import Link from "next/link";
import {
  UserButton,
  SignInButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/components/cart-provider";

export function Navbar() {
  const { totalItems } = useShoppingCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            SNKRS
          </Link>
          <div className="space-x-4">
            <Link href="/shop" className="text-gray-700 hover:text-purple-600">
              Shop
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-purple-600">
              Help
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-purple-600">
              FAQ
            </Link>
            <Link
              href="/compare"
              className="text-gray-700 hover:text-purple-600"
            >
              Compare
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link href="/cart">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                  {totalItems > 0 && (
                    <span className="absolute ml-4 mb-5 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
              <UserButton />
              {/* <Button variant="outline" onClick={signOut}>Sign Out</Button> */}
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
