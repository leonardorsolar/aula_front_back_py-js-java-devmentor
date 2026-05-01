import { useState } from "react";

const fallbackImages = [
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
  "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600",
  "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
];

export default function ProductCard({ product, index, onAdd }) {
  const [added, setAdded] = useState(false);
  const img = product.image_url || fallbackImages[index % fallbackImages.length];
  const reviews = 50 + ((product.id * 137) % 950);

  function handleAdd() {
    onAdd({ ...product, image: img });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="product-card">
      <img className="product-image" src={img} alt={product.name} loading="lazy" />
      <h3 className="product-title">{product.name}</h3>
      <div className="product-rating">
        {"★★★★"}
        <span>({reviews})</span>
      </div>
      <div className="product-price">
        <small>R$</small> {product.price.toFixed(2).replace(".", ",")}
      </div>
      <div className="prime-badge">
        <i className="fa-solid fa-check"></i> prime
      </div>
      <div className="delivery-info">Entrega GRÁTIS amanhã</div>
      <button className={`btn-add${added ? " added" : ""}`} onClick={handleAdd}>
        {added ? "Adicionado ✓" : "Adicionar ao carrinho"}
      </button>
    </div>
  );
}