import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, BookOpen, Trophy } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-indigo-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-primary text-primary bg-white/80 backdrop-blur-sm px-4 py-2 animate-fade-in"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Academic Foundation
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-text-gradient bg-clip-text text-transparent animate-gradient">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Strong academic foundation and continuous learning journey
          </p>
        </div>

        {/* Main Education Card */}
        <Card className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-[1.02] rounded-3xl overflow-hidden mb-16 animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardHeader className="pb-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="p-4 rounded-2xl bg-primary-gradient text-white shadow-glow group-hover:animate-bounce-slow">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                    🎓
                  </div>
                </div>
                <div>
                  <CardTitle className="text-3xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                    Bachelor of Computer Applications
                  </CardTitle>
                  <p className="text-xl text-muted-foreground font-semibold">BCA Degree</p>
                  <p className="text-lg font-bold bg-secondary-gradient bg-clip-text text-transparent mt-2">
                    Arulmigu Palani Andavar College of Arts & Culture
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Badge 
                  variant="outline" 
                  className="border-primary text-primary bg-white/80 px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 text-center"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  2019 – 2022
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="bg-accent-gradient text-white border-0 px-4 py-2 text-center font-bold hover:scale-110 transition-transform"
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  79% Grade
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Academic Focus */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Academic Focus
                </h4>
                <div className="space-y-3">
                  {[
                    "Programming Fundamentals & Algorithms",
                    "Database Management Systems",
                    "Web Technologies & Development",
                    "Software Engineering Principles",
                    "Computer Networks & Security",
                    "Object-Oriented Programming"
                  ].map((subject, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 hover:border-primary/30 hover:shadow-glow-secondary transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-xl">📚</div>
                      <p className="text-foreground">{subject}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Academic Achievements
                </h4>
                <div className="space-y-3">
                  {[
                    { achievement: "Consistent Academic Performance", icon: "🌟" },
                    { achievement: "Strong Foundation in CS Principles", icon: "💻" },
                    { achievement: "Practical Project Experience", icon: "🚀" },
                    { achievement: "Technical Problem Solving", icon: "🧩" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 hover:border-primary/30 hover:shadow-glow-secondary transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                    >
                      <div className="text-xl animate-bounce-slow">{item.icon}</div>
                      <p className="text-foreground">{item.achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Gained */}
            <div className="pt-6 border-t border-gradient-to-r from-purple-200 via-blue-200 to-pink-200">
              <h4 className="text-xl font-bold mb-4 text-center bg-text-gradient bg-clip-text text-transparent">
                Core Competencies Developed
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Problem Solving", 
                  "Analytical Thinking", 
                  "Software Design", 
                  "System Architecture", 
                  "Database Design", 
                  "Web Development",
                  "Programming Logic",
                  "Technical Documentation"
                ].map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-white/80 backdrop-blur-sm text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 px-4 py-2 text-sm font-semibold animate-fade-in hover:animate-bounce"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continuous Learning Philosophy */}
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-card rounded-2xl overflow-hidden animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10" />
          <CardHeader className="text-center relative z-10">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-secondary-gradient text-white shadow-glow animate-bounce-slow">
                <Award className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Continuous Learning Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Education is not a destination but a continuous journey. I believe in staying updated 
              with the latest technologies and industry best practices through hands-on experience, 
              online courses, and professional development.
            </p>
            <div className="flex justify-center gap-4 text-4xl">
              <span className="animate-bounce-slow hover:animate-wiggle cursor-default">📖</span>
              <span className="animate-pulse hover:animate-wiggle cursor-default">💡</span>
              <span className="animate-bounce hover:animate-wiggle cursor-default">🚀</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;