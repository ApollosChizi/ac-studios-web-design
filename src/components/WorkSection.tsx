import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Projects reveal with parallax effect
      const projectCards = projectsRef.current?.children;
      if (projectCards) {
        Array.from(projectCards).forEach((card, index) => {
          // Initial reveal animation
          gsap.fromTo(
            card,
            { opacity: 0, y: 100, rotateX: 10 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Subtle parallax on scroll
          gsap.to(card, {
            y: -20 * (index + 1),
            ease: "none",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });

          // Image zoom effect on scroll
          const img = card.querySelector("img");
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.2 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
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
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group cursor-pointer"
              style={{ perspective: "1000px" }}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
