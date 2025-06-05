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
  }
];

export default apks;
