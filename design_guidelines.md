# TechRAQ AI Workspace - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern AI/tech platforms like Linear, Notion, Vercel, and Stripe's product showcases. This approach emphasizes clean interfaces, sophisticated animations, and content-forward design that builds credibility.

**Core Design Principles**:
- Premium tech aesthetic with purple gradient brand identity
- Each solution section functions as a mini-landing page with unique visual treatment
- Emphasis on clarity and professionalism over decoration
- Whitespace as a design element to create breathing room

---

## Typography System

**Font Stack**:
- Primary: Inter (Google Fonts) - for UI, navigation, body text
- Display: Space Grotesk (Google Fonts) - for hero headlines and section titles

**Hierarchy**:
- Hero Headlines: Space Grotesk, text-6xl lg:text-7xl, font-bold
- Section Titles: Space Grotesk, text-4xl lg:text-5xl, font-bold
- Subsection Headings: Inter, text-2xl lg:text-3xl, font-semibold
- Feature Titles: Inter, text-xl font-semibold
- Body Text: Inter, text-base lg:text-lg, regular (400)
- Supporting Text: Inter, text-sm, regular (400)
- Navigation Links: Inter, text-sm font-medium

---

## Layout & Spacing System

**Tailwind Units**: Standardize on 4, 8, 12, 16, 20, 24, 32 for consistency
- Component internal spacing: p-4, p-8, gap-4, gap-6
- Section vertical padding: py-20 lg:py-32
- Container max-widths: max-w-7xl for full sections, max-w-6xl for content blocks
- Grid gaps: gap-8 lg:gap-12

**Container Strategy**:
- Full-width sections with inner containers
- Consistent horizontal padding: px-6 lg:px-8
- Centered content with mx-auto

---

## Navigation Structure

**Fixed Header**:
- Sticky position with backdrop blur (backdrop-blur-lg bg-white/80)
- TechRAQ logo on left (purple gradient treatment)
- Primary navigation: "Solutions" dropdown revealing all 7 products
- CTA button: "Contact Us" (gradient purple background)
- Height: h-20
- Border bottom: subtle border-gray-200

**Solutions Dropdown**:
- Appears on hover/click with smooth fade-in
- Lists all 7 solutions with icons and brief descriptions
- Each item clickable to smooth-scroll to respective section
- Dropdown width: w-96, positioned under "Solutions" link

---

## Hero Section

**Layout**:
- Full viewport height: min-h-screen with flex center alignment
- Two-column layout on desktop (grid lg:grid-cols-2 gap-12)
- Left: Headline + subheadline + CTA buttons
- Right: Hero illustration/dashboard mockup

**Content Structure**:
- Main headline: "Transform Your Business with AI Solutions" (Space Grotesk, text-6xl)
- Subheadline: Brief description of TechRAQ AI workspace (text-xl, max-w-2xl)
- Dual CTAs: Primary "Explore Solutions" + Secondary "Schedule Demo"
- Trust indicator: "Trusted by 500+ businesses" with company logos

**Visual Treatment**:
- Purple gradient background (from-purple-600 to-purple-800) with subtle mesh pattern
- Hero image: Modern AI dashboard/workspace visualization showing multiple solution interfaces
- Floating card elements with solution previews for depth

---

## Solution Sections (7 Full-Page Sections)

**General Section Structure** (each solution follows this pattern with variations):

**Section 1: AI Conversational Platform**
- Layout: Alternating image-left/content-right
- Hero image: Chatbot interface with conversation bubbles in multiple languages
- Feature grid: 2x2 grid showcasing (Intent-based AI, Custom Assistants, Database Integration, Voice & Speech)
- Each feature: Icon (Heroicons) + title + 2-line description
- Code snippet visualization: Example API integration

**Section 2: Intelligent Document Extraction**
- Layout: Split screen - document preview left, extracted data visualization right
- Hero image: Document scanning animation showing invoice/contract processing
- Use case grid: 3 columns (Recruiting, Compliance, Financial Analysis) with specific examples
- Stats showcase: "99.5% accuracy, 10x faster processing" with animated counters
- Supported formats: Visual badges for PDF, DOCX, images, web content

**Section 3: Vision Intelligence**
- Layout: Masonry grid of image analysis examples
- Hero image: Before/after image analysis showcase
- Feature columns: 3-column grid (Object Detection, Scene Understanding, Media Insights)
- Interactive demo area: Upload placeholder showing how vision analysis works
- Industry applications: Healthcare, Retail, Security with icon + description

**Section 4: Workflow & Process Automation**
- Layout: Process flow visualization - left to right workflow diagram
- Hero image: Agentic AI workflow builder interface
- Automation examples: 4-step process cards showing input → processing → output
- Benefits grid: 2x2 grid (Time Savings, Error Reduction, Scalability, Integration)
- Integration logos: Show compatible platforms/tools

**Section 5: Web Scraping AI Bots**
- Layout: Dashboard mockup showing scraped data visualization
- Hero image: Browser automation interface with data extraction highlights
- Feature list: Vertical timeline showing scraping → parsing → delivery → monitoring
- Use cases: E-commerce price monitoring, competitor analysis, market research
- Data output formats: JSON, CSV, Database integration examples

**Section 6: Data Consolidation & Analysis Agents**
- Layout: Multi-source funnel visualization (many inputs → single analyzed output)
- Hero image: Dashboard showing consolidated insights from multiple sources
- Source types: Grid of icons representing different data sources (PDFs, videos, audio, spreadsheets)
- Analysis capabilities: Natural language summaries, trend identification, anomaly detection
- Output examples: Executive summary cards with key insights

**Section 7: Data Security with Masking Agents**
- Layout: Security-focused with shield/lock imagery
- Hero image: Data masking visualization showing sensitive data protection
- Security features: 3 columns (PII Detection, Automated Masking, Compliance)
- Compliance badges: GDPR, HIPAA, SOC 2 visual indicators
- Before/after example: Showing original vs masked data

---

## Component Library

**Feature Cards**:
- Background: bg-white with border border-gray-200
- Padding: p-8
- Rounded: rounded-2xl
- Shadow: shadow-sm hover:shadow-lg transition
- Icon container: w-12 h-12, gradient purple background, rounded-lg
- Icon: Heroicons, size-6, white

**Call-to-Action Buttons**:
- Primary: Gradient purple (from-purple-600 to-purple-700), white text, px-8 py-4, rounded-full, font-semibold
- Secondary: White background, purple text, border-2 border-purple-600, px-8 py-4, rounded-full
- Hover: Scale 1.05 transform with smooth transition

**Stats/Metrics Display**:
- Large number: text-5xl font-bold gradient purple text
- Label: text-sm uppercase tracking-wide text-gray-600
- Container: Inline flex with gap-16

**Solution Icon Set** (Heroicons):
- Conversational: ChatBubbleLeftRightIcon
- Document: DocumentTextIcon
- Vision: EyeIcon
- Workflow: Cog6ToothIcon
- Web Scraping: GlobeAltIcon
- Data Analysis: ChartBarIcon
- Security: ShieldCheckIcon

---

## Images Strategy

**Required Images**:
1. **Hero Section**: Large hero image - Modern AI workspace dashboard showing multiple solution panels (right side of hero split)
2. **Conversational Platform**: Chatbot interface mockup with multilingual conversations
3. **Document Extraction**: Document analysis visualization with highlighted extraction points
4. **Vision Intelligence**: Image analysis grid showing detection/recognition capabilities
5. **Workflow Automation**: Process builder interface or workflow diagram
6. **Web Scraping**: Browser automation dashboard with data extraction visualization
7. **Data Consolidation**: Multi-source data funnel leading to consolidated dashboard
8. **Security**: Data masking visualization showing protected information

All images should have:
- Modern, clean aesthetic matching purple brand theme
- High contrast for readability
- Professional UI mockups rather than abstract imagery
- Consistent visual language across all solution sections

---

## Contact Section

**Layout**: Two-column grid
- Left: Contact form (Name, Email, Company, Solution Interest dropdown, Message)
- Right: Contact information + office illustration/map

**Form Styling**:
- Inputs: border border-gray-300, rounded-lg, p-4, focus:border-purple-600
- Labels: text-sm font-medium text-gray-700, mb-2
- Submit button: Full-width primary CTA style
- Solution dropdown: Lists all 7 solutions

---

## Animations

**Minimal, Purposeful Motion**:
- Smooth scroll behavior between sections (scroll-smooth)
- Fade-in on scroll for section entries (opacity-0 to opacity-100)
- Subtle hover transforms on cards (scale-105)
- Navigation dropdown fade-in (200ms)
- No distracting parallax or continuous animations
- Stats counter animations only on first view