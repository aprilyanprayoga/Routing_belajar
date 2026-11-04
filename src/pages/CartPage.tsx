
import type { CartItem } from "../types/types";
import { formatRupiah } from "../utils/FormatRupiah";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

interface CartPageProps {
    cartItems: CartItem[];
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}

export default function CartPage({
    cartItems,
    onIncrease,
    onDecrease,
    onRemove,
}: CartPageProps) {
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <section className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">
                Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
                <div className="py-20 text-center">
                    <ShoppingCart className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                    <h2 className="text-xl font-semibold text-gray-700">
                        Your cart is empty
                    </h2>
                    <p className="mt-2 text-gray-500">
                        You haven't added any products yet.
                    </p>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4 md:col-span-2">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 rounded-xl border border-gray-200 p-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-24 w-24 rounded-lg object-cover"
                                />

                                <div className="flex flex-1 flex-col justify-between">
                                    <div>
                                        <h2 className="font-semibold text-gray-900">
                                            {item.name}
                                        </h2>
                                        <p className="text-gray-500">
                                            {formatRupiah(item.price)}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => onDecrease(item.id)}
                                            className="rounded border p-1"
                                        >
                                            <Minus size={16} />
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() => onIncrease(item.id)}
                                            className="rounded border p-1"
                                        >
                                            <Plus size={16} />
                                        </button>

                                        <button
                                            onClick={() => onRemove(item.id)}
                                            className="ml-auto text-red-500"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-fit rounded-xl border border-gray-200 p-6">
                        <h2 className="mb-4 text-xl font-semibold">
                            Order Summary
                        </h2>

                        <div className="flex justify-between border-t py-4">
                            <span>Total</span>
                            <span className="font-bold">
                                {formatRupiah(total)}
                            </span>
                        </div>

                        <button
                            className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
