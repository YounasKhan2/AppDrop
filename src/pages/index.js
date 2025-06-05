import Layout from "@/components/Layout";
import Link from "next/link";
import apks from "@/data/apksData";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [search, setSearch] = useState("");
  const filteredApks = apks.filter((apk) => {
    const q = search.toLowerCase();
    return (
      apk.name.toLowerCase().includes(q) ||
      apk.slug.toLowerCase().includes(q) ||
      (apk.description && apk.description.toLowerCase().includes(q)) ||
      (apk.features &&
        apk.features.some(
          (f) =>
            f.title.toLowerCase().includes(q) ||
            f.explanation.toLowerCase().includes(q)
        ))
    );
  });

  return (
    <Layout title="Home">
      <section className="flex flex-col items-center gap-6 sm:gap-8 px-2 w-full">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
          Discover & Download the Best APKs
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center max-w-xs sm:max-w-xl mb-4">
          Safe, fast, and free APK downloads. Explore top apps and games, updated
          daily.
        </p>
        {/* Search Bar */}
        <form
          className="w-full max-w-xs sm:max-w-md flex mb-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search APKs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 sm:px-4 sm:py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            aria-label="Search APKs"
            autoComplete="off"
          />
          <button
            type="submit"
            className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-r font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Search
          </button>
        </form>
        {/* Featured APKs */}
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {filteredApks.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-8">
              No apps found.
            </div>
          ) : (
            filteredApks.map((apk) => (
              <div
                key={apk.slug}
                className="group relative bg-white dark:bg-[#232323] rounded-2xl shadow-xl border border-gray-100 dark:border-[#232323] p-0 flex flex-col items-stretch overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl min-w-0"
              >
                <div className="relative w-full h-32 sm:h-40 bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-[#232323] dark:to-[#181818] flex items-center justify-center">
                  <Image
                    src={apk.screenshots[0]?.src}
                    alt={apk.name}
                    width={96}
                    height={96}
                    className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-xl shadow-lg border-4 border-white dark:border-[#232323] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 flex flex-col px-3 sm:px-5 pt-12 sm:pt-16 pb-4 sm:pb-6">
                  <h2 className="font-bold text-base sm:text-xl mb-1 text-center text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors truncate">
                    {apk.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 text-center line-clamp-2">
                    {apk.features[0]?.explanation || "App"}
                  </p>
                  <Link
                    href={`/apks/${apk.slug}`}
                    className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-center transition w-full block shadow group-hover:shadow-lg text-xs sm:text-base"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}
