
import { ShoppingCart } from "lucide-react";

interface NavbarProps {
    cartCount: number;
    onOpenCart: () => void;
}

export default function Navbar({
    cartCount,
    onOpenCart,
}: NavbarProps) {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#" className="text-2xl font-bold text-black">
                    G4abinStore<span className="text-gray-900">.</span>
                </a>
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#"
                        className="font-medium text-gray-700 transition hover:text-black"
                    >
                        Home
                    </a>

                    <a
                        href="#products"
                        className="font-medium text-gray-700 transition hover:text-black"
                    >
                        Products
                    </a>
                </div>

                {/* Cart Button */}
                <button
                    onClick={onOpenCart}
                    className="relative flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                    <ShoppingCart size={20} />
                    <span>Cart</span>

                    {cartCount > 0 && (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-black">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}
