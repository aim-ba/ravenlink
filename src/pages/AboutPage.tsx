import { Target, Heart, Award, MapPin } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Raven
          </h1>
          <p className="text-xl text-muted-foreground">
            Indigenous Opportunities & Contracting System
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Raven is dedicated to facilitating meaningful Indigenous engagement and
              transparent ESG reporting for major infrastructure projects across the region.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We connect Indigenous communities with employment opportunities, track workforce
              development, and provide comprehensive reporting tools to ensure transparent
              and accountable participation in infrastructure development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Community First</h3>
              </div>
              <p className="text-muted-foreground">
                We prioritize the needs and interests of Indigenous communities, ensuring
                their voices are heard and their participation is meaningful.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
              </div>
              <p className="text-muted-foreground">
                We maintain the highest standards in workforce development, tracking,
                and reporting to support successful outcomes for all stakeholders.
              </p>
            </div>
          </div>

          {/* Organization Info */}
          <div className="bg-muted/30 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Operated by AiM</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              AiM Land and Environment is committed to supporting Indigenous communities
              through innovative technology solutions and meaningful engagement opportunities.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong className="text-foreground">Contact:</strong> lisah.peterson@aimlandandenviro.ca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Relationship Building
              </h3>
              <p className="text-sm text-muted-foreground">
                Creating lasting partnerships between communities and industry
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Transparency
              </h3>
              <p className="text-sm text-muted-foreground">
                Clear, honest communication and comprehensive reporting
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Growth
              </h3>
              <p className="text-sm text-muted-foreground">
                Supporting skills development and career advancement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
