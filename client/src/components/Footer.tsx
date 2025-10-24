import logoImage from "@assets/download_1761298654967.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-background border-t relative overflow-hidden" data-testid="footer-main">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logoImage} alt="TechRAQ" className="h-10 mb-4" />
            <p className="text-muted-foreground max-w-md">
              Empowering businesses with cutting-edge AI solutions for automation, 
              intelligence, and security.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  Conversational AI
                </button>
              </li>
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  Document Extraction
                </button>
              </li>
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  Vision Intelligence
                </button>
              </li>
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  Workflow Automation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  Careers
                </button>
              </li>
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  Contact
                </button>
              </li>
              <li>
                <button className="hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 TechRAQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
