import { useNavigate } from 'react-router-dom';
import { Hero, Stats, Features, HowItWorks, Benefits, CTA } from '../components/landing_v2';

export function HomePage() {
  const navigate = useNavigate();

  const handleBrowseJobs = () => {
    navigate('/opportunities');
  };

  const handleGetStarted = () => {
    navigate('/opportunities');
  };

  return (
    <div className="bg-background">
      <Hero onBrowseJobs={handleBrowseJobs} />
      <Stats />
      <Features />
      <Benefits />
      <CTA onGetStarted={handleGetStarted} />
    </div>
  );
}
