import { Briefcase, MapPin, Search, Building2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { JobDetailsModal } from '../components/modals/JobDetailsModal';
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: "Indigenous Professionals - Various Positions",
    company: "Enbridge",
    location: "Across Canada",
    type: "Full-time",
    union: "Non-union",
    category: "Multiple Departments",
    salaryRange: "Competitive",
    closingDate: "June 29, 2026",
    postedDate: "2 days ago",
    isActive: true,
    featured: true,
    description: "Seeking Indigenous professionals in Engineering, IT, Pipeline Operations, Accounting, and Business roles.",
    fullDescription: "Enbridge is seeking Indigenous professionals in various positions. If you'd like to be connected with our Indigenous Recruitment Advisor who can reach out to you with future opportunities across Canada that fit your skill set, please apply today!",
    about: "Enbridge is committed to growing the representation of Indigenous peoples in its workplace. We seek to build long-term, tangible economic benefits, and career opportunities for members of Indigenous communities and tribal groups.",
    preferredCandidate: true,
    preferredText: "Preference may be given to candidates who identify as Indigenous (First Nations, Métis, Inuit)",
    positions: [
      {
        category: "Engineering",
        roles: ["Civil Engineers", "Mechanical Engineers", "Electrical Engineers"]
      },
      {
        category: "Information Systems",
        roles: ["Systems Analysts", "Business Analysts", "Developers"]
      },
      {
        category: "Pipeline Operations",
        roles: ["Electrical Technicians", "Mechanical Technicians", "Plant Operators", "System Operators", "Environment & Safety Advisors", "Pipeline Maintenance Personnel"]
      },
      {
        category: "Accounting",
        roles: ["Accounting Analysts", "Financial Analysts", "Internal Auditors", "Tax Accountants"]
      },
      {
        category: "Business",
        roles: ["Human Resources", "Information Technology", "Contracting & Procurement", "Administrative Professionals"]
      }
    ],
    benefits: [
      "Competitive Total Compensation package",
      "Flexible benefits and career development",
      "Indigenous Employee Resource Group",
      "Community engagement opportunities",
      "Culture awareness programs"
    ],
    companyWebsite: "www.enbridge.com"
  },
  {
    id: 2,
    title: "Indigenous Monitor - Sunrise Expansion Program",
    company: "Westcoast Energy (Enbridge)",
    location: "Various worksites in British Columbia",
    type: "Contract",
    union: "Non-union",
    category: "Pipeline Operations",
    salaryRange: "Varies with experience",
    closingDate: "March 31, 2026",
    postedDate: "1 week ago",
    isActive: true,
    featured: true,
    description: "Temporary Indigenous monitors needed to ensure environmental and cultural values are protected during pipeline construction.",
    fullDescription: "Westcoast Energy Limited Partnership is seeking temporary Indigenous monitors for the Sunrise Expansion Program. The Project involves pipeline loops and additional compression along the southern section of the Westcoast natural gas pipeline system, from southwest of Chetwynd to the Canada-United States border near Sumas, B.C.",
    about: "The Indigenous monitor observes, identifies, and reports potential risks to land, water, wildlife, and culturally sensitive areas during construction. Working daily with an Indigenous coordinator and construction crew, monitors integrate Indigenous knowledge and traditional land use considerations into field monitoring.",
    preferredCandidate: true,
    preferredText: "Subcontractor opportunity for Indigenous group or affiliated company. Individuals with deep knowledge of local Indigenous cultural values are encouraged to apply.",
    positions: [
      {
        category: "Key Responsibilities",
        roles: [
          "Observe and document construction activities to ensure protection of environmental and cultural values",
          "Act as liaison between Indigenous communities and Project team",
          "Provide daily written reports for submission to Indigenous coordinator",
          "Share observations and Indigenous knowledge with construction crew"
        ]
      },
      {
        category: "Qualifications",
        roles: [
          "Deep knowledge of local Indigenous cultural values (encouraged)",
          "Strong observational, communication, and reporting skills",
          "Experience with construction, field work, or linear projects (asset)",
          "Physically fit, able to hike in steep and rough terrain all day",
          "Pass drug and alcohol pre-access test within 30 days prior to access"
        ]
      },
      {
        category: "Work Schedule",
        roles: [
          "10-12 hours per day, up to 6 days per week on rotation",
          "Work rotation decided by Indigenous group or affiliated company",
          "Approximate start: April – June 2026",
          "Travel and accommodation will be provided"
        ]
      }
    ],
    benefits: [
      "All safety training provided (Enbridge Contractor Safety Orientation, Ground Disturbance, Wildlife Awareness, etc.)",
      "Personal Protective Equipment (PPE) provided if necessary",
      "Travel and accommodation provided",
      "No prior technical experience required",
      "Special assistance may be arranged with advanced notice"
    ],
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

  const handleViewDetails = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-b">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Find your next opportunity
          </h1>
          <p className="text-muted-foreground">
            Browse our latest job openings to view & apply to the best jobs today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-64 flex-shrink-0">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground">Filter</h3>
                  <Button variant="ghost" size="sm" className="text-primary h-auto p-0">
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

            {/* Job Listings */}
            <div className="flex-1">
              {/* Search Bar */}
              <Card className="p-4 mb-6 bg-card">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 flex-1 px-3 border rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search job title or keyword"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-0 shadow-none p-0 h-9 focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="flex items-center gap-2 flex-1 px-3 border rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Country or timezone"
                      className="border-0 shadow-none p-0 h-9 focus-visible:ring-0 bg-transparent"
                    />
                  </div>
                  <Button className="px-8">Find jobs</Button>
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
                    className="p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer bg-card"
                    onClick={() => handleViewDetails(job)}
                  >
                    <div className="flex gap-4">
                      {/* Company Logo */}
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-primary-foreground" />
                      </div>

                      {/* Job Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className="text-sm text-muted-foreground">{job.company}</span>
                          <span className="text-muted-foreground">•</span>
                          <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                          {job.featured && (
                            <>
                              <span className="text-muted-foreground">•</span>
                              <Badge className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-0 text-xs">
                                Featured
                              </Badge>
                            </>
                          )}
                          {job.preferredCandidate && (
                            <>
                              <span className="text-muted-foreground">•</span>
                              <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-0 text-xs">
                                Indigenous Preferred
                              </Badge>
                            </>
                          )}
                        </div>
                        <ul className="space-y-1">
                          <li className="text-sm text-muted-foreground">• {job.description}</li>
                          {job.salaryRange && (
                            <li className="text-sm text-muted-foreground">• Salary: {job.salaryRange}</li>
                          )}
                        </ul>
                      </div>

                      {/* Location & Time */}
                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-sm text-foreground mb-2">
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
