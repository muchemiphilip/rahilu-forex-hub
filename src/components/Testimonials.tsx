import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Full-Time Trader",
    image: testimonial1,
    content:
      "Rahilu Forex Trading transformed my financial life. The signals are incredibly accurate, and the mentorship program gave me the confidence to trade independently. I've made over KES 800,000 in profits!",
    rating: 5,
  },
  {
    name: "Sarah Njeri",
    role: "Business Owner",
    image: testimonial2,
    content:
      "I started with zero trading experience. The team's patience and structured lessons made learning easy. Now I'm earning a consistent monthly income. Best investment I've ever made!",
    rating: 5,
  },
  {
    name: "David Otieno",
    role: "Engineer & Trader",
    image: testimonial3,
    content:
      "The automated bot is a game-changer. It trades while I focus on my engineering career. I've seen 300% returns in 6 months. The support team is always available when I need help.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of traders who have transformed their lives with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
