import { useState } from 'react';
import { X, Upload, Loader2 } from 'lucide-react';
import { applicationsAPI, handleAPIError } from '../lib/api';
import type { Job } from '../lib/api';

type ApplicationModalProps = {
  job: Job;
  onClose: () => void;
  onSuccess: () => void;
};

export function ApplicationModal({ job, onClose, onSuccess }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    // Personal Information
    applicant_name: '',
    date_of_birth: '',
    phone: '',
    email: '',
    mailing_address: '',
    self_identify_indigenous: false,
    // Accessibility
    need_resume_help: false,
    has_transportation: false,
    need_ppe: false,
    seeking_training: false,
    employment_barriers: '',
    // Employment Preferences
    areas_of_interest: '',
    other_interest: '',
    project: '',
    other_project: '',
    preferred_location: '',
    other_location: '',
    available_start_date: '',
    // Skills & Experience
    cover_letter: '',
    education_level: '',
    certificates: '',
    years_experience: '',
    // Indigenous Participation
    band_affiliation: '',
    other_affiliation: '',
    indigenous_community_contact: '',
    interested_community_monitor: false,
    // Consent
    consent_acknowledged: false,
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a PDF or Word document');
        return;
      }
      setResumeFile(file);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.consent_acknowledged) {
      setError('Please acknowledge the consent statement');
      return;
    }

    if (!resumeFile) {
      setError('Please upload your resume');
      return;
    }

    setLoading(true);

    try {
      // Create FormData for multipart/form-data submission
      const submitData = new FormData();

      // Add the resume file
      submitData.append('resume', resumeFile);

      // Add all form fields
      submitData.append('job_id', job.id);
      submitData.append('applicant_name', formData.applicant_name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('cover_letter', formData.cover_letter);
      submitData.append('consent_acknowledged', String(formData.consent_acknowledged));
      submitData.append('self_identify_indigenous', String(formData.self_identify_indigenous));
      submitData.append('need_resume_help', String(formData.need_resume_help));
      submitData.append('has_transportation', String(formData.has_transportation));
      submitData.append('need_ppe', String(formData.need_ppe));
      submitData.append('seeking_training', String(formData.seeking_training));
      submitData.append('interested_community_monitor', String(formData.interested_community_monitor));

      // Add optional fields (only if not empty)
      if (formData.date_of_birth) submitData.append('date_of_birth', formData.date_of_birth);
      if (formData.mailing_address) submitData.append('mailing_address', formData.mailing_address);
      if (formData.employment_barriers) submitData.append('employment_barriers', formData.employment_barriers);
      if (formData.areas_of_interest) submitData.append('areas_of_interest', formData.areas_of_interest);
      if (formData.other_interest) submitData.append('other_interest', formData.other_interest);
      if (formData.project) submitData.append('project', formData.project);
      if (formData.other_project) submitData.append('other_project', formData.other_project);
      if (formData.preferred_location) submitData.append('preferred_location', formData.preferred_location);
      if (formData.other_location) submitData.append('other_location', formData.other_location);
      if (formData.available_start_date) submitData.append('available_start_date', formData.available_start_date);
      if (formData.education_level) submitData.append('education_level', formData.education_level);
      if (formData.certificates) submitData.append('certificates', formData.certificates);
      if (formData.years_experience) submitData.append('years_experience', formData.years_experience);
      if (formData.band_affiliation) submitData.append('band_affiliation', formData.band_affiliation);
      if (formData.other_affiliation) submitData.append('other_affiliation', formData.other_affiliation);
      if (formData.indigenous_community_contact) submitData.append('indigenous_community_contact', formData.indigenous_community_contact);

      const { error: submitError } = await applicationsAPI.submitApplication(submitData);

      if (submitError) {
        throw new Error(submitError);
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary">Employment Interest Form</h2>
            <p className="text-gray-600 mt-1">{job.title} at {job.company}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Personal Information */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-primary border-b border-brand-primary/20 pb-2">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name (First, Last) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.applicant_name}
                  onChange={(e) => setFormData({ ...formData, applicant_name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth (MM/DD/YYYY)
                </label>
                <input
                  type="date"
                  value={formData.date_of_birth}
                  onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mailing Address (Street, City/Town, Province, Postal Code)
              </label>
              <textarea
                value={formData.mailing_address}
                onChange={(e) => setFormData({ ...formData, mailing_address: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="indigenous"
                checked={formData.self_identify_indigenous}
                onChange={(e) => setFormData({ ...formData, self_identify_indigenous: e.target.checked })}
                className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
              />
              <label htmlFor="indigenous" className="ml-2 text-sm font-medium text-gray-700">
                Do you self identify as Indigenous?
              </label>
            </div>
          </section>

          {/* Accessibility */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-primary border-b border-brand-primary/20 pb-2">
              Accessibility
            </h3>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="resume_help"
                  checked={formData.need_resume_help}
                  onChange={(e) => setFormData({ ...formData, need_resume_help: e.target.checked })}
                  className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                />
                <label htmlFor="resume_help" className="ml-2 text-sm text-gray-700">
                  Do you need help with creating a resume?
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="transportation"
                  checked={formData.has_transportation}
                  onChange={(e) => setFormData({ ...formData, has_transportation: e.target.checked })}
                  className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                />
                <label htmlFor="transportation" className="ml-2 text-sm text-gray-700">
                  Do you have transportation to and from work?
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ppe"
                  checked={formData.need_ppe}
                  onChange={(e) => setFormData({ ...formData, need_ppe: e.target.checked })}
                  className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                />
                <label htmlFor="ppe" className="ml-2 text-sm text-gray-700">
                  Are you in need of PPE?
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="training"
                  checked={formData.seeking_training}
                  onChange={(e) => setFormData({ ...formData, seeking_training: e.target.checked })}
                  className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                />
                <label htmlFor="training" className="ml-2 text-sm text-gray-700">
                  Are you seeking training opportunities linked to employment on this project?
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Are there any other barriers for you to obtain employment?
              </label>
              <textarea
                value={formData.employment_barriers}
                onChange={(e) => setFormData({ ...formData, employment_barriers: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
              />
            </div>
          </section>

          {/* Employment Preferences */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-primary border-b border-brand-primary/20 pb-2">
              Employment Preferences
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Employment Interest
                </label>
                <input
                  type="text"
                  value={formData.areas_of_interest}
                  onChange={(e) => setFormData({ ...formData, areas_of_interest: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Please Specify Other Interest
                </label>
                <input
                  type="text"
                  value={formData.other_interest}
                  onChange={(e) => setFormData({ ...formData, other_interest: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project
                </label>
                <input
                  type="text"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Please Specify Other Project
                </label>
                <input
                  type="text"
                  value={formData.other_project}
                  onChange={(e) => setFormData({ ...formData, other_project: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Work Location
                </label>
                <input
                  type="text"
                  value={formData.preferred_location}
                  onChange={(e) => setFormData({ ...formData, preferred_location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Please Specify Other Location
                </label>
                <input
                  type="text"
                  value={formData.other_location}
                  onChange={(e) => setFormData({ ...formData, other_location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available to Start *
              </label>
              <input
                type="date"
                required
                value={formData.available_start_date}
                onChange={(e) => setFormData({ ...formData, available_start_date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
          </section>

          {/* Skills & Experience */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-primary border-b border-brand-primary/20 pb-2">
              Skills & Experience
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Resume
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-brand-primary/40 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-primary-light">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF or Word document up to 5MB</p>
                  {resumeFile && (
                    <p className="text-sm text-green-600 font-medium mt-2">
                      Selected: {resumeFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Highest Level of Education Completed
                </label>
                <select
                  value={formData.education_level}
                  onChange={(e) => setFormData({ ...formData, education_level: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="high_school">High School</option>
                  <option value="college">College</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Relevant Experience
                </label>
                <select
                  value={formData.years_experience}
                  onChange={(e) => setFormData({ ...formData, years_experience: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Relevant Certificates / Tickets *
              </label>
              <textarea
                required
                value={formData.certificates}
                onChange={(e) => setFormData({ ...formData, certificates: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                placeholder="List any relevant certifications, licenses, or tickets..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter
              </label>
              <textarea
                value={formData.cover_letter}
                onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>
          </section>

          {/* Indigenous Participation - Conditional */}
          {formData.self_identify_indigenous && (
            <section className="space-y-4 bg-brand-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-primary border-b border-brand-primary/20 pb-2">
                Indigenous Participation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Band Affiliation
                  </label>
                  <input
                    type="text"
                    value={formData.band_affiliation}
                    onChange={(e) => setFormData({ ...formData, band_affiliation: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Please Specify Other Affiliation
                  </label>
                  <input
                    type="text"
                    value={formData.other_affiliation}
                    onChange={(e) => setFormData({ ...formData, other_affiliation: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Please provide the name of your Indigenous community contact
                </label>
                <input
                  type="text"
                  value={formData.indigenous_community_contact}
                  onChange={(e) => setFormData({ ...formData, indigenous_community_contact: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="community_monitor"
                  checked={formData.interested_community_monitor}
                  onChange={(e) => setFormData({ ...formData, interested_community_monitor: e.target.checked })}
                  className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                />
                <label htmlFor="community_monitor" className="ml-2 text-sm text-gray-700">
                  Are you interested in participating as a Community Monitor?
                </label>
              </div>
            </section>
          )}

          {/* Consent & Acknowledgement */}
          <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-brand-primary border-b border-brand-primary/20 pb-2">
              Consent & Acknowledgement
            </h3>

            <div className="text-sm text-gray-700 space-y-2">
              <p>
                By submitting your information, you consent to AiM collecting and using your personal details
                for recruitment and engagement purposes. Your information may be shared with partnering organizations
                or employers for employment and training opportunities. We are committed to protecting your privacy —
                your data will be stored securely and only used in accordance with our Privacy Policy. You may withdraw
                your consent at any time by contacting us at lpeterson@aimland.ca
              </p>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consent_acknowledged}
                onChange={(e) => setFormData({ ...formData, consent_acknowledged: e.target.checked })}
                className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary mt-1"
              />
              <label htmlFor="consent" className="ml-2 text-sm font-medium text-gray-700">
                I confirm the information provided is true and accurate. *
              </label>
            </div>
          </section>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-hover transition-colors font-medium disabled:bg-brand-primary/60 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
