import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Architected and fine-tuned MySQL databases to ensure scalability, performance, and data integrity",
    "Provisioned and administered AWS services including EC2, RDS, S3, ALB, Auto Scaling, ECS, and Fargate",
    "Engineered CI/CD pipelines with GitHub Actions and Docker, enabling seamless and zero-downtime deployments",
    "Implemented and hardened Linux servers with Nginx on EC2 for reverse proxy, load balancing, and SSL termination",
    "Leveraged Redis caching to minimize database load and accelerate application response times",
    "Enhanced global content delivery using Cloudflare CDN for reduced latency and faster user experience",
    "Deployed observability stack with AWS CloudWatch, Prometheus, Grafana, Loki, and Kibana",
    "Optimized cloud costs by continuously monitoring usage and rightsizing infrastructure"
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable cloud infrastructure and optimizing DevOps workflows
          </p>
        </div>

        <Card className="bg-card-gradient border-primary/20 shadow-glow hover:shadow-elegant transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  AWS & DevOps Engineer
                </CardTitle>
                <p className="text-xl text-primary font-semibold">
                  Hashtag Billing Solution
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Badge variant="outline" className="border-primary text-primary">
                  <Calendar className="mr-1 h-3 w-3" />
                  May 2024 – Present
                </Badge>
                <Badge variant="outline" className="border-muted text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" />
                  Remote
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-card-foreground leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Key Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "GitHub Actions", "MySQL", "Redis", "Nginx", "EC2", "RDS", "S3", "CloudWatch", "Prometheus", "Grafana", "Linux"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
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