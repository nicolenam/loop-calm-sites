const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center">
          About
        </h2>
        
        <div className="mt-10 md:mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed text-center md:text-left">
          <p>
            Loop Website Studio is a boutique web design practice focused on building WordPress websites for small businesses and solo founders.
          </p>
          <p>
            The approach is simple: understand what you need, build something that works, and hand it off in a way that makes sense. Every project is treated with care and attention to detail.
          </p>
          <p>
            The result is a website you can actually manage—one that grows with your business instead of getting in the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
