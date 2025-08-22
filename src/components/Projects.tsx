import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, ShoppingCart, Bell, Rocket, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vendure eCommerce Platform",
      emoji: "🛒",
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Transformed eCommerce operations through comprehensive AWS cloud infrastructure with automated deployment pipelines and global content delivery optimization.",
      technologies: ["Node.js", "AWS EC2", "RDS MySQL", "ALB", "Auto Scaling", "Redis", "S3", "Cloudflare CDN", "ECS Fargate", "Docker"],
      achievements: [
        "Successfully migrated to ECS Fargate with containerized microservices architecture",
        "Implemented zero-downtime CI/CD with GitHub Actions and Docker",
        "Configured enterprise-grade Nginx for SSL termination and load balancing",
        "Built comprehensive observability with CloudWatch, Prometheus, and Grafana",
        "Achieved 45% reduction in operational overhead through automation"
      ],
      type: "Cloud Infrastructure",
      gradient: "from-blue-500 to-cyan-400",
      stats: { deployments: "100+", uptime: "99.9%", performance: "+60%" }
    },
    {
      title: "Order Automation & Alerts System",
      emoji: "🔔",
      icon: <Bell className="h-8 w-8" />,
      description: "Engineered intelligent automation workflows for real-time order tracking with proactive notifications and comprehensive reporting dashboard.",
      technologies: ["Node.js", "MySQL", "AWS Lambda", "CloudWatch", "SNS", "API Gateway", "EventBridge"],
      achievements: [
        "Automated detection of critical order events with 99.5% accuracy",
        "Implemented real-time notification system with sub-second latency",
        "Created automated daily reporting with executive dashboard",
        "Reduced incident response time by 75% through proactive alerts",
        "Enhanced customer satisfaction through faster issue resolution"
      ],
      type: "Process Automation",
      gradient: "from-green-500 to-emerald-400",
      stats: { orders: "10K+", alerts: "Real-time", response: "-75%" }
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cloud Infrastructure":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Process Automation":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-purple-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-primary text-primary bg-white/80 backdrop-blur-sm px-4 py-2 animate-fade-in"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Featured Work
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-text-gradient bg-clip-text text-transparent animate-gradient">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Real-world applications showcasing cloud architecture excellence and DevOps innovation
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-[1.01] rounded-3xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-glow group-hover:animate-bounce-slow`}>
                        {project.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                        {project.emoji}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className={`${getTypeColor(project.type)} px-3 py-1 font-semibold`}>
                        <Target className="mr-1 h-3 w-3" />
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/50">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Key Achievements
                  </h4>
                  <div className="grid gap-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div 
                        key={achievementIndex}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 hover:border-primary/30 hover:shadow-glow-secondary transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                        style={{ animationDelay: `${(index * 0.2) + (achievementIndex * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500 mt-2 flex-shrink-0 animate-pulse" />
                        <p className="text-card-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-white/80 backdrop-blur-sm text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 px-3 py-2 text-sm font-semibold animate-fade-in hover:animate-wiggle"
                        style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gradient-to-r from-purple-200 via-blue-200 to-green-200">
                  <Button 
                    className="group bg-primary-gradient hover:shadow-glow text-white font-semibold transition-all duration-300 hover:scale-105 rounded-xl px-6 py-3"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    View Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="group border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-300 hover:scale-105 rounded-xl px-6 py-3"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;