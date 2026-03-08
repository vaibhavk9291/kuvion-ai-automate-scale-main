import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-medium tracking-widest text-[#6B7280] uppercase mb-4">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] tracking-tight">
          What Our Clients Say
        </h2>
      </div>
      <StaggerTestimonials />
    </section>
  );
};

export default TestimonialsSection;
