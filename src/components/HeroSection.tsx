import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([badgeRef.current, headingRef.current, paragraphRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(scrollIndicatorRef.current, { opacity: 0 });

      // Main timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Badge animation
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Heading animation with split effect
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5");

      // Paragraph animation
      tl.to(paragraphRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6");

      // Buttons stagger animation
      tl.to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");

      // Scroll indicator fade in
      tl.to(scrollIndicatorRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.2");

      // Floating orbs animation
      gsap.to(orb1Ref.current, {
        x: 30,
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -25,
        y: 25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll indicator bounce
      gsap.to(".scroll-dot", {
        y: 12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={orb1Ref}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" 
        />
        <div 
          ref={orb2Ref}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span 
              ref={badgeRef}
              className="inline-block px-4 py-2 bg-secondary text-muted-foreground text-sm font-body rounded-full border border-border"
            >
              Web Design & Development Agency
            </span>
          </div>

          <h1
            ref={headingRef}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          >
            We craft{" "}
            <span className="text-gradient">digital experiences</span>
            <br />
            that captivate
          </h1>

          <p
            ref={paragraphRef}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            AC STUDIOS is a premium web design agency that transforms bold visions 
            into stunning websites. We create memorable digital experiences that 
            elevate brands and drive real results.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:opacity-90 transition-all glow-effect"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="px-8 py-4 border border-border text-foreground font-body font-medium rounded-full hover:bg-secondary transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="scroll-dot w-1.5 h-1.5 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
