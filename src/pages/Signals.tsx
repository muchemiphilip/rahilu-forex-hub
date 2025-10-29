import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Bell, Target, Clock, CheckCircle, BarChart } from "lucide-react";

const Signals = () => {
  const features = [
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Receive instant notifications via Telegram, Email, and SMS when new signals are published"
    },
    {
      icon: Target,
      title: "85% Win Rate",
      description: "Our signals maintain a consistent 85% success rate based on our verified track record"
    },
    {
      icon: Clock,
      title: "24/5 Coverage",
      description: "Signals delivered during all major trading sessions: London, New York, and Asian markets"
    },
    {
      icon: TrendingUp,
      title: "Multiple Strategies",
      description: "Scalping, day trading, and swing trading signals to match your trading style"
    },
    {
      icon: BarChart,
      title: "Detailed Analysis",
      description: "Every signal includes entry points, take profit levels, stop loss, and market analysis"
    },
    {
      icon: CheckCircle,
      title: "Trade Management",
      description: "Receive updates for position modifications, partial profits, and trade exits"
    }
  ];

  const signalTypes = [
    {
      type: "Scalping Signals",
      frequency: "15-20 signals/day",
      timeframe: "1-15 minutes",
      profit: "10-20 pips per trade",
      description: "Quick trades for active traders who can monitor positions frequently"
    },
    {
      type: "Day Trading Signals",
      frequency: "5-10 signals/day",
      timeframe: "15min - 4 hours",
      profit: "30-50 pips per trade",
      description: "Intraday opportunities with positions closed before market close"
    },
    {
      type: "Swing Trading Signals",
      frequency: "3-5 signals/week",
      timeframe: "4 hours - Daily",
      profit: "100-200 pips per trade",
      description: "Multi-day positions capturing larger market movements"
    }
  ];

  const recentPerformance = [
    { pair: "EUR/USD", entry: "1.0850", tp: "1.0920", result: "+70 pips", status: "win" },
    { pair: "GBP/JPY", entry: "188.50", tp: "190.20", result: "+170 pips", status: "win" },
    { pair: "USD/CAD", entry: "1.3520", tp: "1.3450", result: "+70 pips", status: "win" },
    { pair: "AUD/USD", entry: "0.6580", tp: "0.6520", result: "-60 pips", status: "loss" },
    { pair: "EUR/GBP", entry: "0.8520", tp: "0.8580", result: "+60 pips", status: "win" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Forex Trading Signals
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Professional trading signals delivered in real-time. Join our community of successful traders achieving consistent profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Subscribe Now
            </Button>
            <Button size="lg" variant="outline">
              View Track Record
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose Our Signals?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signal Types */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Signal Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {signalTypes.map((signal, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {signal.type}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frequency:</span>
                    <span className="font-semibold text-foreground">{signal.frequency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Timeframe:</span>
                    <span className="font-semibold text-foreground">{signal.timeframe}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg Profit:</span>
                    <span className="font-semibold text-primary">{signal.profit}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Performance */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Recent Signal Performance
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Pair</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Entry</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Target</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Result</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentPerformance.map((trade, index) => (
                    <tr key={index} className="hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{trade.pair}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{trade.entry}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{trade.tp}</td>
                      <td className={`px-6 py-4 text-sm font-semibold ${trade.status === 'win' ? 'text-green-600' : 'text-red-600'}`}>
                        {trade.result}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          trade.status === 'win' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {trade.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Track record verified and updated daily. Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Receiving Profitable Signals Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join over 5,000 traders receiving our premium signals
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Subscribe to Signals
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signals;