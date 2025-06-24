export default function Navbar() {
    return (
      <header className="w-full px-6 py-4 flex items-center justify-between bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-xl font-bold">AI Assistant</h1>
        <nav className="space-x-4">
          <a href="/about" className="hover:text-[var(--primary)]">About</a>
          <a href="/login" className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-md hover:opacity-90 transition">Log In</a>
        </nav>
      </header>
    );
  }
  