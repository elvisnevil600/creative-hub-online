import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Stunning Product Photography",
    excerpt:
      "Learn the secrets to capturing product photos that convert. From lighting to composition, we cover it all.",
    category: "Photography",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Video Marketing Trends for 2025",
    excerpt:
      "Stay ahead of the curve with our predictions for video content in the coming year.",
    category: "Videography",
    author: "Marcus Johnson",
    date: "Dec 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Starting Your First Podcast: A Complete Guide",
    excerpt:
      "Everything you need to know about launching a successful podcast from scratch.",
    category: "Podcasting",
    author: "Alex Rivera",
    date: "Dec 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Print vs Digital: When to Use Each",
    excerpt:
      "Understanding when traditional print materials outperform digital alternatives.",
    category: "Printing",
    author: "Emily Park",
    date: "Nov 28, 2024",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Maximizing ROI on Social Media Ads",
    excerpt:
      "Proven strategies to get the most out of your advertising budget on social platforms.",
    category: "Advertising",
    author: "Emily Park",
    date: "Nov 20, 2024",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "The Art of Visual Storytelling",
    excerpt:
      "How to create compelling narratives through imagery that resonates with your audience.",
    category: "Photography",
    author: "Sarah Chen",
    date: "Nov 15, 2024",
    readTime: "8 min read",
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-section section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              Blog & Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mt-4">
              Creative Ideas &
              <span className="text-gradient"> Industry Tips</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg mt-6 max-w-2xl">
              Explore our latest articles, tutorials, and insights to help you stay ahead in the creative industry.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden card-hover"
              >
                <div className="aspect-[16/9] bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mt-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              More articles coming soon! We're constantly adding new content.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground">
            Stay Updated
          </h2>
          <p className="text-hero-foreground/70 mt-4 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest tips, trends, and creative insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 rounded-lg bg-hero-foreground/10 border border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-accent"
            />
            <Button variant="coral" className="w-full sm:w-auto whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
