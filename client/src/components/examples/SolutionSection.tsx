import SolutionSection from "../SolutionSection";
import { MessageSquare } from "lucide-react";
import chatbotImage from "@assets/generated_images/AI_chatbot_interface_mockup_a89a5af0.png";

export default function SolutionSectionExample() {
  return (
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
      stats={[
        { value: "24/7", label: "Availability" },
        { value: "95%", label: "Accuracy" },
      ]}
    />
  );
}
