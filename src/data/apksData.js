const apks = [
  {
    slug: "app1",
    name: "Expense Tracker Pro",
    description: `Expense Tracker Pro is a powerful and user-friendly Flutter app designed to help you manage your finances with ease. Whether you are a student, professional, or entrepreneur, this app empowers you to track your income and expenses, set budgets, and gain insights into your spending habits. With a clean interface and robust features, Expense Tracker Pro is your personal finance assistant on the go.\n\nThe app was built to solve the everyday problem of managing money efficiently. During development, the focus was on creating a seamless experience for users who want to take control of their finances without the complexity of spreadsheets or desktop software. The intuitive design ensures that anyone can start tracking their finances in minutes.\n\nExpense Tracker Pro is the result of months of research, user feedback, and continuous improvement. The goal was to create a tool that not only records transactions but also helps users understand their financial health and make smarter decisions.`,
    features: [
      {
        title: "Simple Transaction Entry",
        explanation: "Quickly add income or expense entries with just a few taps. Categorize transactions for better organization."
      },
      {
        title: "Visual Reports",
        explanation: "View your spending and income trends with easy-to-understand charts and graphs."
      },
      {
        title: "Budget Management",
        explanation: "Set monthly budgets and receive alerts when you approach your limits."
      },
      {
        title: "Secure Data",
        explanation: "Your financial data is stored securely on your device. No cloud or third-party access."
      },
      {
        title: "Multi-Account Support",
        explanation: "Track multiple accounts (cash, bank, cards) in one place."
      }
    ],
    screenshots: [
      { src: "/apks/app1/login.jpg", caption: "Login screen for secure access." },
      { src: "/apks/app1/signup.jpg", caption: "Easy sign-up process for new users." },
      { src: "/apks/app1/homepage.jpg", caption: "Dashboard with quick financial overview." },
      { src: "/apks/app1/expense.jpg", caption: "Add and categorize your expenses easily." },
      { src: "/apks/app1/income.jpg", caption: "Track your income sources and amounts." },
      { src: "/apks/app1/settings.jpg", caption: "Customize your experience in the settings." }
    ],
    changelog: [
      "v1.0.0 - Initial release with core features: transaction tracking, reports, budgets, and multi-account support."
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
  }
];

export default apks;
