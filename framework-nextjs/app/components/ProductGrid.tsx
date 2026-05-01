import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/types/product";

type ProductGridProps = {
  products: Product[];
  fallbackImages: string[];
  onAddToCart: (product: Product) => void;
};

export default function ProductGrid({
  products,
  fallbackImages,
  onAddToCart
}: ProductGridProps) {
  return (
    <section style={{ padding: 30 }}>
      <h2>Produtos</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: 20
        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            imageUrl={fallbackImages[index % fallbackImages.length]}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
