const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start with a conversation about your business, goals, and what you need from your website.",
  },
  {
    number: "02",
    title: "Build",
    description: "I design and develop your WordPress site, keeping you updated along the way.",
  },
  {
    number: "03",
    title: "Review",
    description: "You review the site and we make any adjustments until it feels right.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Your site goes live and you get everything you need to manage it going forward.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-card">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center">
          The Process
        </h2>
        
        <div className="mt-12 md:mt-16 grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              <span className="inline-block text-4xl md:text-5xl font-serif font-medium text-primary/30 mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
