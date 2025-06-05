// Category Listing Page
import Layout from "@/components/Layout";
import Link from "next/link";
import apks from "@/data/apksData";

// Example categories (expand as needed)
const categories = [
	{ slug: "productivity", name: "Productivity" },
	{ slug: "messaging", name: "Messaging" },
	{ slug: "entertainment", name: "Entertainment" },
	{ slug: "news", name: "News & Magazines" },
	{ slug: "finance", name: "Finance" },
];

export default function Categories() {
	return (
		<Layout title="App Categories">
			<nav className="mb-4 text-xs text-gray-500">
				<Link href="/" className="text-blue-600 hover:underline">
					Home
				</Link>{" "}
				&gt;{" "}
				<Link href="/categories" className="text-blue-600 hover:underline">
					Categories
				</Link>
			</nav>
			<h1 className="text-3xl font-bold mb-6">App Categories</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{categories.map((cat) => (
					<Link
						key={cat.slug}
						href={`/categories/${cat.slug}`}
						className="bg-white dark:bg-[#232323] rounded-xl shadow border border-gray-100 dark:border-[#232323] p-6 flex flex-col hover:shadow-lg transition"
					>
						<h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">
							{cat.name}
						</h2>
						<span className="text-xs text-gray-500">
							Explore {cat.name} apps
						</span>
					</Link>
				))}
			</div>
		</Layout>
	);
}
