import {
  Building2,
  TrendingUp,
  Landmark,
  BarChart3,
  HandshakeIcon,
  ClipboardCheck,
  Gavel,
  Home,
  FileText,
  Briefcase,
  Settings,
  LineChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Building2, title: "Property Valuation" },
  { icon: TrendingUp, title: "Real Estate Development" },
  { icon: FileText, title: "Real Estate Documentation" },
  { icon: Landmark, title: "Project Management" },
  { icon: BarChart3, title: "Real Estate Portfolio Advisory" },
  { icon: Gavel, title: "Real Estate Arbitration & Dispute Resolution" },
  { icon: HandshakeIcon, title: "Real Estate Auctioneering Services" },
  { icon: ClipboardCheck, title: "Estate Surveying" },
  { icon: Home, title: "Property Management" },
  { icon: Briefcase, title: "Property Advisory" },
  { icon: Settings, title: "Facility Management" },
  { icon: LineChart, title: "Feasibility & viability Appraisal" },
];

const HomeServices = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-6 lg:px-8 font-serif">
        <div className="text-center mb-16">
          <p className="uppercase text-[#937723] tracking-widest mb-4 font-medium text-lg">
            What We Do
          </p>
          <h2 className="text-3xl font-bold md:text-3xl">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={`/services#${encodeURIComponent(service.title)}`}
              state={{ service: service.title }}
              className="group relative p-6 border border-border rounded-xl bg-card text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 from-transparent via-[#937723]/10 to-transparent" />

              <service.icon
                className="w-10 h-10 text-[#937723] mb-4 mx-auto relative z-10"
                strokeWidth={1.5}
              />

              <h3 className="text-sm font-bold relative z-10">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;