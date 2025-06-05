// APK Details Page
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import apks from "@/data/apksData";

export default function ApkDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const apk = apks.find(a => a.slug === slug);

  if (!apk) {
    return (
      <Layout title="APK Not Found">
        <div className="text-center py-20 text-gray-500">App not found.</div>
      </Layout>
    );
  }

  return (
    <Layout title={apk.name}>
      {/* AdSense Placeholder: Top of Page */}
      <div className="flex justify-center mb-4 px-2">
        <div className="w-full max-w-xs sm:max-w-lg md:max-w-3xl h-12 sm:h-16 bg-gray-200 text-gray-500 rounded flex items-center justify-center mb-2 text-xs sm:text-base">AdSense Banner Placeholder (728x90)</div>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{apk.name}</h1>
      {/* App Description (Expanded) */}
      <p className="mb-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line">
        {apk.description}
      </p>
      {/* Development Story */}
      {apk.developmentStory && (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Development Story</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base whitespace-pre-line">{apk.developmentStory}</p>
        </>
      )}
      {/* Installation Instructions */}
      {apk.installation && (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Installation Instructions</h2>
          <pre className="mb-6 bg-gray-50 dark:bg-[#232323] rounded p-4 text-xs sm:text-base whitespace-pre-line border border-gray-200 dark:border-[#232323]">{apk.installation}</pre>
        </>
      )}
      {/* Key Features */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc pl-4 sm:pl-6 mb-6 text-sm sm:text-base">
        {(apk.features || []).map((f, i) => (
          typeof f === 'string' ? <li key={i}>{f}</li> : <li key={i} className="mb-2"><span className="font-semibold">{f.title}:</span> {f.explanation}</li>
        ))}
      </ul>
      {/* Screenshot Gallery */}
      {apk.screenshots && apk.screenshots.length > 0 && (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Screenshot Gallery</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {apk.screenshots.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={s.src} alt={s.caption || s.alt || apk.name} className="rounded shadow border mb-2 w-full max-w-[220px] sm:max-w-xs object-cover" />
                <span className="text-xs text-gray-500 text-center">{s.caption || s.alt}</span>
              </div>
            ))}
          </div>
        </>
      )}
      {/* Version History */}
      {apk.versionHistory && apk.versionHistory.length > 0 && (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Version History</h2>
          <ul className="list-disc pl-4 sm:pl-6 mb-6 text-xs sm:text-base">
            {apk.versionHistory.map((v, i) => (
              <li key={i} className="mb-2">
                <span className="font-semibold">{v.version}</span> ({v.date}):
                <ul className="list-disc pl-4">
                  {v.changes.map((c, j) => <li key={j}>{c}</li>)}
                </ul>
                {v.apkUrl && (
                  <a href={v.apkUrl} download className="text-blue-600 underline ml-2 text-xs">Download</a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
      {/* AdSense Placeholder: Above Download Button */}
      <div className="flex justify-center mb-4 px-2">
        <div className="w-full max-w-xs sm:max-w-lg md:max-w-lg h-16 sm:h-24 bg-gray-200 text-gray-500 rounded flex items-center justify-center mb-2 text-xs sm:text-base">AdSense Large Rectangle (336x280)</div>
      </div>
      <div className="flex flex-col items-center mb-8 px-2">
        {apk.apkFile ? (
          <a
            href={apk.apkFile}
            download
            className="bg-blue-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg shadow hover:bg-blue-700 transition mb-2 w-full max-w-xs sm:max-w-md text-center"
          >
            Download APK
          </a>
        ) : (
          <button
            disabled
            className="bg-gray-400 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg shadow mb-2 w-full max-w-xs sm:max-w-md text-center cursor-not-allowed opacity-80"
          >
            Coming Soon!
          </button>
        )}
        <span className="text-xs text-gray-500">{apk.apkFile ? 'Latest version. Safe & direct download.' : 'Download will be available soon.'}</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">Changelog</h2>
      <ul className="list-disc pl-4 sm:pl-6 mb-6 text-xs sm:text-base">
        {(apk.changelog || (apk.versionHistory && apk.versionHistory[0]?.changes) || []).map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">User Reviews</h2>
      <div className="mb-8">
        {apk.reviews && apk.reviews.length > 0 ? (
          apk.reviews.map((r, i) => (
            <div key={i} className="mb-4 p-4 bg-gray-50 dark:bg-[#232323] rounded shadow text-xs sm:text-base">
              <div className="font-semibold text-blue-700 dark:text-blue-400 mb-1">{r.user}</div>
              <div className="text-gray-700 dark:text-gray-300">{r.text}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No reviews yet.</div>
        )}
      </div>
      {/* AdSense Placeholder: Footer */}
      <div className="flex justify-center mt-8 px-2">
        <div className="w-full max-w-xs sm:max-w-lg md:max-w-3xl h-12 sm:h-16 bg-gray-200 text-gray-500 rounded flex items-center justify-center text-xs sm:text-base">AdSense Footer Placeholder (Responsive)</div>
      </div>
    </Layout>
  );
}
