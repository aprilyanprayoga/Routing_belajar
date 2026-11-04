
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
    cartCount: number;
}

export default function Navbar({ cartCount }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <Link to="/" className="text-2xl font-bold text-black">
                    G4abinStore.
                </Link>

                <div className="flex items-center gap-8">
                    <Link
                        to="/"
                        className="font-medium text-gray-700 hover:text-black"
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="font-medium text-gray-700 hover:text-black"
                    >
                        Products
                    </Link>

                    <Link
                        to="/cart"
                        className="relative flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                    >
                        <ShoppingCart size={20} />
                        Cart

                        {cartCount > 0 && (
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-black">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

            </div>
        </nav>
    );
}
