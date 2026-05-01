import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import "./styles.css";

const BACKEND_URLS = {
  node: "http://localhost:3000",
  java: "http://localhost:8080/api",
  python: "http://localhost:4000",
};

const MOCK_PRODUCTS = [
  { id: 1, name: "Teclado Mecânico RGB", price: 349.9 },
  { id: 2, name: 'Monitor 4K UltraWide 32"', price: 2199.0 },
  { id: 3, name: "SSD NVMe 1TB", price: 499.9 },
  { id: 4, name: "Fone Noise Cancelling", price: 899.0 },
];

async function loadProducts(selectedBackend) {
  const apiUrl = BACKEND_URLS[selectedBackend];
  const res = await fetch(`${apiUrl}/products`);
  if (!res.ok) throw new Error("Falha ao carregar produtos");
  return res.json();
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [success, setSuccess] = useState(false);
  const [backend, setBackend] = useState(
    () => localStorage.getItem("backend") || "node"
  );

  useEffect(() => {
    let cancelled = false;
    loadProducts(backend)
      .then((data) => { if (!cancelled) { setProducts(data); setLoading(false); } })
      .catch(() => { if (!cancelled) { setProducts(MOCK_PRODUCTS); setLoading(false); } });
    return () => { cancelled = true; };
  }, [backend]);

  function switchBackend(b) {
    localStorage.setItem("backend", b);
    setLoading(true);
    setBackend(b);
  }

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeItem(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function checkout() {
    if (cart.length === 0) return;
    const apiUrl = BACKEND_URLS[backend];
    const total = cart.reduce((s, i) => s + i.price, 0);
    fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total }),
    }).catch(() => {});
    setCart([]);
    setShowCart(false);
    setSuccess(true);
  }

  function handleContinue() {
    setSuccess(false);
    setLoading(true);
    loadProducts(backend)
      .then(setProducts)
      .catch(() => setProducts(MOCK_PRODUCTS))
      .finally(() => setLoading(false));
  }

  const total = cart.reduce((s, i) => s + i.price, 0);

  if (success) {
    return (
      <>
        <Header
          cartCount={0}
          onOpenCart={() => {}}
          backend={backend}
          onSwitchBackend={switchBackend}
        />
        <main>
          <div className="success-screen">
            <h2>✓ Pedido confirmado!</h2>
            <p>Obrigado pela sua compra. Você receberá um e-mail de confirmação.</p>
            <button className="btn-back" onClick={handleContinue}>
              Continuar comprando
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header
        cartCount={cart.length}
        onOpenCart={() => setShowCart(true)}
        backend={backend}
        onSwitchBackend={switchBackend}
      />

      <main>
        <h1 className="page-title">Resultados</h1>

        {loading ? (
          <div className="loading-grid">
            {[1, 2, 3, 4].map((n) => (
              <div className="skeleton" key={n}>
                <div className="skeleton-img"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line" style={{ width: "60%" }}></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="products-grid">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onAdd={addToCart} />
            ))}
          </div>
        )}
      </main>

      {showCart && (
        <CartModal
          cart={cart}
          total={total}
          onClose={() => setShowCart(false)}
          onRemove={removeItem}
          onCheckout={checkout}
        />
      )}
    </>
  );
}
