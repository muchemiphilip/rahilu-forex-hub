import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Target, Users, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower traders with the knowledge, tools, and support needed to achieve financial independence through Forex trading."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in trading education and signal accuracy, ensuring our members receive premium quality service."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of traders who learn, grow, and succeed together in the dynamic Forex market."
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Focused on delivering consistent, measurable results through proven strategies and real-time market analysis."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Rahilu Forex Trading
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded with a vision to democratize Forex trading education, Rahilu Forex Trading has grown into a trusted platform serving thousands of traders worldwide. We combine expert analysis, comprehensive education, and cutting-edge trading signals to help our members navigate the complex world of currency trading.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Rahilu Forex Trading was born from a simple observation: too many aspiring traders were losing money due to lack of proper education and guidance. Our founders, seasoned traders with decades of combined experience, decided to create a platform that would change this narrative.
            </p>
            <p>
              What started as a small trading group has evolved into a comprehensive trading education and signal service. We've helped thousands of traders transform their approach to the Forex market, turning uncertainty into confidence and losses into consistent gains.
            </p>
            <p>
              Today, we stand as one of the leading Forex education platforms, known for our transparency, accuracy, and commitment to our members' success. Our track record speaks for itself - with a community of active traders achieving their financial goals through disciplined application of our strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Traders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Trading Signals/Month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;