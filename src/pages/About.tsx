
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Lightbulb, Award, Users, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former recruiter with 10+ years experience helping candidates land their dream jobs.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
    },
    {
      name: "David Chen",
      role: "CTO",
      bio: "AI specialist with expertise in natural language processing and career optimization algorithms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
    },
    {
      name: "Melissa Garcia",
      role: "Head of Product",
      bio: "UX designer and product strategist passionate about creating intuitive user experiences.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
    },
    {
      name: "James Wilson",
      role: "Career Coach",
      bio: "Certified career coach with deep expertise in resume optimization and interview preparation.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
    },
  ];

  // Company values
  const values = [
    {
      title: "User-Centric",
      description: "We prioritize our users' needs and career success in every decision we make.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Innovation",
      description: "We continuously push the boundaries of what AI can do to improve job seeking.",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: "Excellence",
      description: "We're committed to delivering the highest quality tools and experiences.",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <ContentPageLayout
      title="About SwiftApply"
      subtitle="Our mission is to transform the job search process with AI-powered tools that help every job seeker showcase their best self."
    >
      {/* Company Story */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team working together" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span>Trusted by 25,000+ job seekers</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              OUR STORY
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6">Transforming the way people find their dream jobs</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                SwiftApply was born from a simple observation: job searching is broken. Too many qualified candidates were being overlooked because they couldn't navigate the complex world of Applicant Tracking Systems and modern hiring practices.
              </p>
              <p>
                Founded in 2021 by former recruiter Sarah Johnson, our company set out to level the playing field by putting AI-powered tools in the hands of job seekers. We believe that everyone deserves the chance to showcase their true potential to employers.
              </p>
              <p>
                Today, we've helped over 25,000 job seekers create professional, ATS-friendly resumes and cover letters that get results. Our AI technology has been trained on millions of successful job applications across industries, giving our users a competitive edge in today's challenging job market.
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/signup">
                <Button className="px-6">
                  Join SwiftApply Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            OUR VALUES
          </span>
          <h2 className="text-3xl font-bold mt-4">What drives us forward</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            At SwiftApply, these core principles guide our decisions and shape our product development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            OUR TEAM
          </span>
          <h2 className="text-3xl font-bold mt-4">The people behind SwiftApply</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Meet our diverse team of experts committed to revolutionizing the job search process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Achievements */}
      <section className="mb-20">
        <div className="glass-card p-8 md:p-12 rounded-xl bg-primary/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                ACHIEVEMENTS
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-6">Making a real impact in the job market</h2>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">25,000+ active users</span>
                    <p className="text-muted-foreground text-sm">Job seekers who trust our platform</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">72% interview success rate</span>
                    <p className="text-muted-foreground text-sm">Users report higher callback rates</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Featured in Forbes & TechCrunch</span>
                    <p className="text-muted-foreground text-sm">Recognized for innovation in career tech</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">4.8/5 average user rating</span>
                    <p className="text-muted-foreground text-sm">Based on thousands of reviews</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-primary mb-2">67%</div>
                <p className="text-sm text-muted-foreground">Faster job placement than traditional methods</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p className="text-sm text-muted-foreground">Of users recommend SwiftApply to friends</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-primary mb-2">3.5x</div>
                <p className="text-sm text-muted-foreground">More likely to pass ATS screening</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-primary mb-2">35K+</div>
                <p className="text-sm text-muted-foreground">Job offers secured by our users</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section>
        <div className="glass-card p-10 md:p-16 rounded-3xl text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your job search?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of job seekers who have already used SwiftApply to create professional, ATS-optimized resumes and land their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="px-8 py-6 text-lg w-full sm:w-auto">
                Create Your Resume Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="px-8 py-6 text-lg w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default About;
