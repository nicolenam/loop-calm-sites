import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent! I'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer id="contact" className="section-padding bg-foreground text-background">
      <div className="container-wide">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Get in Touch
            </h2>
            <p className="text-background/70 mb-8 text-lg">
              Have a project in mind? Send a message and I'll get back to you within a day or two.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-background text-foreground hover:bg-background/90 w-full sm:w-auto"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Footer Info */}
          <div className="lg:pl-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif font-medium mb-4">
                  Loop Website Studio
                </h3>
                <p className="text-background/70">
                  Clean WordPress websites for small businesses.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Navigation</h4>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <h4 className="font-medium mb-3">Email</h4>
                <a
                  href="mailto:hello@loopwebsitestudio.com"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  hello@loopwebsitestudio.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Loop Website Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
