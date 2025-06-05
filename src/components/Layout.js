// Layout component with navigation and AdSense placeholder
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-[#181818] dark:via-[#232323] dark:to-[#181818] text-foreground">
      <header className="py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between shadow-lg bg-white/80 dark:bg-[#181818]/90 backdrop-blur-md sticky top-0 z-30 border-b border-gray-200 dark:border-[#232323] gap-2 sm:gap-0">
        <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400 flex items-center gap-2">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#2563EB"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          APKDrop
        </Link>
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-base font-medium justify-center">
          <Link href="/apks" className="hover:text-blue-600 transition">APKs</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy</Link>
          <Link href="/disclaimer" className="hover:text-blue-600 transition">Disclaimer</Link>
          <Link href="/terms" className="hover:text-blue-600 transition">Terms</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <Link href="/categories" className="hover:text-blue-600 transition">Categories</Link>
        </nav>
      </header>
      {/* AdSense placeholder (top) */}
      <div className="flex justify-center py-2 px-2">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-[#232323] dark:to-[#181818] text-gray-500 rounded-xl w-full max-w-xs sm:max-w-lg md:max-w-2xl h-12 flex items-center justify-center shadow-inner border border-blue-100 dark:border-[#232323] text-xs sm:text-base">
          AdSense Banner Placeholder
        </div>
      </div>
      <main className="flex-1 w-full max-w-full sm:max-w-5xl mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-14">
        {children}
      </main>
      {/* AdSense placeholder (bottom) */}
      <div className="flex justify-center py-2 px-2">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-[#232323] dark:to-[#181818] text-gray-500 rounded-xl w-full max-w-xs sm:max-w-lg md:max-w-2xl h-12 flex items-center justify-center shadow-inner border border-blue-100 dark:border-[#232323] text-xs sm:text-base">
          AdSense Banner Placeholder
        </div>
      </div>
      <footer className="py-6 px-4 sm:px-6 text-center text-xs sm:text-sm text-gray-500 border-t border-gray-200 dark:border-[#232323] mt-8 bg-white/70 dark:bg-[#181818]/80 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} <span className="font-semibold text-blue-700 dark:text-blue-400">APKDrop</span>. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> &bull; <Link href="/terms" className="hover:underline">Terms</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
