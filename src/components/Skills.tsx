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
  Terminal,
  Cpu,
  Shield
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="h-7 w-7" />,
      skills: ["AWS", "Docker", "Nginx", "EC2", "RDS", "S3", "ECS", "Fargate", "ALB", "Auto Scaling"],
      gradient: "from-blue-500 to-cyan-400",
      emoji: "☁️"
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-7 w-7" />,
      skills: ["Node.js", "Java", "MySQL", "GraphQL API", "Redis"],
      gradient: "from-green-500 to-emerald-400",
      emoji: "🗄️"
    },
    {
      title: "Frontend Technologies",
      icon: <Code className="h-7 w-7" />,
      skills: ["HTML & CSS", "WordPress", "Bootstrap"],
      gradient: "from-purple-500 to-pink-400",
      emoji: "🎨"
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-7 w-7" />,
      skills: ["AWS CloudWatch", "Prometheus", "Grafana", "Loki", "Kibana"],
      gradient: "from-orange-500 to-red-400",
      emoji: "📊"
    },
    {
      title: "Development Tools",
      icon: <Settings className="h-7 w-7" />,
      skills: ["VS Code", "MySQL Workbench", "Eclipse"],
      gradient: "from-indigo-500 to-blue-400",
      emoji: "🛠️"
    },
    {
      title: "Version Control & CI/CD",
      icon: <GitBranch className="h-7 w-7" />,
      skills: ["Git & GitHub", "GitHub Actions"],
      gradient: "from-gray-600 to-slate-500",
      emoji: "🔄"
    },
    {
      title: "Operating Systems",
      icon: <Terminal className="h-7 w-7" />,
      skills: ["Linux (Ubuntu)", "Windows"],
      gradient: "from-yellow-500 to-orange-400",
      emoji: "💻"
    },
    {
      title: "Content Delivery & Security",
      icon: <Globe className="h-7 w-7" />,
      skills: ["Cloudflare CDN", "SSL/TLS", "Load Balancing"],
      gradient: "from-teal-500 to-cyan-400",
      emoji: "🌐"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-primary text-primary bg-white/80 backdrop-blur-sm px-4 py-2 animate-fade-in"
          >
            <Cpu className="mr-2 h-4 w-4" />
            Technical Expertise
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-text-gradient bg-clip-text text-transparent animate-gradient">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive expertise in cloud infrastructure, DevOps, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-[1.05] hover:-translate-y-2 rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-glow group-hover:animate-bounce-slow`}>
                      {category.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 text-lg animate-bounce">
                      {category.emoji}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white/80 backdrop-blur-sm text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 text-xs font-semibold animate-fade-in hover:animate-wiggle"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced certifications section */}
        <div className="mt-20">
          <Badge 
            variant="outline" 
            className="mb-8 border-primary text-primary bg-white/80 backdrop-blur-sm px-4 py-2 mx-auto block w-fit animate-fade-in"
          >
            <Shield className="mr-2 h-4 w-4" />
            Certifications & Learning
          </Badge>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] rounded-2xl overflow-hidden animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-bounce-slow group-hover:animate-wiggle">
                    ☕
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Java Fullstack (J2EE) Certification
                    </h4>
                    <p className="text-primary font-semibold mb-2">
                      Yuva Sakthi Academy
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Comprehensive training in Java enterprise development, 
                      including Spring Framework, Hibernate, and full-stack web development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] rounded-2xl overflow-hidden animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-slate-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-bounce-slow group-hover:animate-wiggle">
                    🔄
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Git & GitHub Certification
                    </h4>
                    <p className="text-primary font-semibold mb-2">
                      Udemy
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Version control mastery covering Git workflows, branching strategies, 
                      and collaborative development practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Languages section */}
        <div className="mt-16">
          <Badge 
            variant="outline" 
            className="mb-8 border-primary text-primary bg-white/80 backdrop-blur-sm px-4 py-2 mx-auto block w-fit animate-fade-in"
          >
            🗣️ Languages
          </Badge>
          
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card rounded-2xl overflow-hidden animate-scale-in">
            <CardContent className="p-8">
              <div className="flex justify-center gap-12">
                <div className="text-center group">
                  <div className="text-4xl mb-4 animate-bounce-slow group-hover:animate-wiggle">
                    🇮🇳
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-primary-gradient text-white border-0 text-lg px-6 py-3 rounded-xl font-bold mb-2 hover:scale-110 transition-transform"
                  >
                    Tamil
                  </Badge>
                  <p className="text-sm text-muted-foreground font-medium">Native Speaker</p>
                </div>
                <div className="text-center group">
                  <div className="text-4xl mb-4 animate-bounce-slow group-hover:animate-wiggle">
                    🇺🇸
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary-gradient text-white border-0 text-lg px-6 py-3 rounded-xl font-bold mb-2 hover:scale-110 transition-transform"
                  >
                    English
                  </Badge>
                  <p className="text-sm text-muted-foreground font-medium">Professional</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;