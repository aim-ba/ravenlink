import { X, MapPin, Briefcase, DollarSign, Calendar, Building2, FileText } from 'lucide-react';
import type { Job } from '../lib/api';

type JobDetailModalProps = {
  job: Job;
  onClose: () => void;
  onApply: () => void;
};

const formRedirect = "https://www.fastfieldwebforms.com/us/webforms/a7353059-48e7-4359-a410-7b12a14ae137?fffcb=1764964351277"

export function JobDetailModal({ job, onClose, onApply }: JobDetailModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-start z-10">
          <div className="flex-1 pr-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {job.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  {job.company}
                </p>
              </div>
              <span className="bg-brand-primary/10 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap ml-4">
                {job.type}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Job Meta Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{job.location}</p>
              </div>
            </div>

            {job.salary_range && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Salary Range</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{job.salary_range}</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Posted Date</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{formatDate(job.posted_date)}</p>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-brand-primary" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Job Description</h3>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {job.description}
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-brand-primary" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Requirements</h3>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {job.requirements}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          {job.proponent_organization && (
            <div className="mb-8 p-4 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-lg border border-brand-primary/20">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Project Organization:</span> {job.proponent_organization}
              </p>
            </div>
          )}

          {/* Apply Button */}
          <div className="sticky bottom-0 bg-white dark:bg-gray-800 pt-6 border-t border-gray-200 dark:border-gray-700 -mx-6 sm:-mx-8 px-6 sm:px-8 pb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.open(formRedirect, '_blank')}
                className="flex-1 bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Apply Now
              </button>
              <button
                onClick={onClose}
                className="px-6 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
