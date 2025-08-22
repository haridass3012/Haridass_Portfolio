import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Zap, Award } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      text: "Architected and fine-tuned MySQL databases to ensure scalability, performance, and data integrity",
      icon: "🏗️",
      impact: "99.9% uptime"
    },
    {
      text: "Provisioned and administered AWS services including EC2, RDS, S3, ALB, Auto Scaling, ECS, and Fargate",
      icon: "☁️",
      impact: "Multi-service expertise"
    },
    {
      text: "Engineered CI/CD pipelines with GitHub Actions and Docker, enabling seamless and zero-downtime deployments",
      icon: "🚀",
      impact: "Zero downtime"
    },
    {
      text: "Implemented and hardened Linux servers with Nginx on EC2 for reverse proxy, load balancing, and SSL termination",
      icon: "🔒",
      impact: "Enhanced security"
    },
    {
      text: "Leveraged Redis caching to minimize database load and accelerate application response times",
      icon: "⚡",
      impact: "40% faster responses"
    },
    {
      text: "Enhanced global content delivery using Cloudflare CDN for reduced latency and faster user experience",
      icon: "🌍",
      impact: "Global reach"
    },
    {
      text: "Deployed observability stack with AWS CloudWatch, Prometheus, Grafana, Loki, and Kibana",
      icon: "📊",
      impact: "Full visibility"
    },
    {
      text: "Optimized cloud costs by continuously monitoring usage and rightsizing infrastructure",
      icon: "💰",
      impact: "30% cost reduction"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-green-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-primary text-primary bg-white/80 backdrop-blur-sm px-4 py-2 animate-fade-in"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Professional Journey
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-text-gradient bg-clip-text text-transparent animate-gradient">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Building scalable cloud infrastructure and optimizing DevOps workflows with passion and precision
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-[1.02] animate-slide-up rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-blue-400/10 to-green-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          
          <CardHeader className="pb-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary-gradient text-white shadow-glow animate-bounce-slow">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                    AWS & DevOps Engineer
                  </CardTitle>
                  <p className="text-2xl font-bold bg-secondary-gradient bg-clip-text text-transparent">
                    Hashtag Billing Solution
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Badge 
                  variant="outline" 
                  className="border-primary text-primary bg-white/80 px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  May 2024 – Present
                </Badge>
                <Badge 
                  variant="outline" 
                  className="border-green-500 text-green-600 bg-white/80 px-4 py-2"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Remote
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 relative z-10">
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:border-primary/30 hover:shadow-glow-secondary transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl animate-bounce-slow group-hover:animate-wiggle">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed mb-2 group-hover:text-primary transition-colors">
                      {achievement.text}
                    </p>
                    <Badge 
                      variant="secondary" 
                      className="bg-accent-gradient text-white border-0 px-3 py-1 text-xs font-medium"
                    >
                      <Zap className="mr-1 h-3 w-3" />
                      {achievement.impact}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gradient-to-r from-purple-200 via-blue-200 to-green-200">
              <h4 className="text-2xl font-bold mb-6 text-center bg-text-gradient bg-clip-text text-transparent">
                Technology Arsenal
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {["AWS", "Docker", "GitHub Actions", "MySQL", "Redis", "Nginx", "EC2", "RDS", "S3", "CloudWatch", "Prometheus", "Grafana", "Linux", "ECS", "Fargate"].map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="bg-white/80 backdrop-blur-sm text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 px-4 py-2 text-sm font-semibold animate-fade-in hover:animate-bounce"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;