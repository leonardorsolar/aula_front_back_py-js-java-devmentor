import { Product } from "@/app/types/product";

type ProductCardProps = {
  product: Product;
  imageUrl: string;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({
  product,
  imageUrl,
  onAddToCart
}: ProductCardProps) {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 8
      }}
    >
      <img
        src={imageUrl}
        style={{
          width: "100%",
          height: 200,
          objectFit: "cover"
        }}
      />

      <h3>{product.name}</h3>

      <p style={{ fontWeight: "bold" }}>R$ {product.price.toFixed(2)}</p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          background: "#ffd814",
          border: "none",
          padding: 10,
          width: "100%",
          cursor: "pointer"
        }}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
