import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <XCircle className="h-20 w-20 text-destructive" />
              </div>
              <CardTitle className="text-3xl text-center">Payment Cancelled</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground text-lg">
                Your payment was cancelled. No charges were made to your account.
              </p>
              
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <h3 className="font-semibold text-lg mb-4">What would you like to do?</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Try completing your purchase again</li>
                  <li>Review your cart items</li>
                  <li>Contact our support team if you need assistance</li>
                </ul>
              </div>

              <div className="flex gap-4 justify-center pt-4">
                <Button onClick={() => navigate("/")} variant="outline">
                  Return to Home
                </Button>
                <Button onClick={() => navigate("/checkout")}>
                  Return to Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentFailed;
