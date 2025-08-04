import { ReactNode } from "react";
import "../styles/Button.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "status" | "greeting";
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
  icon?: ReactNode;
}

function Button({
  children,
  variant = "greeting",
  href,
  onClick,
  className = "",
  icon,
}: ButtonProps) {
  const Component = href ? "a" : "button";

  const props = href
    ? {
        href,
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
        onClick,
      }
    : { onClick };

  return (
    <Component className={`btn btn-${variant} ${className}`} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </Component>
  );
}

// Status Button Component (Green dot with text)
export function StatusButton({
  status = "Available for Work",
  available = true,
}: {
  status?: string;
  available?: boolean;
}) {
  return (
    <Button
      variant="status"
      href="https://www.linkedin.com/in/stevendpelletier/"
      icon={
        <span className={`status-dot ${available ? "available" : "busy"}`} />
      }
    >
      {status}
    </Button>
  );
}

// Greeting Button Component (Waving hand with text)
export function GreetingButton({
  greeting = "Hey there, I'm Steven!",
}: {
  greeting?: string;
}) {
  return (
    <Button variant="greeting" icon={<span className="wave-emoji">👋</span>}>
      {greeting}
    </Button>
  );
}

// Light Button Component (with optional icon)
export function LightButton({
  children,
  href,
  onClick,
  className = "",
  icon,
}: {
  children: ReactNode;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      className={`light-button ${className}`}
      icon={icon}
    >
      {children}
    </Button>
  );
}

// Dark Button Component (with optional icon)
export function DarkButton({
  children,
  href,
  onClick,
  className = "",
  icon,
}: {
  children: ReactNode;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      className={`dark-button ${className}`}
      icon={icon}
    >
      {children}
    </Button>
  );
}

// CTA Button Component (Light button with arrow)
export function CTAButton({
  children,
  href,
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
}) {
  return (
    <LightButton
      href={href}
      onClick={onClick}
      className={`cta-button ${className}`}
      icon={<i className="fa-solid fa-arrow-right arrow-icon"></i>}
    >
      {children}
    </LightButton>
  );
}

// CTA Dark Button Component (Dark button with arrow)
export function CTADarkButton({
  children,
  href,
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
}) {
  return (
    <DarkButton
      href={href}
      onClick={onClick}
      className={`cta-button ${className}`}
      icon={<i className="fa-solid fa-arrow-right arrow-icon"></i>}
    >
      {children}
    </DarkButton>
  );
}

export default Button;
