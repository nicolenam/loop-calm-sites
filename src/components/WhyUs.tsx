const reasons = [
  {
    title: "Calm Process",
    description: "No chaos, no pressure. Just clear steps from start to finish.",
  },
  {
    title: "Clear Communication",
    description: "You'll always know what's happening and what comes next.",
  },
  {
    title: "Practical Solutions",
    description: "Real answers to real problems—not overengineered complexity.",
  },
  {
    title: "No Tech Overwhelm",
    description: "You get a site you can actually manage and understand.",
  },
  {
    title: "Built for Real Businesses",
    description: "Focused on what works, not what's trendy.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center">
          Why Loop Website Studio
        </h2>
        
        <div className="mt-12 md:mt-16 space-y-8">
          {reasons.map((reason, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 md:pl-8">
              <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
