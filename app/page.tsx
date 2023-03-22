import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col gap-[10%] h-[72vh] mx-4 mt-[10%] items-center">
            <header>
                <h1 className="sm:text-center text-6xl font-bold">
                    The Future of Your Fitness is Yours to Shape.
                </h1>
            </header>

            <p className="text-3xl sm:text-center">
                Used by some of the world's greatest athletes, Ebazon enables
                you to reach your fitness goals with our state of the art, specialized fitness
                equipment.
            </p>

            <section className="flex flex-col sm:flex-row gap-4">
                <Link
                    className="bg-gray-500 text-white px-12 py-4 font-semibold text-lg rounded-full hover:underline"
                    href="/shop"
                >
                    Shop Now!{" "}
                </Link>
                <Link
                    className="bg-gray-800 text-white px-12 py-4 font-semibold text-lg rounded-full hover:underline"
                    href="/about"
                >
                    Learn More
                </Link>
            </section>
        </main>
    );
}
