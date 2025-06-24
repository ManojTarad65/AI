export default function Hero() {
    return (
      <section className="text-center py-20 px-6 bg-[var(--background)] text-[var(--foreground)]">
        <h2 className="text-4xl font-bold mb-4">Your AI Assistant</h2>
        <p className="text-lg text-[var(--muted-foreground)] mb-8">
          Get help with your tasks and questions using the power of AI.
        </p>
        <a href="/login" className="inline-block bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
          Get Started
        </a>
      </section>
    );
  }
  