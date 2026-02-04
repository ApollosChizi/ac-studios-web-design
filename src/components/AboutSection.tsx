import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary text-muted-foreground text-sm font-body rounded-full border border-border mb-6">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We're a team of <span className="text-gradient">passionate creators</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              AC STUDIOS was founded with a simple mission: to help businesses stand out 
              in the digital world. We believe great design isn't just about aesthetics—it's 
              about solving problems and creating meaningful connections.
            </p>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach combines strategic thinking with creative excellence. Every project 
              we take on is treated as a unique opportunity to push boundaries and exceed expectations.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="AC STUDIOS team collaboration"
                className="relative w-full rounded-2xl object-cover aspect-square card-shadow"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-card border border-border rounded-xl card-shadow">
              <p className="font-display text-lg font-semibold mb-1">Ready to create?</p>
              <p className="font-body text-sm text-muted-foreground">Let's build something amazing together.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
