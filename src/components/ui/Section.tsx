import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  variant?: "hero" | "default" | "dark" | "light";
  children: ReactNode;
}

function Section({ 
  id, 
  className = "", 
  variant = "default", 
  children
}: SectionProps) {
  const baseClasses = "section";
  const variantClasses = {
    hero: "section-hero",
    default: "section-default",
    dark: "section-dark",
    light: "section-light"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  );
}

export default Section;