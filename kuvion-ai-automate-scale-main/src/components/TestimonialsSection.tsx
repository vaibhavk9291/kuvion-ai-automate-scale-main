import { Quote } from 'lucide-react';

const testimonials = [
    {
        content: "Pixonx AI automated our entire onboarding flow. What used to take 3 support reps now runs on autopilot. We saved $12K/month and response times went from hours to seconds.",
        author: "John Doe",
        role: "Founder, TechStartup Inc.",
        initials: "JD"
    },
    {
        content: "The voice agents are indistinguishable from humans. Our customer satisfaction score jumped by 40% within the first month of implementation.",
        author: "Sarah Smith",
        role: "VP of Operations, ScaleUp Co.",
        initials: "SS"
    },
    {
        content: "We were drowning in manual data entry. Pixonx Copilot took over our CRM management and now our sales team can focus purely on closing deals.",
        author: "Mike Johnson",
        role: "Sales Director, GrowthCorp",
        initials: "MJ"
    }
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-24 relative bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 section-fade-in">
                    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                        Hear from our <span className="glow-text">Clients</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        See how Pixonx AI is transforming businesses across industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="glass-card p-8 relative section-fade-in"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />

                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                                    <span className="text-primary-foreground font-display font-bold text-sm">
                                        {testimonial.initials}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-display font-semibold text-foreground text-sm">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
