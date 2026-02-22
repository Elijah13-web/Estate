import { Building2, TrendingUp, Landmark, BarChart3, Gavel, HandshakeIcon, ClipboardCheck, Home } from "lucide-react";

const services = [
  { icon: Building2, title: "Real Estate Development", items: ["Residential, commercial & mixed-use development", "Feasibility & viability studies", "Highest and best use analysis", "Joint venture & PPP advisory", "Land acquisition advisory"] },
  { icon: Landmark, title: "Project Management", items: ["Construction planning & coordination", "Cost control & budgeting", "Contractor supervision", "Quality & risk management", "Timely project delivery"] },
  { icon: TrendingUp, title: "Property Valuation", items: ["Residential, commercial & industrial valuation", "Mortgage & loan security valuation", "Insurance valuation", "Compensation & acquisition valuation", "Valuation for financial reporting"] },
  { icon: BarChart3, title: "Property Consultancy & Advisory", items: ["Investment advisory", "Market research & analysis", "Portfolio optimization", "Acquisition & disposal advisory"] },
  { icon: ClipboardCheck, title: "Estate Surveying", items: ["Land & property surveying", "Boundary identification", "Site appraisal & land use analysis", "Development control advisory"] },
  { icon: Gavel, title: "Arbitration & Dispute Resolution", items: ["Property-related arbitration", "Rent & lease disputes", "Compensation assessment", "Expert witness services"] },
  { icon: HandshakeIcon, title: "Auctioneering Services", items: ["Property auctions", "Asset disposal", "Foreclosure & distressed property sales", "Public and private auction services"] },
  { icon: Home, title: "Property Management", items: ["Lease administration", "Rent collection & review", "Tenant management", "Facility coordination & maintenance supervision"] },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 font-serif">
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#937723] mb-4">What We Do</p>
            <h1 className="text-3xl md:text-4xl font-bold   mb-4">Our Services</h1>
            <p className=" text-[#7a706a]">Comprehensive real estate solutions across valuation, development, project management, and dispute resolution.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 border border-border rounded-lg bg-card hover:shadow-xl cursor-pointer transition-shadow">
                <service.icon className="w-10 h-10 text-[#937723] mb-4" strokeWidth={1.5} />
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-[#937723] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
