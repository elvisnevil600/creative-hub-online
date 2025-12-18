import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Video, Mic, Printer, Megaphone, ArrowRight, Check } from "lucide-react";
import servicePhotography from "@/assets/service-photography.jpg";
import serviceVideography from "@/assets/service-videography.jpg";
import servicePodcast from "@/assets/service-podcast.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceAdvertising from "@/assets/service-advertising.jpg";

const services = [
  {
    id: "photography",
    icon: Camera,
    title: "Photography",
    subtitle: "Capture Every Moment",
    description:
      "Our professional photography services cover everything from corporate events to intimate portraits. We bring artistic vision and technical expertise to every shoot.",
    image: servicePhotography,
    features: [
      "Event & Wedding Photography",
      "Commercial Product Shoots",
      "Portrait & Headshots",
      "Real Estate Photography",
      "Food & Lifestyle",
      "Photo Editing & Retouching",
    ],
  },
  {
    id: "videography",
    icon: Video,
    title: "Videography",
    subtitle: "Stories in Motion",
    description:
      "From concept to final cut, we create cinematic videos that engage your audience and communicate your message effectively.",
    image: serviceVideography,
    features: [
      "Commercial Advertisements",
      "Event & Wedding Films",
      "Social Media Content",
      "Corporate Videos",
      "Music Videos",
      "Post-Production & Editing",
    ],
  },
  {
    id: "podcasting",
    icon: Mic,
    title: "Podcasting",
    subtitle: "Amplify Your Voice",
    description:
      "Launch and grow your podcast with our end-to-end services. We handle the technical aspects so you can focus on your content.",
    image: servicePodcast,
    features: [
      "Professional Recording",
      "Audio Editing & Mixing",
      "Podcast Hosting Setup",
      "Cover Art Design",
      "Show Notes & Transcription",
      "Distribution Strategy",
    ],
  },
  {
    id: "tshirt-printing",
    icon: Printer,
    title: "T-Shirt Printing",
    subtitle: "Wear Your Brand",
    description:
      "Custom t-shirts and apparel printing with vibrant, long-lasting designs. Perfect for events, teams, businesses, and personal expression.",
    image: servicePrinting,
    features: [
      "Custom T-Shirt Designs",
      "Bulk Orders for Events",
      "Corporate Uniforms",
      "Heat Transfer Printing",
      "Screen Printing",
      "Merchandise & Apparel",
    ],
  },
  {
    id: "advertising",
    icon: Megaphone,
    title: "Advertising",
    subtitle: "Reach & Convert",
    description:
      "Strategic digital advertising and branding solutions that connect your business with the right audience at the right time.",
    image: serviceAdvertising,
    features: [
      "Social Media Campaigns",
      "Google & Display Ads",
      "Brand Strategy",
      "Content Marketing",
      "Analytics & Reporting",
      "Campaign Optimization",
    ],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-section section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mt-4">
              Creative Solutions for
              <span className="text-gradient"> Every Need</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg mt-6 max-w-2xl">
              From capturing moments to creating campaigns, we offer comprehensive creative media services to help your brand stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-accent font-medium uppercase tracking-wider text-sm">
                    {service.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mt-4 text-lg">
                  {service.description}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="coral" size="lg" className="mt-8" asChild>
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground">
            Not Sure What You Need?
          </h2>
          <p className="text-hero-foreground/70 mt-4 max-w-xl mx-auto">
            Let's talk about your project. We'll help you find the perfect combination of services to achieve your goals.
          </p>
          <Button variant="hero" className="mt-8" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
