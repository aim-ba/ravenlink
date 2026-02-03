import { Briefcase, MapPin, Search, Building2, Filter, X } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { JobDetailsModal } from '../components/modals/JobDetailsModal';
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: "Indigenous Employment Program - Various Positions",
    company: "Enbridge",
    location: "Canada-Wide",
    type: "Regular-Full time",
    union: "This is a non-union position",
    category: "Multiple Departments",
    salaryRange: "Competitive Total Compensation package",
    closingDate: "June 29, 2026",
    postedDate: "2 days ago",
    isActive: true,
    featured: true,
    description: "Enbridge is seeking Indigenous professionals in various positions. If you'd like to be connected with our Indigenous Recruitment Advisor who can reach out to you with future opportunities across Canada that fit your skill set, please apply today!",
    fullDescription: "Enbridge is committed to growing the representation of Indigenous peoples in its workplace. We seek to build long-term, tangible economic benefits, and career opportunities for members of Indigenous communities and tribal groups. This commitment aligns with the principles in our Indigenous Peoples Policy and ensures the representation of our workforce better matches the makeup of the communities where we work.",
    whatYouWillDo: [
      "Our culture is a welcoming, respectful team environment where everyone is committed to helping each other feel energized, valued, and appreciated. This is the spirit that moves our company forward, improving and building our inclusive environment.",
      "Our business approach is guided by our values of Safety, Integrity, Respect, and Inclusion. These values help us to establish trust with our people, customers, and the hundreds of communities we serve across North America. We believe strongly in supporting the communities where we live and operate-by giving back and contributing to their strength and vitality.",
      "Enbridge believes in sharing the success of our company with the people who make it happen - our employees. Our competitive and flexible Total Compensation package - which includes compensation, benefits, career development and paid time off - allows each employee to choose the plan that best suits their needs.",
      "We also have an Indigenous Employee Resource Group that strives to build a safe place for Indigenous and non-indigenous employees to share, learn and grow together. This group provides employees support in their personal and professional journeys through community engagement, celebrating culture awareness and engaging in Indigenous activities."
    ],
    whoYouAre: [
      "We are looking for people of all abilities, experience and skill levels who share our passion to be the best in everything we do, from safe and reliable operations, to sophisticated solutions for our customers and our communities.",
      "Our team requires people who possess strong leadership qualities, high initiative, outstanding technical and analytical abilities, and strong planning, organization, communication, and interpersonal skills."
    ],
    preferredCandidate: true,
    preferredText: "Preference may be given to a candidate who identifies as Indigenous (First Nations, Metis, Inuit).",
    positions: [
      {
        category: "Engineering",
        roles: ["Civil engineers", "Mechanical engineers", "Electrical engineers"]
      },
      {
        category: "Information Systems",
        roles: ["Systems analysts", "Business analysts", "Developers"]
      },
      {
        category: "Pipeline Operations",
        roles: ["Electrical technicians", "Mechanical technicians", "Plant operators", "System operators", "Environment and Safety advisors", "Pipeline maintenance personnel"]
      },
      {
        category: "Accounting",
        roles: ["Accounting analysts", "Financial analysts", "Internal auditors", "Tax accountants"]
      },
      {
        category: "Business",
        roles: ["Human Resources", "Information Technology", "Contracting and Procurement", "Administrative Professionals"]
      }
    ],
    additionalInfo: [
      "Applications can be submitted via our online recruiting system only.",
      "We appreciate your interest in working with us; however, only those applicants selected for interviews will be contacted.",
      "Final candidates for this position may be required to undergo a security screening, including a criminal records check."
    ],
    equalOpportunity: "At Enbridge, we are dedicated to our core value of Inclusion. We are proud to be an Equal Opportunity Employer. We are committed to providing employment opportunities to all qualified individuals, without regard to age, race, color, national or ethnic origin, religion, sex, sexual orientation, gender identity or expression, marital status, family status, veteran status, Indigenous status, disability, or any other reason protected by federal, state, or local law. Applicants with disabilities can request accessible formats, communication supports, or other accessibility assistance by contacting careers@enbridge.com.",
    hashtags: ["#joinourteam", "#LI-Hybrid"],
    companyWebsite: "www.enbridge.com"
  },

];

const categories = ["All", "Engineering", "Information Systems", "Pipeline Operations", "Accounting", "Business"];
const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Temporary"];

export function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleViewDetails = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedType("All");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-card border-b">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Find your next opportunity
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Browse our latest job openings to view & apply to the best jobs today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground">Filter</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary h-auto p-0"
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-foreground mb-3">Job Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div>
                  <h4 className="font-medium text-sm text-foreground mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                        <input
                          type="radio"
                          name="type"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(type)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </Card>
            </aside>

            {/* Mobile Filters - Collapsible */}
            {mobileFiltersOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
                <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-card border-r shadow-lg">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-semibold text-foreground text-lg">Filters</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMobileFiltersOpen(false)}
                      className="h-auto p-2"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="p-6 overflow-y-auto max-h-[calc(100vh-80px)]">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mb-6"
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </Button>

                    {/* Category Filter */}
                    <div className="mb-6">
                      <h4 className="font-medium text-sm text-foreground mb-3">Job Category</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                            <input
                              type="radio"
                              name="category-mobile"
                              checked={selectedCategory === category}
                              onChange={() => setSelectedCategory(category)}
                              className="w-4 h-4 text-primary focus:ring-primary"
                            />
                            <span className="text-sm text-muted-foreground">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Job Type Filter */}
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-3">Job Type</h4>
                      <div className="space-y-2">
                        {jobTypes.map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                            <input
                              type="radio"
                              name="type-mobile"
                              checked={selectedType === type}
                              onChange={() => setSelectedType(type)}
                              className="w-4 h-4 text-primary focus:ring-primary"
                            />
                            <span className="text-sm text-muted-foreground">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Job Listings */}
            <div className="flex-1 min-w-0">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                  {(selectedCategory !== "All" || selectedType !== "All") && (
                    <Badge className="ml-2 bg-primary text-primary-foreground">
                      Active
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Search Bar */}
              <Card className="p-4 mb-6 bg-card">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 flex-1 px-3 border rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <Input
                      type="text"
                      placeholder="Search job title or keyword"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-0 shadow-none p-0 h-9 focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="flex items-center gap-2 flex-1 px-3 border rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <Input
                      type="text"
                      placeholder="Country or timezone"
                      className="border-0 shadow-none p-0 h-9 focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <Button className="px-8 w-full sm:w-auto">Find jobs</Button>
                </div>
              </Card>

              <p className="text-sm text-muted-foreground mb-4">
                {jobs.length} Jobs results
              </p>

              {/* Job Cards */}
              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card
                    key={job.id}
                    className="p-4 sm:p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer bg-card"
                    onClick={() => handleViewDetails(job)}
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex gap-4 flex-1 min-w-0">
                        {/* Company Logo */}
                        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-primary-foreground" />
                        </div>

                        {/* Job Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <span className="text-sm text-muted-foreground">{job.company}</span>
                            <span className="text-muted-foreground hidden sm:inline">•</span>
                            <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                            {job.featured && (
                              <>
                                <span className="text-muted-foreground hidden sm:inline">•</span>
                                <Badge className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-0 text-xs">
                                  Featured
                                </Badge>
                              </>
                            )}
                            {job.preferredCandidate && (
                              <>
                                <span className="text-muted-foreground hidden sm:inline">•</span>
                                <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-0 text-xs">
                                  Indigenous Preferred
                                </Badge>
                              </>
                            )}
                          </div>
                          <ul className="space-y-1">
                            <li className="text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">
                              • {job.description}
                            </li>
                            {job.salaryRange && (
                              <li className="text-sm text-muted-foreground">• Salary: {job.salaryRange}</li>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Location & Time */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:text-right flex-shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0">
                        <div className="flex items-center gap-1.5 text-sm text-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Posted {job.postedDate}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {jobs.length === 0 && (
                <div className="text-center py-16">
                  <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <JobDetailsModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
