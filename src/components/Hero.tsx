import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <Badge variant="outline" className="mb-6 border-primary text-primary bg-primary/10">
          Available for new opportunities
        </Badge>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          HARIDASS G
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
          AWS & DevOps Engineer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Cloud Infrastructure & DevOps Engineer with 1.3 years of experience in designing, 
          deploying, and optimizing cloud-based infrastructure. Specialized in AWS, CI/CD, 
          containerization, and monitoring.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:haridass3014@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
          >
            <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/hari-dass-25bb44345"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://github.com/haridass3012"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
          >
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="tel:8525876381"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
          >
            <Phone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;