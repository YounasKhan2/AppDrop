import Layout from "@/components/Layout";
import Link from "next/link";
import apks from "@/data/apksData";

export default function Home() {
  return (
    <Layout title="Home">
      <section className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          Discover & Download the Best APKs
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-xl mb-4">
          Safe, fast, and free APK downloads. Explore top apps and games, updated
          daily.
        </p>
        {/* Search Bar */}
        <form className="w-full max-w-md flex mb-6">
          <input
            type="text"
            placeholder="Search APKs..."
            className="flex-1 px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-r font-semibold hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
        {/* Featured APKs */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {apks.map((apk) => (
            <div
              key={apk.slug}
              className="group relative bg-white dark:bg-[#232323] rounded-2xl shadow-xl border border-gray-100 dark:border-[#232323] p-0 flex flex-col items-stretch overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative w-full h-40 bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-[#232323] dark:to-[#181818] flex items-center justify-center">
                <img
                  src={apk.screenshots[0]?.src}
                  alt={apk.name}
                  className="w-24 h-24 object-cover rounded-xl shadow-lg border-4 border-white dark:border-[#232323] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 flex flex-col px-5 pt-16 pb-6">
                <h2 className="font-bold text-xl mb-1 text-center text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                  {apk.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center line-clamp-2">
                  {apk.features[0]?.explanation || "App"}
                </p>
                <Link
                  href={`/apks/${apk.slug}`}
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-center transition w-full block shadow group-hover:shadow-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
