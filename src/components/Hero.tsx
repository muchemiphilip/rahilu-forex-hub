import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Forex Trading Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-success/10 border border-success/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">
              Join 10,000+ Profitable Traders
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Forex.
            <br />
            <span className="text-primary">Master Your Future.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Automated trading bots, live signals, and expert mentorship to grow your profits.
            Start your journey to financial freedom with Rahilu Forex Trading.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              Explore Plans
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-success">$2M+</div>
              <div className="text-sm text-muted-foreground mt-1">Profits Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Traders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
