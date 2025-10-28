import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Rahilu Forex" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-foreground">Rahilu Forex</h3>
                <p className="text-xs text-muted-foreground">Trading Excellence</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering traders worldwide with cutting-edge tools, signals, and mentorship for
              Forex success.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-muted hover:bg-primary/20 rounded-lg p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-primary/20 rounded-lg p-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-primary/20 rounded-lg p-2 transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-primary/20 rounded-lg p-2 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Shop", "Lessons", "Signals", "Webinars"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {["Contact", "Blog", "FAQs", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest trading tips and market insights
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" />
              <Button className="bg-primary hover:bg-primary/90 flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Rahilu Forex Trading. All rights reserved. | Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
