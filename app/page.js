import Header from "./components/Header";

export default function LandingPage() {
  return (
    <div className="md:flex min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* Sidebar - Hidden on mobile, visible on md and above */}
      <aside className="hidden md:block md:w-1/6 bg-gray-300 dark:bg-blue-400 text-text-light dark:text-text-dark p-4">
        <h2 className="text-xl font-bold">Yogini- Exbeyond</h2>
        {/* Add more sidebar content here */}
      </aside>

      {/* Main Content - Takes full width on mobile, flex-1 on md and above */}
      <div className="w-full md:flex-1 flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="flex-1 bg-gray-400 dark:bg-gray-100 text-white dark:text-zinc-800 p-8">
          <h2 className="text-3xl font-bold">
            Yoga Experience - Stream and Connect Effortlessly
          </h2>
          <p className="mt-4">
            Yoga enthusiasts - Join us to experience seamless yoga sessions.
          </p>
        </section>

        {/* Features Section */}
        <section className="p-8 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="mt-4 space-y-2">
            <li>High-quality video streaming</li>
            <li>Secure and private yoga sessions</li>
            <li>Easy to use interface</li>
            {/* Add more features */}
          </ul>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 dark:bg-gray-800 p-8 text-text-light dark:text-text-dark">
          <h2 className="text-2xl font-bold">Testimonials</h2>
          <p className="mt-4">
            "This platform has transformed our yoga experience!" - User
          </p>
          {/* Add more testimonials */}
        </section>

        {/* FAQ Section */}
        <section className="p-8 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
          <h2 className="text-2xl font-bold">How To / FAQ</h2>
          <ul className="mt-4 space-y-2">
            <li>How to start a video call?</li>
            <li>What are the system requirements?</li>
            {/* Add more FAQs */}
          </ul>
        </section>

        {/* Footer */}
        <footer className="bg-primary-dark text-white p-4">
          <p>&copy; 2024 ExBeyond venture. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
