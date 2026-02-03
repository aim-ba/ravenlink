import { Plus, Edit, Trash2, Eye, EyeOff, Briefcase, FolderKanban, Users } from 'lucide-react';
import type { Job, UserProfile } from '../../lib/api';

type OpportunitiesTabProps = {
  jobs: (Job & { creator?: UserProfile })[];
  onCreateNew: () => void;
  onEdit: (job: Job) => void;
  onDelete: (jobId: string) => void;
  onToggleStatus: (job: Job) => void;
  onManageAccess?: (job: Job) => void;
};

export function OpportunitiesTab({
  jobs,
  onCreateNew,
  onEdit,
  onDelete,
  onToggleStatus,
  onManageAccess
}: OpportunitiesTabProps) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Manage Opportunities</h2>
        <button
          onClick={onCreateNew}
          className="flex items-center px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-hover transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Opportunity
        </button>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-12">
          <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">No opportunities created yet</p>
          <button
            onClick={onCreateNew}
            className="text-brand-primary hover:text-brand-primary-hover font-medium"
          >
            Create your first opportunity
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.is_active
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {job.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {job.company} • {job.location} • {job.type}
                  </p>
                  {job.salary_range && (
                    <p className="text-sm text-gray-500 mb-2">Salary: {job.salary_range}</p>
                  )}
                  {job.projects && job.projects.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {job.projects.map((project: any) => (
                        <span
                          key={project.id}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700"
                        >
                          <FolderKanban className="w-3 h-3 mr-1" />
                          {project.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-500">
                    Organization: {job.proponent_organization || 'N/A'} •{' '}
                    Posted: {new Date(job.posted_date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  {onManageAccess && (
                    <button
                      onClick={() => onManageAccess(job)}
                      className="p-2 text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded transition-colors"
                      title="Manage Contractor Access"
                    >
                      <Users className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => onToggleStatus(job)}
                    className="p-2 text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded transition-colors"
                    title={job.is_active ? 'Deactivate' : 'Activate'}
                  >
                    {job.is_active ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => onEdit(job)}
                    className="p-2 text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(job.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
