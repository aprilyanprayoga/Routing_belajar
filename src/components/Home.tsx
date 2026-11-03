
export default function Hero() {
    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-gradient-to-r from-black-600 to-black px-6 py-24 text-center text-white">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
                    Welcome to G4binStore
                </h1>

                <p className="mb-8 text-lg text-white md:text-xl">
                    Discover amazing products at the best prices.
                    Find everything you need in one place.
                </p>

                <button
                    onClick={scrollToProducts}
                    className="rounded-lg bg-white px-7 py-3 font-semibold text-black shadow-lg transition hover:-translate-y-1 hover:bg-gray-100"
                >
                    Explore Products
                </button>
            </div>
        </section>
    );
}
