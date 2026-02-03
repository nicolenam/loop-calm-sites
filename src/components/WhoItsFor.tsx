import { CheckCircle } from "lucide-react";

const audiences = [
  "Small businesses ready for a professional web presence",
  "Solo founders who need a site that reflects their work",
  "Service-based businesses looking for clarity and structure",
  "People who want a website that just works",
];

const WhoItsFor = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground text-center">
          Who It's For
        </h2>
        
        <div className="mt-10 md:mt-12">
          <ul className="space-y-5">
            {audiences.map((audience, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-lg text-muted-foreground"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
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
