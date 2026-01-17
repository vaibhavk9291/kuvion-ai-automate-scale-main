import { Bot, Phone, Workflow, Video, Users } from 'lucide-react';

const services = [
  {
    icon: Bot,
    name: 'PixonxBot',
    title: 'AI Chatbots',
    description: 'Convert visitors → demos → paying users with intelligent conversational AI that never sleeps.',
  },
  {
    icon: Phone,
    name: 'Pixonx Voice AI',
    title: 'Voice Agents',
    description: 'Voice agents that answer calls, support users, and book demos 24/7 with human-like conversations.',
  },
  {
    icon: Workflow,
    name: 'Pixonx Copilot',
    title: 'Workflow Automation',
    description: 'Automate CRM, onboarding, tasks, emails, and billing. Your operations on autopilot.',
  },
  {
    icon: Video,
    name: 'AI Ad Engine',
    title: 'AI-Generated Content',
    description: 'Auto-generated video ads and UGC content that converts. Scale your marketing effortlessly.',
  },
  {
    icon: Users,
    name: 'Full System Build',
    title: 'Complete AI Workforce',
    description: 'Replace 3–10 employees with AI. End-to-end automation for maximum efficiency.',
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            What we <span className="glow-text">build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            AI-powered systems designed to automate, scale, and grow your startup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`glass-card-hover p-8 space-y-4 section-fade-in ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <div>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {service.name}
                </span>
                <h3 className="font-display font-semibold text-xl text-foreground mt-1">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
