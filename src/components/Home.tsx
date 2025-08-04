import { Helmet } from "react-helmet-async";
import TechMarquee from "./TechMarquee";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";
import WorkSection from "./sections/WorkSection";
import TestimonialsSection from "./sections/TestimonialsSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Steven Pelletier - Portfolio | Designer, Developer, WordPress Expert
        </title>
        <meta
          name="description"
          content="Steven Pelletier is a passionate Web Designer and Front-End Developer with over 7 years of experience creating high-performance digital solutions. Specializing in WordPress development, React applications, and performance optimization."
        />
        <meta
          name="keywords"
          content="Steven Pelletier, Web Developer, Front-End Developer, WordPress Expert, React Developer, Portfolio, Web Design"
        />
        <meta property="og:title" content="Steven Pelletier - Portfolio" />
        <meta
          property="og:description"
          content="Designer, Developer, WordPress Expert with 7+ years of experience"
        />
        <meta property="og:type" content="website" />
        <meta name="author" content="Steven Pelletier" />
      </Helmet>

      <main>
        <HeroSection />
        
        <AboutSection />

        {/* Tech Stack Marquee */}
        <TechMarquee />

        <ServicesSection />

        <SkillsSection />

        <WorkSection />

        <TestimonialsSection />
      </main>
    </>
  );
}

export default Home;
