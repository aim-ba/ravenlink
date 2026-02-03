import { Building2, MapPin, Briefcase, Users, Calendar, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  union: string;
  category: string;
  salaryRange: string;
  closingDate: string;
  postedDate: string;
  isActive: boolean;
  featured: boolean;
  description: string;
  fullDescription: string;
  whatYouWillDo: string[];
  whoYouAre: string[];
  preferredCandidate: boolean;
  preferredText: string;
  positions: Array<{
    category: string;
    roles: string[];
  }>;
  additionalInfo: string[];
  equalOpportunity: string;
  hashtags: string[];
  companyWebsite: string;
};

type JobDetailsModalProps = {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
};

export function JobDetailsModal({ job, isOpen, onClose }: JobDetailsModalProps) {
  if (!job) return null;

  const formRedirect = "https://www.fastfieldwebforms.com/us/webforms/a7353059-48e7-4359-a410-7b12a14ae137?fffcb=1764964351277";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6" showCloseButton={false}>
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute h-8 w-8 z-50 right-2 top-2 sm:right-4 sm:top-4"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>

        <DialogHeader className="space-y-3 pr-8">
          <div className="flex items-center gap-2 flex-wrap">
            {job.featured && (
              <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">Featured</Badge>
            )}
            {job.preferredCandidate && (
              <Badge variant="outline" className="border-green-500 text-green-700 text-xs px-2 py-1">
                Indigenous Preferred
              </Badge>
            )}
          </div>
          <DialogTitle className="text-xl sm:text-2xl pr-4">{job.title}</DialogTitle>
          <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
            <Building2 className="w-4 h-4 flex-shrink-0" />
            <span className="font-semibold">{job.company}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{job.union}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Closes: {job.closingDate}</span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 pt-4 sm:pt-6">
          {/* Job Description */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Job Description</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{job.fullDescription}</p>
          </div>

          <Separator />

          {/* What You Will Do */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">What you will do:</h3>
            <div className="space-y-3">
              {job.whatYouWillDo.map((paragraph, index) => (
                <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Separator />

          {/* Who You Are */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Who you are:</h3>
            <div className="space-y-3">
              {job.whoYouAre.map((paragraph, index) => (
                <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Separator />

          {/* Position Categories */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">
              We frequently seek qualified candidates in the following functional areas:
            </h3>
            <div className="space-y-3">
              {job.positions.map((position, index) => (
                <div key={index} className="p-3 border rounded-lg bg-muted/30">
                  <h4 className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {position.category}
                  </h4>
                  <ul className="space-y-0.5 ml-4">
                    {position.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="text-xs text-muted-foreground">
                        • {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Indigenous Preference */}
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Indigenous Preference</h4>
                <p className="text-xs text-muted-foreground">{job.preferredText}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Information for Applicants */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Information For Applicants:</h3>
            <ul className="space-y-2">
              {job.additionalInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{info}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Equal Opportunity Statement */}
          <div className="bg-muted/30 border rounded-lg p-4">
            <p className="text-xs text-muted-foreground leading-relaxed">{job.equalOpportunity}</p>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2">
            {job.hashtags.map((hashtag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {hashtag}
              </Badge>
            ))}
          </div>

          {/* Apply Button */}
          <div className="flex flex-col gap-3 pt-2">
            <Button asChild className="w-full">
              <a href={formRedirect} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Company Website */}
          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground text-center">
              To learn more about us, visit{' '}
              <a
                href={`https://${job.companyWebsite}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {job.companyWebsite}
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
