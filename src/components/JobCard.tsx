import { Briefcase, MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import type { Job } from '../lib/api';

type JobCardProps = {
  job: Job;
  onViewDetails: () => void;
};

export function JobCard({ job, onViewDetails }: JobCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">{job.company}</p>
        </div>
        <span className="bg-brand-primary/10 text-brand-primary text-sm font-medium px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>
        {job.salary_range && (
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <DollarSign className="w-4 h-4 mr-2" />
            <span className="text-sm">{job.salary_range}</span>
          </div>
        )}
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">Posted {formatDate(job.posted_date)}</span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{job.description}</p>

      <button
        onClick={onViewDetails}
        className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
      >
        View Details
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}
