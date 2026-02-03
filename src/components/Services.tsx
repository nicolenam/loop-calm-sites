import { Layout, RefreshCw, Smartphone, Wrench, FileText, Globe } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Custom WordPress Websites",
    description: "Built from the ground up to match your business needs and brand.",
  },
  {
    icon: Globe,
    title: "One-Page & Multi-Page Sites",
    description: "From simple landing pages to full multi-page websites.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description: "Give your existing site a fresh, modern look that works.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Ensure your site looks great and works well on every device.",
  },
  {
    icon: Wrench,
    title: "Website Cleanup & Fixes",
    description: "Clean up messy sites and fix issues holding you back.",
  },
  {
    icon: FileText,
    title: "Content Updates & Migrations",
    description: "Help moving content or keeping your site up to date.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center">
          Services
        </h2>
        
        <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-background rounded-lg border border-border hover-lift"
            >
              <service.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
