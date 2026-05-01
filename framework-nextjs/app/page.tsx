"use client";

import { useEffect, useState } from "react";
import CartModal from "@/app/components/CartModal";
import Header from "@/app/components/Header";
import ProductGrid from "@/app/components/ProductGrid";
import SuccessView from "@/app/components/SuccessView";
import { Product } from "@/app/types/product";

const fallbackImages = [
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
  "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600",
  "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  function addToCart(product: Product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  function removeItem(index: number) {
    setCart((currentCart) => currentCart.filter((_, i) => i !== index));
  }

  async function checkout() {
    const total = cart.reduce((s, p) => s + p.price, 0);

    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ total })
    });

    setCart([]);
    setShowCart(false);
    setSuccess(true);
  }

  const total = cart.reduce((s, p) => s + p.price, 0);

  if (success) {
    return <SuccessView onContinue={() => setSuccess(false)} />;
  }

  return (
    <main style={{ background: "#eaeded", minHeight: "100vh" }}>
      <Header cartCount={cart.length} onOpenCart={() => setShowCart(true)} />

      <ProductGrid
        products={products}
        fallbackImages={fallbackImages}
        onAddToCart={addToCart}
      />

      {showCart && (
        <CartModal
          cart={cart}
          total={total}
          onRemoveItem={removeItem}
          onCheckout={checkout}
          onClose={() => setShowCart(false)}
        />
      )}
    </main>
  );
}