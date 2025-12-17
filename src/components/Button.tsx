import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "status";
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
  icon?: ReactNode;
}

function Button({
  children,
  variant,
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

  const variantClass = variant ? `btn-${variant}` : "";

  return (
    <Component className={`btn ${variantClass} ${className}`.trim()} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </Component>
  );
}

// Status Button Component (Green dot with text)
export function StatusButton({
  status = "Available for Work",
}: {
  status?: string;
}) {
  return (
    <Button
      variant="status"
      href="https://www.linkedin.com/in/stevendpelletier/"
    >
      {status}
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
