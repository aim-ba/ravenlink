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
  about: string;
  preferredCandidate: boolean;
  preferredText: string;
  positions: Array<{
    category: string;
    roles: string[];
  }>;
  benefits: string[];
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
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto" showCloseButton={false}>
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute h-8 w-8 z-50"
            style={{ right: '1rem', top: '1rem' }}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>

        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            {job.featured && (
              <Badge className="bg-primary text-primary-foreground text-xs px-2 py-2">Featured</Badge>
            )}
            {job.preferredCandidate && (
              <Badge variant="outline" className="border-green-500 text-green-700 text-xs px-2 py-2">
                Indigenous Preferred
              </Badge>
            )}
          </div>
          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
          <div className="flex items-center gap-2 text-base text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span className="font-semibold">{job.company}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-muted-foreground">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              <span className="text-muted-foreground">{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span className="text-muted-foreground">{job.union}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="text-muted-foreground">Closes: {job.closingDate}</span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 pt-6">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">About this Opportunity</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">{job.fullDescription}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{job.about}</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">Position Categories</h3>
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

          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">What We Offer</h3>
            <div className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Indigenous Preference</h4>
                <p className="text-xs text-muted-foreground">{job.preferredText}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Button asChild className="w-full">
              <a href={formRedirect} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
            {/*<Button variant="outline" className="w-full">
              Save for Later
            </Button>*/}
          </div>

          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground">
              Learn more at{' '}
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
