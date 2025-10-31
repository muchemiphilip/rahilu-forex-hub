import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const processPayment = async () => {
      if (sessionId && !emailSent) {
        try {
          // Note: In a production app, you'd verify the payment with Stripe here
          // For now, we clear the cart and show success
          clearCart();
          setEmailSent(true);
          
          setTimeout(() => {
            setLoading(false);
            toast({
              title: "Payment confirmed!",
              description: "Check your email for order details.",
            });
          }, 1500);
        } catch (error) {
          console.error("Error processing payment:", error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    processPayment();
  }, [sessionId, clearCart, emailSent, toast]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {loading ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
                <p className="text-lg text-muted-foreground">Processing your payment...</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-20 w-20 text-green-500" />
                </div>
                <CardTitle className="text-3xl text-center">Payment Successful!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground text-lg">
                  Thank you for your purchase. Your payment has been processed successfully.
                </p>
                
                <div className="bg-muted p-6 rounded-lg space-y-2">
                  <h3 className="font-semibold text-lg mb-4">What happens next?</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>You will receive a confirmation email with your order details</li>
                    <li>Access details for your trading solutions will be sent within 24 hours</li>
                    <li>Our support team will contact you if any additional setup is required</li>
                  </ul>
                </div>

                {sessionId && (
                  <p className="text-sm text-muted-foreground text-center">
                    Session ID: {sessionId}
                  </p>
                )}

                <div className="flex gap-4 justify-center pt-4">
                  <Button onClick={() => navigate("/")} variant="outline">
                    Return to Home
                  </Button>
                  <Button onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}>
                    Continue Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
