import { Target, Database, Shield, BarChart3, Handshake } from 'lucide-react';
import { Footer } from './Footer';
import { theme } from '../config/theme';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-700 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/5 to-white dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-brand-primary/10 text-brand-primary dark:text-brand-primary-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Powered by {theme.branding.organization}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About the {theme.branding.appFullName}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {theme.branding.description}
          </p>
        </div>
      </section>

      {/* Where AiM Comes In */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Where AiM Comes In</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AiM brings specialized expertise and proven track record in Indigenous engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-primary dark:text-brand-primary-light" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AiM Specialization</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Extensive knowledge and proven track record with Indigenous Engagement
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Establish Communication</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Leverage AiM's reputation and expertise to promote engagement with Indigenous Partners
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Gathering reliable and accurate information through standardized processes
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Structured Procedure</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Implementing a long-term consistent solution to gather and measure data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Indigenous Tracking */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Indigenous Tracking?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-primary/5 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Relationships</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Build and strengthen relationships with Indigenous communities by working with contractors
                who make meaningful Indigenous engagement and inclusion a priority.
              </p>
            </div>

            <div className="bg-brand-primary/5 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Certainty</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By working with Indigenous Communities there is an increased ability to develop and operate
                projects within the Traditional Territories of Indigenous Groups.
              </p>
            </div>

            <div className="bg-brand-primary/5 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Reporting Targets</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Creating a strong framework to evaluate budgeting, employment statistics, safety metrics,
                and standardize reporting across all projects to reach ESG Targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raven Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Raven Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A comprehensive five-stage approach to Indigenous engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Identification', description: 'Establish directory of Indigenous affiliated contractors' },
              { step: '2', title: 'Vendor List', description: 'Create opportunities guide with verified vendors' },
              { step: '3', title: 'Bidding (RFP)', description: 'Distribute packages to identified opportunities' },
              { step: '4', title: 'Selection', description: 'Award contracts to qualified vendors' },
              { step: '5', title: 'Monitoring', description: 'Track and report on spend and contracts' },
            ].map((phase) => (
              <div key={phase.step} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Learn more about how Raven can help your organization build stronger Indigenous partnerships
            and meet ESG reporting requirements.
          </p>
          <a
            href={`mailto:${theme.branding.contact}`}
            className="inline-flex items-center px-8 py-4 bg-brand-primary text-white text-lg font-semibold rounded-lg hover:bg-brand-primary-hover transition-all shadow-lg hover:shadow-xl"
          >
            Contact {theme.branding.organization}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
