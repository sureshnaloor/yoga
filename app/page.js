import ThemeSwitcher from './components/ThemeSwitcher';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-300 dark:bg-blue-400 text-text-light dark:text-text-dark p-4">
        <h2 className="text-xl font-bold">Yogini- Exbeyond</h2>
        {/* Add more sidebar content here */}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-primary dark:bg-gray-300 text-white dark:text-zinc-800 p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold italic">Welcome to Our Yoga Platform</h1> <h3 >  click <Link href="/jitsi">here</Link> to Yogaroom </h3>
          <ThemeSwitcher />
        </header>

        {/* Hero Section */}
        <section className="flex-1 bg-gray-400 dark:bg-gray-100 text-white dark:text-zinc-800  p-8">
          <h2 className="text-3xl font-bold">Yoga Experience -Stream and Connect Effortlessly</h2>
          <p className="mt-4">Yoga enthusiasts- Join us to experience seamless yoga sessions.</p>
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
          <p className="mt-4">"This platform has transformed our yoga experience!" - User A</p>
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
