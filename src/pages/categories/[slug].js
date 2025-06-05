// Category Detail Page
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import apks from "@/data/apksData";

const categoryMap = {
  productivity: "Productivity",
  messaging: "Messaging",
  entertainment: "Entertainment",
  news: "News & Magazines",
  finance: "Finance"
};

// Example: assign categories to each app in apksData.js for real use
const apkCategories = {
  app1: ["finance", "productivity"],
  app2: ["messaging"],
  app3: ["entertainment"],
  app4: ["news"]
};

export default function CategoryDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const categoryName = categoryMap[slug];
  const filteredApks = apks.filter(apk => (apkCategories[apk.slug] || []).includes(slug));

  if (!categoryName) {
    return (
      <Layout title="Category Not Found">
        <div className="text-center py-20 text-gray-500">Category not found.</div>
      </Layout>
    );
  }

  return (
    <Layout title={categoryName + " Apps"}>
      <nav className="mb-4 text-xs text-gray-500">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; <Link href="/categories" className="text-blue-600 hover:underline">Categories</Link> &gt; {categoryName}
      </nav>
      <h1 className="text-3xl font-bold mb-6">{categoryName} Apps</h1>
      {filteredApks.length === 0 ? (
        <div className="text-gray-500">No apps found in this category.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredApks.map(apk => (
            <Link key={apk.slug} href={`/apks/${apk.slug}`} className="bg-white dark:bg-[#232323] rounded-xl shadow border border-gray-100 dark:border-[#232323] p-6 flex flex-col hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{apk.name}</h2>
              <span className="text-xs text-gray-500 mb-2">{apk.description.slice(0, 80)}...</span>
              <span className="mt-auto text-blue-600 hover:underline font-semibold text-sm">View Details</span>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
}
