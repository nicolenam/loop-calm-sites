import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding pt-32 md:pt-40 lg:pt-48">
      <div className="container-narrow text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight text-balance animate-fade-in">
          Clean WordPress websites for small businesses
        </h1>
        
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Simple, reliable, and easy to manage. Built for people who want a website that just works—without the tech overwhelm.
        </p>
        
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#contact" className="group">
              Work With Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="subtle" size="xl" asChild>
            <a href="#services">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
