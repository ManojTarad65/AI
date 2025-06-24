const features = [
    {
      title: "Answer your questions",
      desc: "Get instant information and advice",
      icon: "💡"
    },
    {
      title: "Assist with tasks",
      desc: "Help with writing, planning and more",
      icon: "✅"
    },
    {
      title: "Analyze data",
      desc: "Uncover insights and trends",
      icon: "📊"
    },
  ];
  
  export default function Features() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 bg-[var(--background)] text-[var(--foreground)]">
        {features.map((item, idx) => (
          <div key={idx} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
            <p className="text-[var(--muted-foreground)]">{item.desc}</p>
          </div>
        ))}
      </section>
    );
  }
  