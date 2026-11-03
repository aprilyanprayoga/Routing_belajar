import type { Product } from "../data/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
    onViewDetail: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

export default function ProductList({
    products,
    onViewDetail,
    onAddToCart,
}: ProductListProps) {
    return (
        <section id="products" className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Our Products
                </h2>

                <p className="mt-3 text-gray-500">
                    Discover our latest collection of amazing products.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetail={onViewDetail}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>

            {products.length === 0 && (
                <p className="py-10 text-center text-gray-500">
                    No products available.
                </p>
            )}
        </section>
    );
}
