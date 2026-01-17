import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const founders = [
    {
        name: "Kunal Manjare",
        role: "Co-Founder",
        bio: "I am the Co-founder of Pixonx AI to help companies cut through the AI hype and implement solutions that actually drive results whether that's automating workflows, enhancing customer experiences, or unlocking new revenue streams.",
        image: "/images/founder.png",
        socials: {
            email: "mailto:cofounder1@email.com",
            linkedin: "https://linkedin.com/in/kunal-manjare-421351270/",
            twitter: "https://x.com/kunalair2/"
        }
    },
    {
        name: "Vaibhav Kale",
        role: "Co-Founder",
        bio: "As co-founder of Pixonx AI I bridge the gap between cutting-edge AI capabilities and practical business applications helping teams implement automation, intelligence, and scale without the complexity.",
        image: "/images/cofounder.jpg",
        socials: {
            email: "mailto:cofounder2@email.com",
            linkedin: "https://linkedin.com/in/vaibhav-kale9291/",
            twitter: "https://x.com/KaleVaibha8521/"
        }
    }
];

const About = () => {
    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <ParticleBackground />
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 section-fade-in">
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                            Meet the <span className="glow-text">Team</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            The minds behind Pixonx AI, dedicated to revolutionizing how startups operate and scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {founders.map((founder, i) => (
                            <div
                                key={i}
                                className="glass-card p-10 flex flex-col items-center text-center section-fade-in"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            >
                                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary/20 mb-6 glow-border">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                                    {founder.name}
                                </h3>

                                <div className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                                    {founder.role}
                                </div>

                                <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm">
                                    {founder.bio}
                                </p>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={founder.socials.email}
                                        className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                                        aria-label="Email"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={founder.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={founder.socials.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
