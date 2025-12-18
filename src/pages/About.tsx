import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Creative Director",
    bio: "10+ years bringing creative visions to life",
  },
  {
    name: "Sarah Chen",
    role: "Lead Photographer",
    bio: "Award-winning portrait and event specialist",
  },
  {
    name: "Marcus Johnson",
    role: "Video Production Lead",
    bio: "Cinematic storyteller with broadcast experience",
  },
  {
    name: "Emily Park",
    role: "Marketing Strategist",
    bio: "Digital marketing expert with proven results",
  },
];

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
      "To be the leading creative media hub recognized for innovation, quality, and transforming ideas into compelling visual experiences.",
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

      {/* Story */}
      <section className="section-padding bg-background">
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
                  PixelHub was born in 2015 from a simple belief: every brand, every moment, every story deserves to be told beautifully. What started as a one-person photography studio has grown into a full-service creative media agency.
                </p>
                <p>
                  Our founder, Alex Rivera, combined their passion for visual storytelling with a deep understanding of marketing to create a unique approach—where creativity meets strategy.
                </p>
                <p>
                  Today, we're proud to serve over 150 clients ranging from local businesses to national brands, helping them connect with their audiences through compelling creative content.
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
              <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-accent">8+</div>
                    <div className="text-xl text-foreground mt-2">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
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

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Meet the Creatives
            </h2>
            <p className="text-muted-foreground mt-4">
              A talented team of professionals passionate about delivering exceptional results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="aspect-square rounded-2xl bg-secondary mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-3xl font-bold text-accent">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent text-sm">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
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
