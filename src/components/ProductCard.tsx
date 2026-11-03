
import { ShoppingCart, Eye } from "lucide-react";
import type { Product } from "../data/product";
import { formatRupiah } from "../utils/FormatRupiah";

interface ProductCardProps {
    product: Product;
    onViewDetail: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({
    product,
    onViewDetail,
    onAddToCart,
}: ProductCardProps) {
    return (
        <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow">
                    {product.category}
                </span>
            </div>

            <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {product.name}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                </p>

                <p className="mb-4 text-xl font-bold text-black">
                    {formatRupiah(product.price)}
                </p>

                <div className="flex gap-2">
                    <button
                        onClick={() => onViewDetail(product)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        <Eye size={17} />
                        Detail
                    </button>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-black px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        <ShoppingCart size={17} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
