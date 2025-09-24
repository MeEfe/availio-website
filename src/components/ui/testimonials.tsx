import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  quote: string;
  company: string;
}

interface TestimonialsProps {
  className?: string;
}

function Testimonials({ className }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      quote: "Availio transformed our gym operations completely. Member satisfaction increased by 40% in just 3 months.",
      company: "FitZone Elite"
    },
    {
      name: "Michael Chen",
      quote: "The analytics dashboard gives us insights we never had before. Data-driven decisions have boosted our revenue.",
      company: "PowerFit Studios"
    },
    {
      name: "Emma Rodriguez",
      quote: "Equipment utilization tracking helped us optimize our floor space and reduce wait times significantly.",
      company: "Urban Athletics"
    },
    {
      name: "David Thompson",
      quote: "Our members love the seamless experience. Check-ins are faster and class bookings are effortless.",
      company: "Wellness World"
    },
    {
      name: "Lisa Park",
      quote: "Staff productivity improved dramatically with automated workflows. We can focus on what matters most.",
      company: "Apex Fitness"
    },
    {
      name: "James Wilson",
      quote: "The real-time insights help us make instant adjustments to improve member experience every day.",
      company: "Iron Temple"
    },
    {
      name: "Rachel Green",
      quote: "Member retention rates have never been higher. The personalized experience keeps them coming back.",
      company: "Vitality Gym"
    },
    {
      name: "Tom Anderson",
      quote: "Implementation was smooth and support is outstanding. Best investment we've made for our business.",
      company: "Peak Performance"
    },
    {
      name: "Sophie Martinez",
      quote: "The platform pays for itself through improved efficiency and increased member satisfaction scores.",
      company: "FlexFit Center"
    },
    {
      name: "Kevin Lee",
      quote: "Revolutionary technology that actually works. Our operational costs decreased while service quality improved.",
      company: "Dynamic Fitness"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="group flex-shrink-0 w-96 mx-3 relative">
      {/* Glassmorphism card with premium styling - fixed height */}
      <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 ease-out hover:bg-white/70 h-64 flex flex-col">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl pointer-events-none"></div>

        {/* Floating quote icon */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
          <Quote className="w-6 h-6 text-white" />
        </div>

        <div className="relative flex flex-col h-full">
          {/* Quote text with elegant typography - flexible height */}
          <blockquote className="text-gray-700 leading-relaxed text-base font-medium flex-1 mb-6">
            "{testimonial.quote}"
          </blockquote>

          {/* Author section with enhanced design - fixed at bottom */}
          <div className="pt-4 border-t border-gray-200/50 mt-auto">
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-lg leading-tight">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 font-semibold text-sm tracking-wide">
                {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={cn("relative w-full py-32 overflow-hidden bg-background", className)}>
      {/* Elegant background harmonized with theme colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-gray-100/40 to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,197,167,0.12),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(240,240,240,0.4),transparent_60%)]"></div>

      {/* Header section with premium typography */}
      <div className="relative max-w-5xl mx-auto px-8 mb-20 text-center">
        <div className="space-y-6">
          {/* Overline text */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-foreground"></div>
            <span className="text-foreground font-bold text-sm tracking-[0.2em] uppercase">
              Customer Stories
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-foreground"></div>
          </div>

          {/* Main heading with gradient text */}
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground/60 to-foreground bg-clip-text text-transparent">
              Leading Gyms
            </span>
          </h2>

          {/* Subtitle with refined spacing */}
          <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover how gym owners and managers worldwide are transforming their businesses with Availio's innovative solutions
          </p>
        </div>
      </div>

      {/* Testimonials marquee sections */}
      <div className="relative space-y-12">
        {/* Top row - moving left with enhanced spacing */}
        <div className="relative">
          <div className="flex animate-marquee-left pl-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Bottom row - moving right with enhanced spacing */}
        <div className="relative">
          <div className="flex animate-marquee-right pl-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export { Testimonials };