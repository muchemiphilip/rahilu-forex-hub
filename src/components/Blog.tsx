import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "5 Essential Forex Trading Strategies for Beginners",
    excerpt:
      "Learn the fundamental strategies that every successful Forex trader uses to minimize risk and maximize profits in the global currency market.",
    date: "May 15, 2025",
    readTime: "8 min read",
  },
  {
    title: "How to Read Candlestick Patterns Like a Pro",
    excerpt:
      "Master the art of reading candlestick charts to identify market trends and make informed trading decisions with confidence.",
    date: "May 12, 2025",
    readTime: "6 min read",
  },
  {
    title: "Risk Management: Protecting Your Trading Capital",
    excerpt:
      "Discover proven risk management techniques that professional traders use to protect their capital and ensure long-term success.",
    date: "May 8, 2025",
    readTime: "10 min read",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with expert tips, market analysis, and trading strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all group"
            >
              <div className="h-48 bg-gradient-card" />

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
