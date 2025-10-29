import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, Video, CheckCircle, Play } from "lucide-react";

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "Advanced Price Action Strategies",
      date: "March 15, 2025",
      time: "2:00 PM EST",
      duration: "90 minutes",
      spots: "45 spots left",
      instructor: "John Smith",
      topics: ["Reading market structure", "Supply and demand zones", "Entry and exit techniques", "Live trading demo"]
    },
    {
      title: "Risk Management Masterclass",
      date: "March 22, 2025",
      time: "3:00 PM EST",
      duration: "120 minutes",
      spots: "32 spots left",
      instructor: "Sarah Johnson",
      topics: ["Position sizing", "Portfolio management", "Stop loss strategies", "Risk-reward optimization"]
    },
    {
      title: "Trading Psychology Workshop",
      date: "March 29, 2025",
      time: "1:00 PM EST",
      duration: "90 minutes",
      spots: "28 spots left",
      instructor: "Michael Chen",
      topics: ["Emotional control", "Discipline techniques", "Building confidence", "Handling losses"]
    }
  ];

  const pastWebinars = [
    {
      title: "Introduction to Forex Trading",
      views: "2,450",
      duration: "85 min",
      rating: "4.9"
    },
    {
      title: "Technical Indicators Deep Dive",
      views: "1,890",
      duration: "105 min",
      rating: "4.8"
    },
    {
      title: "Market Analysis Techniques",
      views: "2,120",
      duration: "95 min",
      rating: "4.9"
    }
  ];

  const benefits = [
    "Live Q&A sessions with expert traders",
    "Downloadable presentation materials",
    "Certificate of attendance",
    "Access to recording for 30 days",
    "Exclusive member community access",
    "Follow-up resources and templates"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Live Forex Trading Webinars
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn from expert traders in interactive live sessions. Ask questions, get answers, and level up your trading skills.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View Schedule
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Upcoming Webinars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {webinar.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{webinar.spots}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Video className="w-4 h-4 text-primary" />
                      <span>Instructor: {webinar.instructor}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {webinar.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full">Register Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Watch Past Webinars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">
                    {webinar.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{webinar.views} views</span>
                    <span>{webinar.duration}</span>
                    <span>⭐ {webinar.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Never Miss a Webinar
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to get notified about upcoming webinars and exclusive trading content
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinars;