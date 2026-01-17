import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Phone, User, Mail, Building2, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FounderDiscoverySection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startupName: '',
    problem: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll be in touch within 24 hours to discuss your automation needs.",
    });
    setFormData({ name: '', email: '', startupName: '', problem: '', phone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 md:py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            If you're a founder — <span className="text-primary">start here.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us what you're building and we will map out automation that saves time instantly.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Button
            size="lg"
            onClick={() => (window as any).Cal?.("modal", "30min", { layout: "month_view", theme: "dark" })}
            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-glow-intense transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Discovery Call
            <span className="absolute inset-0 rounded-md border border-primary/50 group-hover:border-primary animate-pulse-glow" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => (window as any).Cal?.("modal", "deep-dive-founder-call", { layout: "month_view", theme: "dark" })}
            className="group relative border-primary/30 bg-card/50 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-semibold transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Deep-Dive Founder Call
            <span className="block text-xs text-muted-foreground mt-0.5 ml-1">(45-min strategy)</span>
          </Button>
        </div>

        {/* Lead Form Card */}
        <div
          className="glass-card p-8 md:p-12 rounded-2xl border border-border/50 animate-fade-in relative overflow-hidden"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@startup.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Startup Name */}
              <div className="space-y-2">
                <Label htmlFor="startupName" className="text-foreground flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  Startup Name
                </Label>
                <Input
                  id="startupName"
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleChange}
                  placeholder="Your Startup Inc."
                  required
                  className="bg-background/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Phone (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Phone <span className="text-muted-foreground text-xs">(optional)</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="bg-background/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Problem Textarea */}
            <div className="space-y-2">
              <Label htmlFor="problem" className="text-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                What problem are you trying to automate?
              </Label>
              <Textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Tell us about your biggest time sink — support tickets, onboarding, CRM updates, content creation, etc."
                required
                rows={4}
                className="bg-background/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-glow hover:shadow-glow-intense transition-all duration-300"
            >
              Submit & Get Your Automation Roadmap
            </Button>
          </form>
        </div>


      </div>
    </section>
  );
};

export default FounderDiscoverySection;
