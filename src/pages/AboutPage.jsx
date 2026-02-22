import { ShieldCheck, Award, Target, Users, Star } from "lucide-react";

const coreValues = [
  { icon: ShieldCheck, title: "Integrity", description: "Ethical practice and transparency in all engagements" },
  { icon: Award, title: "Professionalism", description: "Compliance with industry standards and best practices" },
  { icon: Target, title: "Accuracy", description: "Precise valuation and well-researched advisory services" },
  { icon: Users, title: "Client Focus", description: "Tailored solutions that meet client objectives" },
  { icon: Star, title: "Excellence", description: "Consistent delivery of high-quality services" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 font-serif">
      {/* Who We Are */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-sm font-semibold uppercase  text-[#937723] mb-4">Who We Are</p>
          <h1 className="text-3xl md:text-4xl font-bold  mb-8">About Our Firm</h1>
          <p className="text-muted-foreground leading-relaxed text-[#7a706a] text-lg mb-6">
            Markson Ajiboye Consulting Services is a multidisciplinary real estate consultancy firm offering professional services in estate surveying, property valuation, real estate development, project management, property consultancy, arbitration, auctioneering, and property management.
          </p>
          <p className="text-muted-foreground leading-relaxed text-[#7a706a] text-lg">
            We deliver reliable, data-driven, and ethical real estate solutions that support informed decision-making, value creation, and dispute resolution across Nigeria.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#f4f5f7]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2  md:gap-30">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#937723]  mb-4">Our Vision</p>
              <h2 className="text-2xl font-bold mb-4 font-serif">Where We're Headed</h2>
              <p className="text-muted-foreground leading-relaxed text-[#7a706a] ">
                To be a leading real estate consulting firm recognized for professionalism, integrity, accuracy, and excellence in property advisory and development services.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#937723]  mb-4">Our Mission</p>
              <h2 className="text-2xl font-bold text-primary mb-4 ">What Drives Us</h2>
              <p className="text-muted-foreground leading-relaxed text-[#7a706a]">
                To provide reliable, data-driven, and professional real estate services that protect client interests, maximize property value, and deliver sustainable outcomes through best industry practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#937723] mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto ">
            {coreValues.map((v) => (
              <div key={v.title} className="text-center space-y-3">
                <v.icon className="w-10 h-10 text-[#937723] mx-auto" strokeWidth={1.5} />
                <h3 className="text-lg font-bold font-serif ">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-[#7a706a] md:w-40 mx-auto">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section className="py-24 bg-[#0c1c2b] ">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#937723] mb-4">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl text-[#d7e6f0] font-bold">Our Clientele</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-[#d7e6f0] cursor-pointer">
            {[
              "Individual Property Owners",
              "Intending Property Owners",
              "Corporate Organizations",
              "Financial Institutions & Banks",
              "Government Agencies",
              "Property Developers & Investors",
              "Legal Practitioners",
            ].map((client) => (
              <div key={client} className="p-4 border bord-foreground/15 rounded-lg">
                <p className="">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
