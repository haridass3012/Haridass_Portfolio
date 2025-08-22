import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card-gradient border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Bachelor of Computer Applications
                  </CardTitle>
                  <p className="text-muted-foreground">BCA</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Arulmigu Palani Andavar College of Arts & Culture
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    <Calendar className="mr-1 h-3 w-3" />
                    2019 – 2022
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                    79% Grade
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive computer science education covering programming fundamentals, 
                  database management, web technologies, and software development principles.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card-gradient border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Professional Certifications
                  </CardTitle>
                  <p className="text-muted-foreground">Continuous Learning</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/20 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    Java Fullstack (J2EE) Certification
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    Yuva Sakthi Academy
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Comprehensive training in Java enterprise development, 
                    including Spring Framework, Hibernate, and full-stack web development.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/20 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    Git & GitHub Certification
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    Udemy
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Version control mastery covering Git workflows, branching strategies, 
                    and collaborative development practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <div className="mt-12">
          <Card className="bg-card-gradient border-primary/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground text-center">
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
                    Tamil
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">Native</p>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
                    English
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">Professional</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;