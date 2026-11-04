
import ProductGrid from "../components/ProductList";
import type { Product } from "../data/product";

interface ProductPageProps {
    products: Product[];
    onViewDetail: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

export default function ProductPage({
    products,
    onViewDetail,
    onAddToCart,
}: ProductPageProps) {
    return (
        <main>
            <ProductGrid
                products={products}
                onViewDetail={onViewDetail}
                onAddToCart={onAddToCart}
            />
        </main>
    );
}
