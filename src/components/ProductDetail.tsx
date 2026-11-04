
import type { Product } from "../data/product";
import { formatRupiah } from "../utils/FormatRupiah";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}

export default function ProductModal({
    product,
    onClose,
    onAddToCart,
}: ProductModalProps) {
    return (
        <Dialog
            open={!!product}
            onOpenChange={(open) => {
                if (!open) onClose();
            }}
        >
            {product && (
                <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            {product.name}
                        </DialogTitle>

                        <DialogDescription>
                            {product.category}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-64 w-full rounded-lg object-cover"
                        />

                        <p className="text-sm leading-relaxed text-gray-600">
                            {product.description}
                        </p>

                        <p className="text-2xl font-bold text-black">
                            {formatRupiah(product.price)}
                        </p>

                        <button
                            onClick={() => {
                                onAddToCart(product);
                                onClose();
                            }}
                            className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Add to Cart
                        </button>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    );
}
