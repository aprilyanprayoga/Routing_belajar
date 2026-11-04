
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section className="bg-gradient-to-r from-white to-black px-6 py-24 text-center text-white">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
                    Welcome to G4binStore.
                </h1>

                <p className="mb-8 text-lg text-white md:text-xl">
                    Discover amazing products at the best prices. Find everything you need in one place.
                </p>

                <Link
                    to="/products"
                    className="inline-block rounded-lg bg-white px-7 py-3 font-semibold text-black shadow-lg transition hover:-translate-y-1 hover:bg-gray-100"
                >
                    Explore Products
                </Link>
            </div>
        </section>
    );
}
