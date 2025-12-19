import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import ownerImage from "@/assets/owner-vitallis.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses and individuals with exceptional creative media services that communicate their unique stories and drive meaningful connections.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading creative media hub in Siaya County and beyond, recognized for innovation, quality, and transforming ideas into compelling visual experiences.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Creativity, integrity, and client success drive everything we do. We believe in collaboration, continuous learning, and delivering beyond expectations.",
  },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-section section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mt-4">
              Crafting Stories Through
              <span className="text-gradient"> Creative Media</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg mt-6 max-w-2xl">
              We're a passionate team of creatives dedicated to bringing your vision to life through photography, video, audio, print, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Owner/Founder Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={ownerImage}
                  alt="Omollo Vitalice - Founder of Sparksnap Media"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg hidden md:block">
                <div className="text-3xl font-bold">Founder</div>
                <div className="text-sm opacity-80">& Creative Director</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent font-medium uppercase tracking-wider text-sm">
                Meet the Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Omollo Vitalice
              </h2>
              <div className="space-y-4 mt-6 text-muted-foreground">
                <p>
                  "At Sparksnap Media, we believe every moment deserves to be captured beautifully, every story deserves to be told powerfully, and every brand deserves to shine."
                </p>
                <p>
                  I founded Sparksnap Media with a simple vision: to provide Bondo and Siaya County with world-class creative media services. From stunning photography to professional videography, podcast production, custom t-shirt printing, and impactful advertising—we do it all.
                </p>
                <p>
                  Our commitment is to deliver quality work that exceeds expectations. Whether you're celebrating a special event, building your brand, or launching a campaign, Sparksnap Media is here to bring your vision to life.
                </p>
              </div>
              <Button variant="coral" size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-medium uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                From Passion to Profession
              </h2>
              <div className="space-y-4 mt-6 text-muted-foreground">
                <p>
                  Sparksnap Media was born from a deep passion for visual storytelling and a desire to serve the creative needs of our community in Bondo, Siaya County.
                </p>
                <p>
                  What started as a love for capturing moments has grown into a full-service creative media hub, offering photography, videography, podcasting, t-shirt printing, and advertising solutions.
                </p>
                <p>
                  Today, we're proud to serve clients across Siaya County and beyond, helping them connect with their audiences through compelling creative content.
                </p>
              </div>
              <Button variant="coral" size="lg" className="mt-8" asChild>
                <Link to="/portfolio">
                  See Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-card overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-accent">100%</div>
                    <div className="text-xl text-foreground mt-2">Commitment to Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Our Mission, Vision & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground">
            Want to Work With Us?
          </h2>
          <p className="text-hero-foreground/70 mt-4 max-w-xl mx-auto">
            We'd love to hear about your project and how we can help bring your vision to life.
          </p>
          <Button variant="hero" className="mt-8" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
