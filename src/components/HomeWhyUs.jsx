import { ShieldCheck, MapPin, Lightbulb, Users, Clock } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, text: "Accurate, defensible valuation reports" },
  { icon: MapPin, text: "Strong local market knowledge" },
  { icon: Lightbulb, text: "Ethical and professional practice" },
  { icon: Users, text: "Trusted by individuals, corporates & institutions" },
  { icon: Clock, text: "Timely delivery and client-focused service" },
];

const HomeWhyUs = () => {
  return (
    <section className="py-20 bg-[#0c1c2b] font-serif">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#937723] mb-4">Our Edge</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          {reasons.map((r) => (
            <div key={r.text} className="text-center space-y-4">
              <r.icon className="w-10 h-10 text-[#937723] mx-auto" strokeWidth={1.5} />
              <p className="text-sm text-[#d7e6f0] leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUs;
