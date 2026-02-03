import { Hero } from './landing/Hero';
import { Features } from './landing/Features';
import { CallToAction } from './landing/CallToAction';
import { Footer } from './Footer';
import RavenQR from "../config/Enbridge_EI_QR_SVG.svg";

type LandingPageProps = {
  onNavigateToJobs: () => void;
};

export function LandingPage({ onNavigateToJobs }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero onBrowseJobs={onNavigateToJobs} qrSrc={RavenQR} />
      <Features />
      <CallToAction onGetStarted={onNavigateToJobs} />
      <Footer />
    </div>
  );
}
