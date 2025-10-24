import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Feature {
  title: string;
  description: string;
}

interface SolutionSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  stats?: { value: string; label: string }[];
  badges?: string[];
}

export default function SolutionSection({
  id,
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  reversed = false,
  stats,
  badges,
}: SolutionSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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

  const isEven = parseInt(id.charCodeAt(0).toString()) % 2 === 0;
  
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-20 lg:py-32 border-b relative overflow-hidden ${
        isEven ? 'bg-gradient-to-br from-primary/5 via-purple-50/50 to-background' : ''
      }`}
      data-testid={`section-${id}`}
    >
      {isEven && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      )}
      
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-transparent via-primary to-transparent ${
            isVisible ? "animate-draw-line" : "w-0"
          }`}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-px h-32 overflow-hidden">
        <div
          className={`w-full bg-gradient-to-b from-transparent via-purple-500 to-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 h-32" : "opacity-0 h-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        />
      </div>
      
      <div className="absolute top-20 right-0 w-px h-40 overflow-hidden">
        <div
          className={`w-full bg-gradient-to-b from-transparent via-primary to-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 h-40" : "opacity-0 h-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          <div
            className={`${reversed ? "lg:order-2" : ""} ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-purple-700 text-white mb-6 shadow-lg shadow-primary/20">
              <Icon className="w-7 h-7" />
            </div>
            
            <div className="text-sm font-semibold text-primary mb-3">
              {subtitle}
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>

            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm"
                    data-testid={`badge-${badge.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate relative overflow-hidden group"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="font-semibold mb-2 relative z-10">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>

            {stats && stats.length > 0 && (
              <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b">
                {stats.map((stat, index) => (
                  <div key={index} data-testid={`stat-${index}`}>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-700"
              data-testid={`button-learn-more-${id}`}
            >
              Learn More
            </Button>
          </div>
          
          <div
            className={`${reversed ? "lg:order-1" : ""} ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-purple-500/30 to-primary/30 rounded-full blur-2xl" />
              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative rounded-2xl shadow-xl border transform transition-transform duration-500 hover:scale-105"
                data-testid={`img-solution-${id}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
