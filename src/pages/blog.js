// Blog Listing Page
import Layout from "@/components/Layout";
import Link from "next/link";


const blogPosts = [
  {
    slug: "android-apk-safety-guide",
    title: "How to Safely Download and Install APKs on Android",
    date: "2024-06-01",
    excerpt: "Learn the safest ways to download and install APK files on your Android device, avoid malware, and protect your privacy.",
  },
  {
    slug: "optimize-android-performance",
    title: "10 Tips to Optimize Your Android Phone's Performance",
    date: "2024-06-02",
    excerpt: "Boost your Android device's speed and battery life with these expert optimization tips.",
  },
  {
    slug: "apk-vs-playstore",
    title: "APK vs Google Play Store: Pros, Cons, and Safety",
    date: "2024-06-03",
    excerpt: "Should you use APKs or stick to the Play Store? We break down the pros, cons, and safety considerations.",
  },
  {
    slug: "android-app-permissions-explained",
    title: "Android App Permissions Explained: What You Need to Know",
    date: "2024-06-04",
    excerpt: "Understand Android app permissions, how to manage them, and keep your data secure.",
  },
  {
    slug: "troubleshoot-apk-install-errors",
    title: "Troubleshooting APK Install Errors on Android",
    date: "2024-06-05",
    excerpt: "Common APK installation errors and how to fix them quickly.",
  },
  {
    slug: "best-free-android-apps-2024",
    title: "Best Free Android Apps of 2024: Our Top Picks",
    date: "2024-06-06",
    excerpt: "Discover the best free Android apps for productivity, entertainment, and more in 2024.",
  },
  {
    slug: "android-security-tips",
    title: "Essential Android Security Tips for Every User",
    date: "2024-06-07",
    excerpt: "Protect your Android device from threats with these essential security tips.",
  },
  {
    slug: "how-to-backup-android-data",
    title: "How to Back Up Your Android Data Safely",
    date: "2024-06-08",
    excerpt: "Step-by-step guide to backing up your Android phone's data securely.",
  },
  {
    slug: "install-apk-on-fire-tv",
    title: "How to Install APKs on Amazon Fire TV and Fire Stick",
    date: "2024-06-09",
    excerpt: "A complete guide to sideloading APKs on Fire TV and Fire Stick devices.",
  },
  {
    slug: "android-app-updates-manual",
    title: "How to Manually Update Android Apps Using APKs",
    date: "2024-06-10",
    excerpt: "Learn how to update your Android apps manually with APK files when Play Store updates aren't available.",
  },
  {
    slug: "android-battery-saving-tips",
    title: "15 Proven Tips to Save Battery Life on Android",
    date: "2024-06-11",
    excerpt: "Maximize your Android phone's battery life with these practical tips and tricks.",
  },
  {
    slug: "android-privacy-settings-guide",
    title: "The Ultimate Guide to Android Privacy Settings",
    date: "2024-06-12",
    excerpt: "Take control of your privacy on Android with this comprehensive settings guide.",
  },
  {
    slug: "android-apps-for-students",
    title: "Top 10 Android Apps Every Student Should Have",
    date: "2024-06-13",
    excerpt: "Boost your productivity and learning with these must-have Android apps for students.",
  },
  {
    slug: "android-file-management",
    title: "Mastering File Management on Android Devices",
    date: "2024-06-14",
    excerpt: "Organize, transfer, and manage files like a pro on your Android device.",
  },
  {
    slug: "android-security-apps-review",
    title: "Best Android Security Apps Reviewed (2024)",
    date: "2024-06-15",
    excerpt: "A detailed review of the top security apps to keep your Android device safe in 2024.",
  },
  {
    slug: "android-customization-tips",
    title: "How to Customize Your Android Phone Like a Pro",
    date: "2024-06-16",
    excerpt: "Personalize your Android experience with these advanced customization tips.",
  },
  {
    slug: "android-apps-for-productivity",
    title: "Best Productivity Apps for Android in 2024",
    date: "2024-06-17",
    excerpt: "Get more done with these top-rated productivity apps for Android.",
  },
  {
    slug: "android-gaming-optimization",
    title: "How to Optimize Your Android Device for Gaming",
    date: "2024-06-18",
    excerpt: "Enhance your mobile gaming experience with these optimization strategies.",
  },
  {
    slug: "android-data-recovery-guide",
    title: "Android Data Recovery: How to Restore Lost Files",
    date: "2024-06-19",
    excerpt: "Lost files on Android? Learn how to recover your data safely and easily.",
  },
  {
    slug: "android-apps-for-parents",
    title: "Best Android Apps for Parents and Families",
    date: "2024-06-20",
    excerpt: "Keep your family safe and organized with these essential Android apps.",
  },
  {
    slug: "android-automation-apps",
    title: "Top Automation Apps to Simplify Your Android Life",
    date: "2024-06-21",
    excerpt: "Automate tasks and routines on Android with these powerful apps.",
  },
  {
    slug: "android-widgets-guide",
    title: "The Complete Guide to Android Widgets",
    date: "2024-06-22",
    excerpt: "Make the most of Android widgets for productivity and style.",
  },
  {
    slug: "android-apps-for-creators",
    title: "Must-Have Android Apps for Content Creators",
    date: "2024-06-23",
    excerpt: "Create, edit, and share content on the go with these Android apps.",
  },
  {
    slug: "android-apps-for-health",
    title: "Top Health & Fitness Apps for Android in 2024",
    date: "2024-06-24",
    excerpt: "Stay healthy and fit with these top-rated Android health apps.",
  },
  {
    slug: "android-apps-for-travel",
    title: "Best Android Apps for Travelers",
    date: "2024-06-25",
    excerpt: "Plan, navigate, and enjoy your trips with these travel apps for Android.",
  },
  {
    slug: "android-apps-for-business",
    title: "Essential Android Apps for Business Professionals",
    date: "2024-06-26",
    excerpt: "Boost your business productivity with these must-have Android apps.",
  },
  {
    slug: "android-apps-for-photography",
    title: "Best Photography Apps for Android in 2024",
    date: "2024-06-27",
    excerpt: "Capture and edit stunning photos with these Android photography apps.",
  },
  {
    slug: "android-apps-for-music",
    title: "Top Music & Audio Apps for Android",
    date: "2024-06-28",
    excerpt: "Discover, stream, and create music with these Android apps.",
  },
  {
    slug: "android-apps-for-coding",
    title: "Best Android Apps for Coding and Programming",
    date: "2024-06-29",
    excerpt: "Learn and practice coding on the go with these Android programming apps.",
  },
  {
    slug: "android-apps-for-remote-work",
    title: "Top Android Apps for Remote Work in 2024",
    date: "2024-06-30",
    excerpt: "Work from anywhere with these essential Android apps for remote professionals.",
  },
  {
    slug: "android-apps-for-organization",
    title: "Best Organization & Planning Apps for Android",
    date: "2024-07-01",
    excerpt: "Stay organized and plan your life with these Android apps.",
  },
  {
    slug: "android-apps-for-communication",
    title: "Top Communication Apps for Android",
    date: "2024-07-02",
    excerpt: "Connect and collaborate with these Android communication apps.",
  },
  {
    slug: "android-apps-for-education",
    title: "Best Educational Apps for Android in 2024",
    date: "2024-07-03",
    excerpt: "Learn new skills and subjects with these Android educational apps.",
  },
  {
    slug: "android-apps-for-security",
    title: "Top Security & Privacy Apps for Android",
    date: "2024-07-04",
    excerpt: "Protect your device and data with these Android security apps.",
  },
  {
    slug: "android-apps-for-shopping",
    title: "Best Shopping Apps for Android in 2024",
    date: "2024-07-05",
    excerpt: "Shop smarter and save money with these Android shopping apps.",
  },
  {
    slug: "android-apps-for-weather",
    title: "Top Weather Apps for Android",
    date: "2024-07-06",
    excerpt: "Stay informed about the weather with these Android weather apps.",
  },
  {
    slug: "android-apps-for-finance",
    title: "Best Finance & Budgeting Apps for Android",
    date: "2024-07-07",
    excerpt: "Manage your money and budget with these Android finance apps.",
  },
  {
    slug: "android-apps-for-news",
    title: "Top News Apps for Android in 2024",
    date: "2024-07-08",
    excerpt: "Stay updated with the latest news using these Android news apps.",
  },
  {
    slug: "android-apps-for-utilities",
    title: "Best Utility Apps for Android",
    date: "2024-07-09",
    excerpt: "Enhance your Android device with these essential utility apps.",
  },
  {
    slug: "android-apps-for-children",
    title: "Top Android Apps for Children and Kids",
    date: "2024-07-10",
    excerpt: "Safe and fun Android apps for children and young users.",
  }
];

export default function Blog() {
  return (
    <Layout title="Android Blog & Guides">
      <h1 className="text-3xl font-bold mb-6">Android Blog & Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.slug} className="bg-white dark:bg-[#232323] rounded-xl shadow border border-gray-100 dark:border-[#232323] p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{post.title}</h2>
            <div className="text-xs text-gray-500 mb-2">{post.date}</div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-auto text-blue-600 hover:underline font-semibold text-sm">Read More</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
