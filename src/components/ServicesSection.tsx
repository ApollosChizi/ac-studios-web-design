import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Code2, Rocket, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. We blend aesthetics with functionality to create memorable experiences.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Clean, performant code that brings designs to life. Built with modern technologies for speed and scalability.",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Cohesive visual identities that tell your story. From logos to complete brand systems that resonate.",
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    description: "Data-driven strategies that drive growth. We help you reach and convert your target audience effectively.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
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

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-secondary text-muted-foreground text-sm font-body rounded-full border border-border mb-6">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services that <span className="text-gradient">deliver results</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end digital solutions to help your business thrive in the modern web landscape.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
