// APK Listing Page
import Layout from "@/components/Layout";
import Link from "next/link";
import apks from "@/data/apksData";

export default function ApkListing() {
  return (
    <Layout title="APK Listing">
      <h1 className="text-3xl font-bold mb-6">All APKs</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {apks.map(apk => (
          <div key={apk.slug} className="group relative bg-white dark:bg-[#232323] rounded-2xl shadow-xl border border-gray-100 dark:border-[#232323] p-0 flex flex-col items-stretch overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl min-w-0">
            <div className="relative w-full h-32 sm:h-40 bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-[#232323] dark:to-[#181818] flex items-center justify-center">
              <img src={apk.screenshots[0].src} alt={apk.name} className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-xl shadow-lg border-4 border-white dark:border-[#232323] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex-1 flex flex-col px-3 sm:px-5 pt-12 sm:pt-16 pb-4 sm:pb-6">
              <h2 className="font-bold text-base sm:text-xl mb-1 text-center text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors truncate">{apk.name}</h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 text-center line-clamp-2">{apk.description.slice(0, 100)}...</p>
              <Link href={`/apks/${apk.slug}`} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-center transition w-full block shadow group-hover:shadow-lg text-xs sm:text-base">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
