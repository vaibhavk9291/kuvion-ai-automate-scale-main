import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const internships = [
  {
    title: "Full Stack Web Developer",
    type: "Internship",
    duration: "3-6 months",
    mode: "Remote / Hybrid",
    link: "https://forms.gle/dW4W5gfJABFdEoHB8"
  },
  {
    title: "AI Automation Intern",
    type: "Internship",
    duration: "3-6 months",
    mode: "Remote / Hybrid",
    link: "https://forms.gle/dW4W5gfJABFdEoHB8"
  }
];

const Careers = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-[44px] md:text-[52px] font-semibold text-[#111111] mb-6">
              Join Our Team
            </h1>
            <p className="text-[#6B7280] text-[17px] max-w-2xl mx-auto">
              Build the future of AI marketing with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internships.map((internship, i) => (
              <div
                key={i}
                className="p-8 flex flex-col items-start border border-[#E5E7EB] rounded-2xl bg-white shadow-sm"
              >
                <div className="mb-4">
                  <span className="text-[12px] font-medium text-[#3B82F6] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    {internship.type}
                  </span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#111111] mb-3">
                  {internship.title}
                </h3>

                <div className="flex flex-col gap-2 mb-8 text-[#6B7280] text-[15px]">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#111111]">Duration:</span> {internship.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#111111]">Mode:</span> {internship.mode}
                  </div>
                </div>

                <a
                  href={internship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex justify-center items-center bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-base font-medium hover:scale-105 transition-transform shadow-lg w-full sm:w-auto"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
