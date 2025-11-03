import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CreditCard, ShoppingBag } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      // Get auth token for authenticated users (optional)
      const { data: { session } } = await supabase.auth.getSession();
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          items: items.map(item => ({
            name: item.name,
            price: item.price,
            priceId: item.priceId,
          }))
        },
        headers: session?.access_token ? {
          Authorization: `Bearer ${session.access_token}`
        } : {}
      });

      if (error) throw error;

      if (data?.url) {
        // On mobile, redirect in the same window to avoid popup blockers
        if (isMobile) {
          window.location.href = data.url;
        } else {
          // On desktop, open in a new tab
          window.open(data.url, '_blank');
          toast({
            title: "Redirecting to payment",
            description: "Opening Stripe checkout in a new tab...",
          });
        }
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout Failed",
        description: "There was an error starting the checkout process. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add some products to your cart to continue</p>
          <Button onClick={() => navigate('/#shop')}>Continue Shopping</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-start pb-4 border-b">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                  <span className="font-bold text-lg">${item.price.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 text-2xl font-bold border-t">
                <span>Total:</span>
                <span className="text-primary">${totalPrice.toLocaleString()}</span>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Secure Payment with Stripe
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Industry-leading payment security</li>
                  <li>✓ Accepts all major credit cards (Visa, Mastercard, Amex)</li>
                  <li>✓ Your payment information is never stored on our servers</li>
                  <li>✓ Email confirmation sent automatically</li>
                </ul>
              </div>

              <Button 
                onClick={handleCheckout}
                className="w-full" 
                size="lg" 
                disabled={loading}
              >
                {loading ? "Processing..." : "Proceed to Secure Payment"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By completing this purchase, you agree to our terms and conditions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
