import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "haridass3014@gmail.com",
      href: "mailto:haridass3014@gmail.com",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 85258 76381",
      href: "tel:8525876381",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "hari-dass-25bb44345",
      href: "https://linkedin.com/in/hari-dass-25bb44345",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "haridass3012",
      href: "https://github.com/haridass3012",
      color: "from-gray-500 to-slate-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities in cloud infrastructure and DevOps? 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="bg-card-gradient border-primary/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
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
          <Card className="bg-card-gradient border-primary/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                Ready to Collaborate?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm actively seeking new opportunities in cloud infrastructure and DevOps engineering. 
                  Whether you're looking for expertise in:
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {["AWS Architecture", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Observability", "Cost Optimization"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs justify-center py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground">
                  Let's discuss how I can contribute to your team's success.
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status */}
        <div className="text-center">
          <Badge variant="outline" className="border-green-500 text-green-400 bg-green-500/10 px-6 py-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
            Available for new opportunities
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Contact;