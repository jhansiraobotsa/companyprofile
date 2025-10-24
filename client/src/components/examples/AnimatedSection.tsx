import AnimatedSection from "../AnimatedSection";

export default function AnimatedSectionExample() {
  return (
    <AnimatedSection>
      <div className="p-8 bg-card rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Animated Content</h2>
        <p>This content fades in when scrolled into view.</p>
      </div>
    </AnimatedSection>
  );
}
