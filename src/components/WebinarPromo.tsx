import { Button } from "@/components/ui/button";
import { Calendar, Users, Video } from "lucide-react";
import webinarImage from "@/assets/webinar-promo.jpg";

const WebinarPromo = () => {
  return (
    <section id="webinars" className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-card rounded-2xl overflow-hidden border border-border shadow-premium">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src={webinarImage}
                alt="Join Our Webinar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 self-start">
                <Video className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Live Event</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Next <span className="text-primary">Free Webinar</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Learn proven Forex strategies from expert traders. Discover how to identify
                high-probability trades and manage risk effectively.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-success" />
                  <span className="text-foreground">Every Saturday, 2:00 PM EAT</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-success" />
                  <span className="text-foreground">Limited to 50 participants</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarPromo;
