import { CheckCircle } from "lucide-react";

const audiences = [
  "Women-led businesses ready for a polished, professional presence",
  "Solo founders who want a site that reflects their vision and values",
  "Coaches, consultants, and creatives seeking clarity and structure",
  "Entrepreneurs who want a website that works—without the tech stress",
];

const WhoItsFor = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center">
          Who It's For
        </h2>
        
        <div className="mt-10 md:mt-12">
          <ul className="space-y-4">
            {audiences.map((audience, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-lg text-muted-foreground"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
