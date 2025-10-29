import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    name: "Forex Trading Bot",
    price: 9999,
    priceDisplay: "$9,999",
    period: "One-time",
    priceId: "price_1SNQphD0QI0PnZs4IccIvlj3",
    description: "Fully automated AI-powered trading bot",
    features: [
      "24/7 Automated Trading",
      "AI-Powered Decision Making",
      "Risk Management Built-in",
      "Real-time Performance Dashboard",
      "Lifetime Updates & Support",
    ],
    popular: true,
  },
  {
    name: "Trading Signals - Monthly",
    price: 50000,
    priceDisplay: "KES 50,000",
    period: "per month",
    priceId: "price_1SNQqGD0QI0PnZs4YqVeBHlF",
    description: "Professional trading signals daily",
    features: [
      "Daily Trading Signals",
      "Entry & Exit Points",
      "Risk/Reward Analysis",
      "Telegram Group Access",
      "Email & SMS Alerts",
    ],
  },
  {
    name: "Full Subscription",
    price: 150000,
    priceDisplay: "KES 150,000",
    period: "per month",
    priceId: "price_1SNQqVD0QI0PnZs4zBJaJwm7",
    description: "Complete trading package",
    features: [
      "All Trading Signals",
      "Weekly Live Sessions",
      "Personal Mentor Support",
      "Trading Tools Access",
      "Community Forum Access",
      "Priority Email Support",
    ],
  },
  {
    name: "Account Management",
    price: 500000,
    priceDisplay: "KES 500,000",
    period: "deposit",
    priceId: "price_1SNQqhD0QI0PnZs4Fp4kLOag",
    description: "Let experts trade for you",
    features: [
      "Professional Management",
      "Expected ROI: 400%",
      "Monthly Performance Reports",
      "Transparent Trading History",
      "Capital Protection Focus",
    ],
  },
];

const Products = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.name,
      name: product.name,
      price: product.price,
      priceId: product.priceId,
      description: product.description,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-primary">Trading Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your trading success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-8 border ${
                product.popular
                  ? "border-primary shadow-glow"
                  : "border-border hover:border-primary/50"
              } transition-all relative`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-premium text-background px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-primary">{product.priceDisplay}</div>
                <div className="text-sm text-muted-foreground mt-1">{product.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  product.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-muted"
                }`}
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
