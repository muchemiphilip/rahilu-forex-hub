import { Bot, Users, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Automated Trading Bots",
    description: "Our AI-powered bots trade 24/7, capturing opportunities while you sleep.",
  },
  {
    icon: TrendingUp,
    title: "Live Trading Signals",
    description: "Real-time signals from expert traders with proven track records.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from seasoned traders with years of profitable experience.",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Bank-level security with transparent results and verified testimonials.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Rahilu Forex Trading</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in the global Forex market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <div className="bg-gradient-premium rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
