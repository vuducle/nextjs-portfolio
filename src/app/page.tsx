import React from "react";
import FooterWithDisclaimer from "./components/FooterWithDetails";
import CookieBanner from "./components/CookieBanner";
import Navigation from "./components/Navigation";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Vu Duc Le | Web Developer - Frontend Dev - Web Designer & Student in Berlin, Germany",
  description:
    "Hi, I'm Duc. A passionate Web developer and web designer and currently pursuing my Bachelor's in International Media and Computer Science at the Hochschule",
};

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Vu Duc Lw | Web Developer - Frontend Dev - Web Designer</title>
        <meta
          name="description"
          content="Hi, I'm Duc. A passionate frontend developer and web designer and currently pursuing my Bachelor's in International Media and Computer Science at the Hochschule."
        />
      </Head> */}

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <Header />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <FooterWithDisclaimer />

        {/* Back to Top Button */}
        <BackToTop />
      </div>

      <CookieBanner />
    </>
  );
}
