import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/AI_workspace_hero_dashboard_b9d69ef6.png";

export default function HeroSection() {
  const scrollToSolutions = () => {
    const element = document.getElementById("conversational");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-purple-700 to-purple-900 animate-gradient-flow"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-40 right-20 w-96 h-1 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
        <div className="absolute bottom-40 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/3 right-10 w-1 h-48 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI Solutions Workspace</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with AI
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl">
              Discover comprehensive AI solutions designed to automate processes, 
              extract insights, and secure your data with cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToSolutions}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                data-testid="button-explore-solutions"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-3">Trusted by innovative businesses worldwide</p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/20 border-2 border-purple-900 flex items-center justify-center text-xs font-semibold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span>500+ businesses powered by TechRAQ</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl blur-3xl" />
            <img
              src={heroImage}
              alt="TechRAQ AI Workspace Dashboard"
              className="relative rounded-2xl shadow-2xl border border-white/10"
              data-testid="img-hero-dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
