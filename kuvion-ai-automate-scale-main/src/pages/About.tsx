import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-[44px] md:text-[52px] font-semibold text-[#111111] mb-6">
              Meet the Team
            </h1>
            <p className="text-[#6B7280] text-[17px] max-w-2xl mx-auto">
              The minds behind Pixonx AI Studio, dedicated to revolutionizing how businesses grow and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((founder, i) => (
              <div
                key={i}
                className="card-minimal p-10 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border border-[#E5E7EB] mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-[20px] font-semibold text-[#111111] mb-1">
                  {founder.name}
                </h3>

                <p className="text-[#3B82F6] font-medium text-[14px] mb-4">
                  {founder.role}
                </p>

                <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6 max-w-sm">
                  {founder.bio}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={founder.socials.email}
                    className="w-9 h-9 rounded-lg border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#111111] hover:border-[#111111] transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#111111] hover:border-[#111111] transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#111111] hover:border-[#111111] transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
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
