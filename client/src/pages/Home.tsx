import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  MessageSquare,
  FileText,
  Eye,
  Cog,
  Globe,
  BarChart,
  Shield,
} from "lucide-react";
import chatbotImage from "@assets/generated_images/AI_chatbot_interface_mockup_a89a5af0.png";
import documentImage from "@assets/generated_images/Document_extraction_interface_visualization_ad8c3393.png";
import visionImage from "@assets/generated_images/Vision_intelligence_analysis_dashboard_09a1d8d9.png";
import workflowImage from "@assets/generated_images/Workflow_automation_builder_interface_2cb5a718.png";
import scrapingImage from "@assets/generated_images/Web_scraping_dashboard_interface_077d2029.png";
import consolidationImage from "@assets/generated_images/Data_consolidation_analysis_dashboard_fb68a90c.png";
import securityImage from "@assets/generated_images/Data_security_masking_interface_ec5a005f.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />

        <SolutionSection
        id="conversational"
        icon={MessageSquare}
        title="AI Conversational Platform"
        subtitle="Vyoma.ai"
        description="Deploy intelligent conversational AI that understands intent, speaks multiple languages, and integrates seamlessly with your databases for automated customer support and engagement."
        features={[
          {
            title: "Intent-Based AI",
            description: "Understands user intent for accurate responses",
          },
          {
            title: "Multi-Language Support",
            description: "Communicate in 100+ languages globally",
          },
          {
            title: "Database Integration",
            description: "Automatic connection to your data sources",
          },
          {
            title: "Voice & Speech",
            description: "Natural voice interactions and speech recognition",
          },
        ]}
        imageSrc={chatbotImage}
        imageAlt="AI Conversational Platform Interface"
        reversed
        stats={[
          { value: "24/7", label: "Availability" },
          { value: "95%", label: "Accuracy" },
        ]}
        />

        <SolutionSection
          id="document"
        icon={FileText}
        title="Intelligent Document Extraction"
        subtitle="Smart Data Extraction (OCR & Vision AI)"
        description="Extract key data from contracts, invoices, reports, PDFs, images, and web sources with advanced OCR and vision AI—even from handwritten text. Ideal for recruiting, compliance, and finance."
        features={[
          {
            title: "Contract Analysis",
            description: "Extract key terms and obligations automatically",
          },
          {
            title: "Invoice Processing",
            description: "Capture line items, totals, and vendor details",
          },
          {
            title: "Compliance Ready",
            description: "Meet regulatory requirements with confidence",
          },
          {
            title: "Multi-Format Support",
            description: "Process PDFs, images, and web content",
          },
        ]}
        imageSrc={documentImage}
        imageAlt="Intelligent Document Extraction Interface"
        // reversed
        stats={[
          { value: "99.5%", label: "Accuracy" },
          { value: "10x", label: "Faster" },
        ]}
        badges={["PDF", "DOCX", "Images", "Web"]}
        />

        {/* <SolutionSection
          id="vision"
        icon={Eye}
        title="Vision Intelligence"
        subtitle="Visual AI Analysis"
        description="Analyze images and media files to provide meaningful insights with advanced computer vision. Detect objects, understand scenes, and extract actionable intelligence from visual data."
        features={[
          {
            title: "Object Detection",
            description: "Identify and classify objects in images",
          },
          {
            title: "Scene Understanding",
            description: "Comprehend context and relationships",
          },
          {
            title: "Media Insights",
            description: "Extract metadata and visual features",
          },
          {
            title: "Real-Time Processing",
            description: "Analyze images and video streams instantly",
          },
        ]}
        imageSrc={visionImage}
        imageAlt="Vision Intelligence Analysis Dashboard"
        badges={["Healthcare", "Retail", "Security", "Manufacturing"]}
        /> */}

        <SolutionSection
          id="workflow"
        icon={Cog}
        title="Workflow & Process Automation"
        subtitle="Agentic AI Workflows"
        description="Streamline operations with intelligent agentic AI workflows that automate complex processes, reduce errors, and scale with your business needs."
        features={[
          {
            title: "Process Orchestration",
            description: "Coordinate multi-step workflows seamlessly",
          },
          {
            title: "Error Reduction",
            description: "Minimize human errors with automation",
          },
          {
            title: "Scalable Solutions",
            description: "Grow without operational bottlenecks",
          },
          {
            title: "Integration Ready",
            description: "Connect with existing tools and platforms",
          },
        ]}
        imageSrc={workflowImage}
        imageAlt="Workflow Automation Builder Interface"
        reversed
        stats={[
          { value: "80%", label: "Time Saved" },
          { value: "99%", label: "Uptime" },
        ]}
        />

        <SolutionSection
          id="scraping"
        icon={Globe}
        title="Web Scraping AI Bots"
        subtitle="Intelligent Data Extraction"
        description="Deploy AI-powered web scraping bots for intelligent data extraction and monitoring. Track competitors, monitor prices, and gather market intelligence automatically."
        features={[
          {
            title: "Smart Scraping",
            description: "Adapt to website changes automatically",
          },
          {
            title: "Real-Time Monitoring",
            description: "Track changes as they happen",
          },
          {
            title: "Data Quality",
            description: "Clean, structured, and ready to use",
          },
          {
            title: "Compliance First",
            description: "Respect robots.txt and rate limits",
          },
        ]}
        imageSrc={scrapingImage}
        imageAlt="Web Scraping Dashboard Interface"
        badges={["E-commerce", "Market Research", "Competitor Analysis"]}
        />

        <SolutionSection
          id="consolidation"
        icon={BarChart}
        title="Data Consolidation & Analysis"
        subtitle="Multi-Source Intelligence"
        description="Consolidate and analyze data from various sources including media files, large documents, and multiple repositories. Get high-level summaries and actionable insights instantly."
        features={[
          {
            title: "Multi-Source Aggregation",
            description: "Combine data from diverse sources",
          },
          {
            title: "Smart Summarization",
            description: "Generate executive summaries automatically",
          },
          {
            title: "Trend Analysis",
            description: "Identify patterns and insights",
          },
          {
            title: "Custom Reports",
            description: "Create tailored analytics dashboards",
          },
        ]}
        imageSrc={consolidationImage}
        imageAlt="Data Consolidation Analysis Dashboard"
        reversed
        stats={[
          { value: "100+", label: "Sources" },
          { value: "90%", label: "Faster Insights" },
        ]}
        />

        <SolutionSection
          id="security"
        icon={Shield}
        title="Data Security with Masking Agents"
        subtitle="Privacy Protection"
        description="Protect sensitive information with intelligent data masking agents. Automatically detect and mask PII, ensuring compliance with GDPR, HIPAA, and other regulations."
        features={[
          {
            title: "PII Detection",
            description: "Identify sensitive personal information",
          },
          {
            title: "Automated Masking",
            description: "Apply protection rules automatically",
          },
          {
            title: "Compliance Ready",
            description: "Meet GDPR, HIPAA, and SOC 2 requirements",
          },
          {
            title: "Audit Trails",
            description: "Track all data access and modifications",
          },
        ]}
        imageSrc={securityImage}
        imageAlt="Data Security Masking Interface"
        badges={["GDPR", "HIPAA", "SOC 2"]}
        />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
