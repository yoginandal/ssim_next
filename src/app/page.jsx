"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/pages/Header/Header";
import HeroSlider from "@/pages/Home/HeroSlider";
import AboutSection from "@/pages/Home/AboutSection";
import AcademicPrograms from "@/pages/Home/AcademicPrograms";
import SsimStories from "@/pages/Home/SsimStories";
import LatestBlogsAndEvents from "@/pages/Home/LatestBlogs&Events";
import AlumniSection from "@/pages/Home/AlumniSection";
import PlacementIndustry from "@/pages/Home/Placement&Industry";
import Footer from "@/pages/Footer/Footer";
import HeroSection from "@/components/HeroSection";

const sectionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const mobileSectionVariants = {
  hidden: { scale: 1, opacity: 1 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const SectionWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isMobile = useIsMobile();
  const variants = isMobile ? mobileSectionVariants : sectionVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  // Auto scroll to top when component mounts (handles both link navigation and browser back button)
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Scroll to top immediately when component mounts
    const timer = setTimeout(() => {
      scrollToTop();
    }, 100);

    // Also handle browser navigation events (back/forward buttons)
    const handleNavigation = () => {
      setTimeout(() => {
        scrollToTop();
      }, 100);
    };

    // Listen for browser navigation events
    window.addEventListener("popstate", handleNavigation);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper>
        <AcademicPrograms />
      </SectionWrapper>
      <SectionWrapper>
        <SsimStories />
      </SectionWrapper>
      <SectionWrapper>
        <LatestBlogsAndEvents />
      </SectionWrapper>
      <SectionWrapper>
        <AlumniSection />
      </SectionWrapper>
      <SectionWrapper>
        <PlacementIndustry />
      </SectionWrapper>
    </>
  );
}
