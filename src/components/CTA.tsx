import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-balance">
          Ready for a website that works?
        </h2>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's talk about what you need and how we can make it happen—no pressure, no jargon.
        </p>
        
        <Button variant="hero" size="xl" className="mt-10" asChild>
          <a href="#contact" className="group">
            Start Your Website
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
