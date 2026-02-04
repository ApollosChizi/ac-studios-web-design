import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxe Fashion",
    category: "E-commerce",
    description: "A premium fashion e-commerce platform with seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "FinTech Pro",
    category: "SaaS",
    description: "Modern dashboard for financial analytics and portfolio management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Artisan Coffee",
    category: "Branding",
    description: "Complete brand identity for an artisan coffee roastery.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-secondary text-muted-foreground text-sm font-body rounded-full border border-border mb-6">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Selected <span className="text-gradient">projects</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary font-body hover:underline"
          >
            View all projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-primary text-primary-foreground font-body rounded-full">
                    View Project
                  </span>
                </div>
              </div>
              <span className="text-sm text-primary font-body uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-display text-2xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
