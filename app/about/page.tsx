export default function About() {
    return (
      <section
        id="about"
        className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)] text-center border-t border-[var(--border)]"
      >
        <h2 className="text-3xl font-bold mb-4">About This AI</h2>
        <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg">
          This intelligent assistant is built using OpenAI and Gemini APIs to help
          you chat, generate ideas, solve problems, and automate your tasks. It’s
          your 24/7 personal assistant designed with modern UI, lightning speed,
          and privacy-first features.
        </p>
      </section>
    );
  }
  