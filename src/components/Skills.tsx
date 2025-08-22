import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Code, 
  Database, 
  Monitor, 
  GitBranch, 
  Settings,
  Globe,
  Terminal
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "Nginx", "EC2", "RDS", "S3", "ECS", "Fargate", "ALB", "Auto Scaling"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Java", "MySQL", "GraphQL API", "Redis"],
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Frontend Technologies",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML & CSS", "WordPress", "Bootstrap"],
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["AWS CloudWatch", "Prometheus", "Grafana", "Loki", "Kibana"],
      color: "from-orange-500 to-red-400"
    },
    {
      title: "Development Tools",
      icon: <Settings className="h-6 w-6" />,
      skills: ["VS Code", "MySQL Workbench", "Eclipse"],
      color: "from-indigo-500 to-blue-400"
    },
    {
      title: "Version Control & CI/CD",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git & GitHub", "GitHub Actions"],
      color: "from-gray-500 to-gray-400"
    },
    {
      title: "Operating Systems",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Linux (Ubuntu)", "Windows"],
      color: "from-yellow-500 to-orange-400"
    },
    {
      title: "Content Delivery",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Cloudflare CDN", "SSL/TLS", "Load Balancing"],
      color: "from-teal-500 to-cyan-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in cloud infrastructure, DevOps, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 hover:border-primary/40 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <div className="text-primary">
                      {category.icon}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional certifications section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Certifications & Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="bg-card-gradient border-primary/20 p-4">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Java Fullstack (J2EE)</h4>
                <p className="text-sm text-muted-foreground">Yuva Sakthi Academy</p>
              </div>
            </Card>
            <Card className="bg-card-gradient border-primary/20 p-4">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Git & GitHub</h4>
                <p className="text-sm text-muted-foreground">Udemy</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;