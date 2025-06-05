import Layout from "@/components/Layout";
import Link from "next/link";

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
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example featured APK cards */}
          <div className="bg-white dark:bg-[#232323] rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded mb-2" />
            <h2 className="font-semibold text-lg mb-1">GameX Pro</h2>
            <p className="text-sm text-gray-500 mb-2">Action Game</p>
            <Link
              href="/apks/gamex-pro"
              className="text-blue-600 font-medium hover:underline"
            >
              View Details
            </Link>
          </div>
          <div className="bg-white dark:bg-[#232323] rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded mb-2" />
            <h2 className="font-semibold text-lg mb-1">ToolMaster</h2>
            <p className="text-sm text-gray-500 mb-2">Utility Tool</p>
            <Link
              href="/apks/toolmaster"
              className="text-blue-600 font-medium hover:underline"
            >
              View Details
            </Link>
          </div>
          <div className="bg-white dark:bg-[#232323] rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded mb-2" />
            <h2 className="font-semibold text-lg mb-1">ChatNow</h2>
            <p className="text-sm text-gray-500 mb-2">Social App</p>
            <Link
              href="/apks/chatnow"
              className="text-blue-600 font-medium hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
