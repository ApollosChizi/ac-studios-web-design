import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
gsap.registerPlugin(ScrollTrigger);
const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, {
        opacity: 0,
        y: 60
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Form slide in from left
      gsap.fromTo(formRef.current, {
        opacity: 0,
        x: -60
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Info slide in from right with stagger on children
      gsap.fromTo(infoRef.current, {
        opacity: 0,
        x: 60
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate contact info items
      const infoItems = infoRef.current?.querySelectorAll(".contact-item");
      if (infoItems) {
        gsap.fromTo(infoItems, {
          opacity: 0,
          y: 30
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Form fields stagger animation
      const formFields = formRef.current?.querySelectorAll(".form-field");
      if (formFields) {
        gsap.fromTo(formFields, {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" ref={sectionRef} className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-muted-foreground text-sm font-body rounded-full border border-border mb-6">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's start your <span className="text-gradient">project</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label htmlFor="name" className="block font-body text-sm text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="company" className="block font-body text-sm text-muted-foreground mb-2">
                  Company (Optional)
                </label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Company" />
              </div>
              <div className="form-field">
                <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
                  Tell us about your project *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="I'm looking for help with..." />
              </div>
              <div className="form-field">
                <button type="submit" disabled={isSubmitting} className="group flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:opacity-90 transition-all glow-effect disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6">
                Let's talk about your next big idea
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Whether you're starting from scratch or looking to revamp your existing 
                digital presence, we're here to help. Fill out the form and we'll get back 
                to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="contact-item flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold mb-1">Email Us</p>
                  <a href="mailto:hello@acstudios.com" className="font-body text-muted-foreground hover:text-primary transition-colors">apolloschizi7@gmail.com
                </a>
                </div>
              </div>

              <div className="contact-item flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold mb-1">Call Us/WhatsApp</p>
                  <a href="tel:+1234567890" className="font-body text-muted-foreground hover:text-primary transition-colors">+(234) 9020114722

                </a>
                </div>
              </div>

              <div className="contact-item flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold mb-1">Location</p>
                  <p className="font-body text-muted-foreground">Nigeria

                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;