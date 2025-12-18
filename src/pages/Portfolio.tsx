import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import servicePhotography from "@/assets/service-photography.jpg";
import serviceVideography from "@/assets/service-videography.jpg";
import servicePodcast from "@/assets/service-podcast.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceAdvertising from "@/assets/service-advertising.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const categories = ["All", "Photography", "Videography", "Podcasting", "Printing", "Advertising"];

const portfolioItems = [
  { id: 1, title: "Corporate Summit 2024", category: "Photography", image: servicePhotography },
  { id: 2, title: "Brand Commercial", category: "Videography", image: serviceVideography },
  { id: 3, title: "Tech Talk Podcast", category: "Podcasting", image: servicePodcast },
  { id: 4, title: "Annual Report Design", category: "Printing", image: servicePrinting },
  { id: 5, title: "Social Campaign", category: "Advertising", image: serviceAdvertising },
  { id: 6, title: "Studio Production", category: "Photography", image: heroBg },
  { id: 7, title: "Wedding Highlight", category: "Videography", image: servicePhotography },
  { id: 8, title: "Interview Series", category: "Podcasting", image: servicePodcast },
  { id: 9, title: "Event Banners", category: "Printing", image: servicePrinting },
  { id: 10, title: "Digital Marketing", category: "Advertising", image: serviceAdvertising },
  { id: 11, title: "Product Photography", category: "Photography", image: heroBg },
  { id: 12, title: "Documentary Film", category: "Videography", image: serviceVideography },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="hero-section section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mt-4">
              Our Creative
              <span className="text-gradient"> Work</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg mt-6 max-w-2xl">
              Explore our portfolio of photography, videography, podcasts, print materials, and advertising campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer card-hover"
                onClick={() => setLightboxImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-xs uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-hero-foreground font-semibold text-lg mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-hero-foreground hover:text-accent transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Portfolio item"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground">
            Like What You See?
          </h2>
          <p className="text-hero-foreground/70 mt-4 max-w-xl mx-auto">
            Let's create something amazing together. Reach out to discuss your project.
          </p>
          <Button variant="hero" className="mt-8" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
