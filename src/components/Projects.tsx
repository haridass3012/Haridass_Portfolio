import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, ShoppingCart, Bell } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vendure eCommerce Platform",
      icon: <ShoppingCart className="h-6 w-6" />,
      description: "Scaled and maintained eCommerce workloads on AWS with comprehensive cloud infrastructure and automated deployment pipelines.",
      technologies: ["Node.js", "AWS EC2", "RDS MySQL", "ALB", "Auto Scaling", "Redis", "S3", "Cloudflare CDN", "ECS Fargate", "Docker"],
      achievements: [
        "Migrated workloads to ECS Fargate with Docker containerization",
        "Automated application delivery using GitHub Actions CI/CD",
        "Configured Nginx for secure reverse proxy and SSL termination",
        "Centralized logging with CloudWatch, Prometheus, Grafana, Loki, and Kibana",
        "Reduced operational overhead and optimized AWS costs"
      ],
      type: "Cloud Infrastructure"
    },
    {
      title: "Order Automation & Alerts System",
      icon: <Bell className="h-6 w-6" />,
      description: "Developed comprehensive automation workflows to track order events and provide real-time notifications for enhanced operational efficiency.",
      technologies: ["Node.js", "MySQL", "AWS Lambda", "CloudWatch", "SNS", "API Gateway"],
      achievements: [
        "Automated tracking of order cancellations and payment failures",
        "Integrated real-time notifications for admin alerts",
        "Implemented daily reporting for management insights",
        "Improved incident response times with proactive detection",
        "Enhanced customer service through faster issue resolution"
      ],
      type: "Process Automation"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cloud Infrastructure":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Process Automation":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of cloud infrastructure and DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 hover:border-primary/40"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <Server className="h-8 w-8 text-primary/60" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Key Achievements</h4>
                  <div className="grid gap-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div 
                        key={achievementIndex}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/20 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-card-foreground">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="mr-2 h-4 w-4" />
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