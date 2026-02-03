import { Users, Handshake, Shield, BarChart3 } from 'lucide-react';
import { Card } from '../ui/card';

export function Features() {
  return (
    <>
      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              Raven Designed
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
              Experience that grows with your community.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Design a financial operating system that meets the unique needs of your business and streamlines cash flow.
            </p>
          </div>

          {/* 3 Feature Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Community involvement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Engaging local vendors supports economic growth and strengthens communities within Traditional Territories.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Indigenous collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building partnerships with Indigenous Communities ensures cultural sensitivity and mutual success.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Capacity alignment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pre-qualification ensures vendors have the capabilities to successfully complete project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why They Choose Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              Why us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Why they choose Raven
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Large Stat Card */}
            <Card className="p-12 text-center border-2">
              <div className="text-7xl font-bold text-primary mb-4">3k+</div>
              <div className="text-xl text-foreground font-semibold">
                Indigenous workers placed
              </div>
              <div className="text-muted-foreground mt-2">
                on infrastructure projects
              </div>
            </Card>

            {/* Feature Cards */}
            <div className="space-y-6">
              <Card className="p-6 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      Real-time tracking
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Monitor Indigenous participation and ESG metrics in real-time across all your projects.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      Compliance made easy
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Automated ESG reporting ensures you meet all regulatory requirements effortlessly.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              Our impact
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              We've helped build stronger partnerships
            </h2>
            <p className="text-muted-foreground">
              Trusted by dozens of projects and communities across Traditional Territories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground mb-3">24%</div>
              <div className="text-muted-foreground">Increase in Indigenous participation</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground mb-3">180K</div>
              <div className="text-muted-foreground">Hours tracked and reported</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground mb-3">10+</div>
              <div className="text-muted-foreground">Traditional Territories served</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
