const apks = [
  {
    slug: "app1",
    name: "Expense Tracker Pro",
    description: `Expense Tracker Pro is your ultimate companion for managing personal finances with ease and confidence. Designed for individuals and families, this app empowers you to track expenses, monitor income, and set savings goals—all in a beautifully intuitive interface. Whether you're budgeting for daily needs or planning for the future, Expense Tracker Pro provides the tools and insights you need to take control of your money. With robust security, offline access, and detailed analytics, you can make smarter financial decisions and achieve your goals faster. No more guesswork—just clarity, control, and peace of mind.`,
    developmentStory: `Expense Tracker Pro was born out of a personal need for a simple yet powerful budgeting tool. Our team noticed that most finance apps were either too complex or lacked essential features for everyday users. We set out to create an app that balances simplicity with functionality, focusing on user feedback and real-world scenarios. After months of research, prototyping, and testing, we launched Expense Tracker Pro with a mission to help people everywhere build better financial habits.`,
    features: [
      "Add, edit, and delete expenses and income entries with ease.",
      "Categorize transactions for better organization.",
      "Visualize spending patterns with interactive charts and graphs.",
      "Set monthly budgets and savings goals.",
      "Secure data with local encryption and optional cloud backup.",
      "Export reports to CSV for tax or analysis purposes.",
      "Dark mode and customizable themes.",
      "No account required—your data stays private.",
      "Works offline; sync when online.",
      "Multi-device support coming soon."
    ],
    installation: `1. Download the APK file using the button below.\n2. Open your device's file manager and locate the downloaded APK.\n3. Tap the APK file to begin installation.\n4. If prompted, allow installation from unknown sources in your device settings.\n5. Once installed, open Expense Tracker Pro and start managing your finances!`,
    screenshots: [
      { src: "/apks/app1/homepage.jpg", alt: "Expense Tracker Pro - Homepage" },
      { src: "/apks/app1/expense.jpg", alt: "Expense Entry Screen" },
      { src: "/apks/app1/income.jpg", alt: "Income Entry Screen" },
      { src: "/apks/app1/login.jpg", alt: "Login Screen" },
      { src: "/apks/app1/settings.jpg", alt: "Settings Screen" },
      { src: "/apks/app1/signup.jpg", alt: "Signup Screen" }
    ],
    versionHistory: [
      {
        version: "1.0.0",
        date: "2025-05-01",
        changes: [
          "Initial release with core expense and income tracking features.",
          "Added charts, dark mode, and CSV export.",
          "Offline support and enhanced security."
        ],
        apkUrl: "/apks/app1/ExpenseTracker_v1.0.apk"
      }
    ],
    apkFile: "/apks/app1/ExpenseTracker_v1.0.apk",
  },
  {
    slug: "app2",
    name: "Chat App Messenger",
    description: `Chat App Messenger is a modern, secure, and fast messaging app built with Flutter. Stay connected with friends and family through real-time chat, group conversations, and media sharing. The app is designed for seamless communication with a clean interface and robust privacy features. Whether for personal or professional use, Chat App Messenger makes staying in touch easy and enjoyable.\n\nThe app was created to provide a reliable and user-friendly messaging experience. It focuses on speed, security, and simplicity, ensuring your conversations are always private and accessible.`,
    features: [
      {
        title: "Real-Time Messaging",
        explanation: "Send and receive messages instantly with push notifications."
      },
      {
        title: "Group Chats",
        explanation: "Create and join group conversations for easy collaboration."
      },
      {
        title: "Media Sharing",
        explanation: "Share photos, videos, and files securely with your contacts."
      },
      {
        title: "User Profiles",
        explanation: "Personalize your profile with avatars and status updates."
      },
      {
        title: "Secure & Private",
        explanation: "All messages are encrypted for your privacy and security."
      }
    ],
    screenshots: [
      { src: "/apks/app2/login.jpg", caption: "Login securely to your account." },
      { src: "/apks/app2/signup.jpg", caption: "Quick sign-up for new users." },
      { src: "/apks/app2/homepage.jpg", caption: "Main chat dashboard." },
      { src: "/apks/app2/chatscreen.jpg", caption: "Chat with friends in real time." },
      { src: "/apks/app2/profile.jpg", caption: "Customize your user profile." },
      { src: "/apks/app2/functionalities.jpg", caption: "Explore app functionalities." }
    ],
    changelog: [
      "v1.0.0 - Initial release with real-time chat, group messaging, media sharing, and secure login."
    ],
    apkFile: "/apks/app2/ChatApp_v1.0.apk",
  },
  {
  slug: "app3",
  name: "CineMovies",
  description: `CineMovies is a sleek and user-friendly movie streaming app that lets you watch the latest movies and timeless classics anytime, anywhere. Enjoy a vast library of films across genres, high-quality streaming, and personalized recommendations. CineMovies is designed for movie lovers who want a seamless and enjoyable viewing experience on their mobile devices.

The app was created to bring the cinema to your pocket, with a focus on fast streaming, intuitive navigation, and a beautiful interface. No subscription required to browse and discover movies!`,
  features: [
    {
      title: "Vast Movie Library",
      explanation: "Browse and stream thousands of movies from all genres and eras."
    },
    {
      title: "High-Quality Streaming",
      explanation: "Enjoy movies in HD with minimal buffering and adaptive quality."
    },
    {
      title: "Personalized Recommendations",
      explanation: "Get movie suggestions based on your watch history and preferences."
    },
    {
      title: "Watchlist & Favorites",
      explanation: "Save movies to your watchlist and mark your favorites for easy access."
    }
  ],
  screenshots: [
    { src: "/apks/app3/login.jpg", caption: "Login to access CineMovies." },
    { src: "/apks/app3/signup.jpg", caption: "Sign up and start streaming instantly." },
    { src: "/apks/app3/homepage.jpg", caption: "Discover trending and recommended movies." },
    { src: "/apks/app3/detail screen.jpg", caption: "View detailed info and trailers for each movie." },
    { src: "/apks/app3/profile.jpg", caption: "Manage your profile and watchlist." }
  ],
  changelog: [
    "v1.0.0 - Initial release with movie streaming, recommendations, and watchlist features."
  ],
  apkFile: null // Download not enabled yet
},
  {
    slug: "app4",
    name: "NewsApp",
    description: `NewsApp is a modern and intuitive news aggregator that brings you the latest headlines, trending stories, and in-depth articles from around the world. Stay informed with real-time updates, personalized categories, and a beautiful reading experience. NewsApp is designed for users who want to keep up with current events, technology, sports, entertainment, and more—all in one place.\n\nThe app was created to make news discovery effortless and enjoyable, with a focus on speed, readability, and customization. No subscription required to browse and read top stories!`,
    features: [
      {
        title: "Personalized Categories",
        explanation: "Choose your favorite topics and get news tailored to your interests."
      },
      {
        title: "Real-Time Updates",
        explanation: "Stay up-to-date with breaking news and live coverage."
      },
      {
        title: "Bookmark Articles",
        explanation: "Save articles to read later or revisit your favorite stories."
      },
      {
        title: "User Profiles",
        explanation: "Customize your profile and manage your reading preferences."
      },
      {
        title: "Dark Mode",
        explanation: "Switch between light and dark themes for comfortable reading."
      }
    ],
    screenshots: [
      { src: "/apks/app4/login.jpg", caption: "Login to access NewsApp." },
      { src: "/apks/app4/signup.jpg", caption: "Sign up and personalize your news feed." },
      { src: "/apks/app4/homepage.jpg", caption: "Browse top headlines and trending stories." },
      { src: "/apks/app4/categories.jpg", caption: "Explore news by categories." },
      { src: "/apks/app4/detail page.jpg", caption: "Read full articles with a clean layout." },
      { src: "/apks/app4/bookmarks.jpg", caption: "Bookmark your favorite articles." },
      { src: "/apks/app4/profile.jpg", caption: "Manage your profile and preferences." },
      { src: "/apks/app4/appearence.jpg", caption: "Switch between light and dark mode." },
      { src: "/apks/app4/help and support.jpg", caption: "Get help and support easily." },
      { src: "/apks/app4/About.jpg", caption: "Learn more about NewsApp." }
    ],
    changelog: [
      "v1.0.0 - Initial release with personalized categories, bookmarks, real-time updates, and dark mode."
    ],
    apkFile: "/apks/app4/PulseNews_v1.0.apk",
  },
  {
    slug: "app5",
    name: "To-Do List",
    description: `To-Do List is a simple, fast, and ad-supported productivity app for Android. Organize your daily tasks, set reminders, and track your progress with an intuitive interface. Designed for busy people, To-Do List helps you stay focused and get things done efficiently. All your tasks are stored locally for privacy, and the app works offline. Monetization is handled through non-intrusive AdSense ads, ensuring a free experience for all users while supporting ongoing development.\n\nTo-Do List was created to help users manage their time and tasks without distractions. Our team focused on a clean design, fast performance, and essential features for everyday productivity.`,
    developmentStory: `The idea for To-Do List came from our own need for a lightweight, no-nonsense task manager. We wanted to build an app that was easy to use, quick to launch, and didn't require an account or cloud sync. After testing with real users, we added features like reminders, recurring tasks, and dark mode. AdSense integration keeps the app free for everyone.`,
    features: [
      {
        title: "Quick Task Entry",
        explanation: "Add, edit, and delete tasks with just a few taps."
      },
      {
        title: "Reminders & Notifications",
        explanation: "Set one-time or recurring reminders so you never miss a task."
      },
      {
        title: "Task Organization",
        explanation: "Group tasks by category, priority, or due date."
      },
      {
        title: "Progress Tracking",
        explanation: "Mark tasks as complete and view your productivity stats."
      },
      {
        title: "Offline & Private",
        explanation: "All data is stored locally—no account or cloud required."
      },
      {
        title: "AdSense Supported",
        explanation: "Enjoy all features for free, supported by non-intrusive AdSense ads."
      }
    ],
    installation: `1. Download the APK file using the button below.\n2. Open your device's file manager and locate the downloaded APK.\n3. Tap the APK file to begin installation.\n4. If prompted, allow installation from unknown sources in your device settings.\n5. Once installed, open To-Do List and start organizing your tasks!`,
    screenshots: [
      { src: "/apks/app5/homepage.jpg", caption: "To-Do List - Homepage" },
      { src: "/apks/app5/login.jpg", caption: "Login Screen" },
      { src: "/apks/app5/signup.jpg", caption: "Signup Screen" },
      { src: "/apks/app5/setttings.jpg", caption: "Settings Screen" },
      { src: "/apks/app5/splash.jpg", caption: "App Splash Screen" }
    ],
    versionHistory: [
      {
        version: "1.0.0",
        date: "2025-06-01",
        changes: [
          "Initial release with quick task entry, reminders, progress tracking, and AdSense integration.",
          "Offline mode and privacy-first design.",
          "Added recurring tasks and dark mode."
        ],
        apkUrl: "/apks/app5/To-do List_v1.0.apk"
      }
    ],
    apkFile: "/apks/app5/To-Do List_v1.0.apk.sha1"
  }
];

export default apks;
