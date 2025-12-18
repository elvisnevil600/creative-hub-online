import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Video, Mic, Printer, Megaphone, ArrowRight, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import servicePhotography from "@/assets/service-photography.jpg";
import serviceVideography from "@/assets/service-videography.jpg";
import servicePodcast from "@/assets/service-podcast.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceAdvertising from "@/assets/service-advertising.jpg";
import ownerImage from "@/assets/owner-vitallis.jpg";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Event, commercial, and portrait photography that captures your story.",
    image: servicePhotography,
  },
  {
    icon: Video,
    title: "Videography",
    description: "Ads, event videos, and social media content that engages audiences.",
    image: serviceVideography,
  },
  {
    icon: Mic,
    title: "Podcasting",
    description: "Professional recording, editing, and hosting for your voice.",
    image: servicePodcast,
  },
  {
    icon: Printer,
    title: "T-Shirt Printing",
    description: "Custom t-shirts, apparel, and merchandise with vibrant, lasting prints.",
    image: servicePrinting,
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description: "Digital ads, social campaigns, and branding that converts.",
    image: serviceAdvertising,
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-hero/70" />
        <div className="relative z-10 container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-hero-foreground animate-fade-up">
              Your One-Stop
              <br />
              <span className="text-gradient">Creative Media Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-hero-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200">
              We bring your vision to life through stunning photography, cinematic videography, professional podcasting, custom t-shirt printing, and strategic advertising.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <Button variant="hero" asChild>
                <Link to="/services">
                  View Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-hero-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-accent py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground">
                  {stat.value}
                </div>
                <div className="text-accent-foreground/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Introduction Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ownerImage}
                  alt="Vitallis Osunga - Founder of Sparksnap Media"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <Quote className="w-12 h-12 text-accent/30 mb-4" />
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                "Every moment deserves to be captured beautifully, every story deserves to be told powerfully, and every brand deserves to shine."
              </blockquote>
              <div className="mt-8">
                <div className="text-xl font-semibold text-foreground">Vitallis Osunga</div>
                <div className="text-accent">Founder & Creative Director</div>
                <p className="text-muted-foreground mt-4">
                  Based in Bondo, Siaya County, Sparksnap Media is dedicated to providing world-class creative media services to our community and beyond.
                </p>
              </div>
              <Button variant="coral" size="lg" className="mt-8" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Our Creative Services
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              From capturing moments to creating campaigns, we provide end-to-end creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-card card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-hero-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-hero-foreground/70 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="coral" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground">
              Ready to Create Something
              <span className="text-gradient"> Amazing?</span>
            </h2>
            <p className="text-hero-foreground/70 text-lg">
              Let's discuss your next project and bring your creative vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
