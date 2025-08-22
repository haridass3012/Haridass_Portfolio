import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle, Calendar, Heart } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-7 w-7" />,
      label: "Email",
      value: "haridass3014@gmail.com",
      href: "mailto:haridass3014@gmail.com",
      gradient: "from-red-500 to-pink-500",
      emoji: "📧"
    },
    {
      icon: <Phone className="h-7 w-7" />,
      label: "Phone",
      value: "+91 85258 76381",
      href: "tel:8525876381",
      gradient: "from-green-500 to-emerald-500",
      emoji: "📱"
    },
    {
      icon: <Linkedin className="h-7 w-7" />,
      label: "LinkedIn",
      value: "hari-dass-25bb44345",
      href: "https://linkedin.com/in/hari-dass-25bb44345",
      gradient: "from-blue-500 to-blue-600",
      emoji: "💼"
    },
    {
      icon: <Github className="h-7 w-7" />,
      label: "GitHub",
      value: "haridass3012",
      href: "https://github.com/haridass3012",
      gradient: "from-gray-600 to-gray-800",
      emoji: "💻"
    }
  ];

  const skills = [
    "AWS Architecture", 
    "CI/CD Pipelines", 
    "Container Orchestration", 
    "Infrastructure as Code", 
    "Monitoring & Observability", 
    "Cost Optimization",
    "Cloud Security",
    "DevOps Automation"
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-primary text-primary bg-white/80 backdrop-blur-sm px-4 py-2 animate-fade-in"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Get In Touch
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-text-gradient bg-clip-text text-transparent animate-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Ready to discuss opportunities in cloud infrastructure and DevOps? 
            Let's build something amazing together! 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <Card className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-[1.02] rounded-3xl overflow-hidden animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-primary-gradient text-white shadow-glow animate-bounce-slow">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-black text-foreground">
                    Contact Information
                  </CardTitle>
                  <p className="text-muted-foreground">Let's start a conversation</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group/item flex items-center gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:border-primary/30 hover:shadow-glow-secondary transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${method.gradient} text-white shadow-glow group-hover/item:animate-bounce-slow`}>
                      {method.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 text-lg animate-bounce">
                      {method.emoji}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground group-hover/item:text-primary transition-colors">
                      {method.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-[1.02] rounded-3xl overflow-hidden animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-secondary-gradient text-white shadow-glow animate-bounce-slow">
                  <Send className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-black text-foreground">
                    Ready to Collaborate?
                  </CardTitle>
                  <p className="text-muted-foreground">Let's discuss your next project</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively seeking new opportunities in cloud infrastructure and DevOps engineering. 
                  Whether you're looking for expertise in:
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-white/80 backdrop-blur-sm text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-xs justify-center py-2 font-semibold animate-fade-in hover:animate-wiggle"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Let's discuss how I can contribute to your team's success and help you build 
                  scalable, reliable cloud infrastructure.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  className="group w-full bg-primary-gradient hover:shadow-glow text-white font-bold px-8 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                  size="lg"
                >
                  <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Send Email
                  <Heart className="ml-3 h-5 w-5 group-hover:animate-pulse text-pink-200" />
                </Button>
                <Button 
                  variant="outline"
                  className="group w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                  size="lg"
                >
                  <Calendar className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Status & Final CTA */}
        <div className="text-center space-y-8">
          <Badge 
            variant="outline" 
            className="border-green-500 text-green-600 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-2xl animate-fade-in hover:scale-105 transition-transform"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse" />
            Available for new opportunities
          </Badge>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/50 shadow-card animate-scale-in">
            <h3 className="text-2xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
              Let's Build the Future Together! 
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a startup looking to scale or an enterprise optimizing infrastructure, 
              I'm here to help transform your vision into reality.
            </p>
            <div className="flex justify-center gap-2 text-3xl">
              <span className="animate-bounce-slow hover:animate-wiggle cursor-default">🚀</span>
              <span className="animate-pulse hover:animate-wiggle cursor-default">💡</span>
              <span className="animate-bounce hover:animate-wiggle cursor-default">⚡</span>
              <span className="animate-float hover:animate-wiggle cursor-default">🌟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;