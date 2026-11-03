
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import type { CartItem } from "../types/types";
import { formatRupiah } from "../utils/FormatRupiah";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "./ui/sheet";

interface CartDrawerProps {
    isOpen: boolean;
    cartItems: CartItem[];
    onClose: () => void;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
}

export default function CartDrawer({
    isOpen,
    cartItems,
    onClose,
    onIncrease,
    onDecrease,
}: CartDrawerProps) {
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <SheetContent className="flex w-full flex-col sm:max-w-md">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2 text-xl">
                        <ShoppingCart size={22} />
                        Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                    </SheetTitle>
                    <SheetDescription>
                        Review your shopping items.
                    </SheetDescription>
                </SheetHeader>

                <div className="flex-1 space-y-4 overflow-y-auto py-4">
                    {cartItems.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <ShoppingCart size={48} className="mb-4 text-gray-300" />
                            <p className="font-semibold text-gray-700">
                                Your cart is empty
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Add some products to get started.
                            </p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 border-b pb-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-20 w-20 rounded-lg object-cover"
                                />

                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-gray-900">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-black">
                                        {formatRupiah(item.price)}
                                    </p>

                                    <div className="mt-3 flex items-center gap-3">
                                        <button
                                            onClick={() => onDecrease(item.id)}
                                            className="rounded-md border p-1 hover:bg-gray-100"
                                            aria-label="Decrease quantity"
                                        >
                                            {item.quantity === 1 ? (
                                                <Trash2 size={16} />
                                            ) : (
                                                <Minus size={16} />
                                            )}
                                        </button>

                                        <span className="text-sm font-medium">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => onIncrease(item.id)}
                                            className="rounded-md border p-1 hover:bg-gray-100"
                                            aria-label="Increase quantity"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="space-y-4 border-t pt-4">
                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-black">
                            {formatRupiah(total)}
                        </span>
                    </div>

                    <button
                        disabled={cartItems.length === 0}
                        className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Checkout
                    </button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
