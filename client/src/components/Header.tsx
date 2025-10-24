import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MessageSquare, FileText, Eye, Cog, Globe, BarChart, Shield } from "lucide-react";
import logoImage from "@assets/download_1761298654967.png";

const solutions = [
  {
    id: "conversational",
    title: "AI Conversational Platform",
    description: "Intent-based assistants with multi-language support",
    icon: MessageSquare,
  },
  {
    id: "document",
    title: "Intelligent Document Extraction",
    description: "Extract data from contracts, invoices, and PDFs",
    icon: FileText,
  },
  {
    id: "vision",
    title: "Vision Intelligence",
    description: "Analyze images and media for insights",
    icon: Eye,
  },
  {
    id: "workflow",
    title: "Workflow & Process Automation",
    description: "Agentic AI workflows for efficiency",
    icon: Cog,
  },
  {
    id: "scraping",
    title: "Web Scraping AI Bots",
    description: "Intelligent data extraction and monitoring",
    icon: Globe,
  },
  {
    id: "consolidation",
    title: "Data Consolidation & Analysis",
    description: "Summarize from multiple sources",
    icon: BarChart,
  },
  {
    id: "security",
    title: "Data Security with Masking",
    description: "Protect sensitive information",
    icon: Shield,
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
            data-testid="button-logo"
          >
            <img src={logoImage} alt="TechRAQ" className="h-10" />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-4 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2"
              data-testid="link-home"
            >
              Home
            </button>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm font-medium"
                    data-testid="button-solutions-menu"
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[480px] p-4">
                      <div className="grid gap-2">
                        {solutions.map((solution) => {
                          const Icon = solution.icon;
                          return (
                            <button
                              key={solution.id}
                              onClick={() => scrollToSection(solution.id)}
                              className="flex items-start gap-4 p-4 rounded-md hover-elevate active-elevate-2 text-left"
                              data-testid={`link-solution-${solution.id}`}
                            >
                              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-primary to-purple-700 text-white flex-shrink-0">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm mb-1">
                                  {solution.title}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {solution.description}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button
              onClick={() => scrollToSection("conversational")}
              className="px-4 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2"
              data-testid="link-features"
            >
              Features
            </button>
            
            <button
              onClick={scrollToContact}
              className="px-4 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-purple-700"
            data-testid="button-contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
