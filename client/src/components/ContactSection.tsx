import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const solutions = [
  "AI Conversational Platform",
  "Intelligent Document Extraction",
  "Vision Intelligence",
  "Workflow & Process Automation",
  "Web Scraping AI Bots",
  "Data Consolidation & Analysis",
  "Data Security with Masking",
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    solution: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      solution: "",
      message: "",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-purple-50/30 to-background relative overflow-hidden"
      data-testid="section-contact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.15),transparent_60%)]" />
      
      <div className="absolute top-20 left-0 right-0 h-px overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1500 ${
            isVisible ? "w-96" : "w-0"
          }`}
        />
      </div>
      
      <div className="absolute bottom-40 left-0 right-0 h-px overflow-hidden flex justify-end">
        <div
          className={`h-full bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transition-all duration-1500 ${
            isVisible ? "w-72" : "w-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        />
      </div>
      
      <div className="absolute left-20 top-40 w-px h-48 overflow-hidden">
        <div
          className={`w-full bg-gradient-to-b from-transparent via-primary/40 to-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 h-48" : "opacity-0 h-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-sm font-semibold text-primary mb-3">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us to learn how TechRAQ's AI solutions can help you achieve your goals.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <Card className="p-8 relative overflow-hidden border-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold mb-6 relative z-10">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="John Doe"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="john@company.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Your Company"
                  data-testid="input-company"
                />
              </div>

              <div>
                <Label htmlFor="solution">Solution of Interest</Label>
                <Select
                  value={formData.solution}
                  onValueChange={(value) =>
                    setFormData({ ...formData, solution: value })
                  }
                >
                  <SelectTrigger data-testid="select-solution">
                    <SelectValue placeholder="Select a solution" />
                  </SelectTrigger>
                  <SelectContent>
                    {solutions.map((solution) => (
                      <SelectItem key={solution} value={solution}>
                        {solution}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-purple-700"
                data-testid="button-submit-contact"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-purple-600/20 text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">
                      contact@techraq.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-purple-600/20 text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-muted-foreground">
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-purple-600/20 text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Office</div>
                    <div className="text-muted-foreground">
                      Silicon Valley, CA
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-purple-700 text-white relative overflow-hidden border-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Enterprise Solutions</h3>
              <p className="mb-6 text-white/90 relative z-10">
                Looking for custom AI solutions tailored to your enterprise needs? 
                Our team is ready to build the perfect solution for you.
              </p>
              <Button
                variant="outline"
                className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 relative z-10"
                data-testid="button-enterprise-contact"
              >
                Contact Enterprise Team
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
