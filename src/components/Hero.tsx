import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Download, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-bounce-slow" />
        <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-xl opacity-25 animate-bounce" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Status badge with animation */}
        <Badge 
          variant="outline" 
          className="mb-8 border-primary text-primary bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 animate-fade-in px-6 py-2 text-sm font-medium"
        >
          <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
          Available for new opportunities
        </Badge>

        {/* Main heading with gradient animation */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-hero-gradient bg-clip-text text-transparent animate-gradient animate-slide-up">
          HARIDASS G
        </h1>

        {/* Subtitle with typing effect */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in">
          AWS & DevOps Engineer
          <span className="inline-block w-1 h-8 bg-primary ml-2 animate-pulse"></span>
        </h2>

        {/* Description with stagger animation */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Transforming ideas into scalable cloud infrastructure with 
          <span className="font-semibold text-primary"> 1.3+ years </span>
          of hands-on experience in AWS, DevOps, and modern development practices. 
          Let's build the future together! 🚀
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="group bg-primary-gradient hover:shadow-glow text-white font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-scale-in"
          >
            <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
            Let's Connect
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-scale-in"
          >
            <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-8">
          {[
            { icon: Mail, href: "mailto:haridass3014@gmail.com", color: "from-red-400 to-pink-500" },
            { icon: Linkedin, href: "https://linkedin.com/in/hari-dass-25bb44345", color: "from-blue-400 to-blue-600" },
            { icon: Github, href: "https://github.com/haridass3012", color: "from-gray-600 to-gray-800" },
            { icon: Phone, href: "tel:8525876381", color: "from-green-400 to-emerald-500" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-glow-secondary transition-all duration-500 hover:scale-125 hover:-translate-y-3 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className={`h-7 w-7 text-muted-foreground group-hover:text-white transition-colors duration-300`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
            </a>
          ))}
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;