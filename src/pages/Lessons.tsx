import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, CheckCircle } from "lucide-react";

const Lessons = () => {
  const courses = [
    {
      level: "Beginner",
      title: "Forex Trading Fundamentals",
      duration: "4 weeks",
      lessons: 12,
      description: "Master the basics of Forex trading, from understanding currency pairs to placing your first trade.",
      topics: [
        "Introduction to Forex Markets",
        "Understanding Currency Pairs",
        "Reading Forex Charts",
        "Basic Trading Terminology",
        "Risk Management Basics",
        "Setting Up Your Trading Platform"
      ]
    },
    {
      level: "Intermediate",
      title: "Technical Analysis Mastery",
      duration: "6 weeks",
      lessons: 18,
      description: "Learn advanced technical analysis techniques to identify high-probability trading opportunities.",
      topics: [
        "Chart Patterns Recognition",
        "Indicator Strategies",
        "Support and Resistance Levels",
        "Fibonacci Retracements",
        "Candlestick Patterns",
        "Multiple Timeframe Analysis"
      ]
    },
    {
      level: "Advanced",
      title: "Professional Trading Strategies",
      duration: "8 weeks",
      lessons: 24,
      description: "Develop professional-grade trading strategies and learn to trade like institutional traders.",
      topics: [
        "Price Action Trading",
        "Order Flow Analysis",
        "Market Structure",
        "Smart Money Concepts",
        "Advanced Risk Management",
        "Building Trading Systems"
      ]
    }
  ];

  const features = [
    {
      icon: Video,
      title: "HD Video Lessons",
      description: "Professional video tutorials with screen recordings and live trading examples"
    },
    {
      icon: FileText,
      title: "Comprehensive PDFs",
      description: "Downloadable guides, cheat sheets, and reference materials for offline study"
    },
    {
      icon: BookOpen,
      title: "Interactive Quizzes",
      description: "Test your knowledge with quizzes after each lesson to reinforce learning"
    },
    {
      icon: CheckCircle,
      title: "Certificate of Completion",
      description: "Earn certificates upon course completion to showcase your trading education"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Forex Trading Lessons
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive trading education from beginner to advanced levels. Learn at your own pace with our structured curriculum.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Learning Today
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Course Catalog
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {course.level}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {course.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-foreground text-sm">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of successful traders who learned with Rahilu Forex Trading
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Full Access
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lessons;