import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c1c2b] text-center py-16">
      <div className="container mx-auto px-6 lg:px-8 font-serif">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text- font-bold uppercase  text-[#937723]">
              Markson Ajiboye Consulting
            </h3>
            <p className="md:text-xl text-lg  text-[#d7e6f0]">
              Estate Surveyors, Valuers & Property Consultants. Delivering reliable, data-driven, and ethical real estate solutions across Nigeria.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="md:text-xl text-lg  font-semibold uppercase  text-[#937723]">
              Services
            </h4>
            <ul className="space-y-2 md:text-xl text-lg cursor-pointer text-[#d7e6f0]">
             <li>Property Advisory</li>
              <li>Property Consultancy</li>
              <li>Project Management</li>
              <li>Property Valuation</li>
               <li>Real Estate Development</li>
               <li>Real Estate Documentation</li>
               <li>Real Estate Arbitration & Dispute Resolution</li>
               <li>Real Estate Auctioneering Services</li>
              <li>Real Estate Portfolio Advisory</li>
              <li>Facility Management</li>
              <li>Feasibility & viability Appraisal</li>
               <li>Estate Surveying</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold uppercase  text-[#937723]">
              Contact
            </h4>
            <ul className="space-y-2 md:text-lg text-lg text-[#d7e6f0]">
              <li>126, Obafemi Awolowo Way, Ikeja, Lagos</li>
              <li>0802 294 7444 | 0810 475 6324</li>
              <li>
                <a
                  href="mailto:marksonajiboyeconsultingservic@gmail.com"
                  className="underline hover:text-accent"
                >
                  marksonajiboyeconsulting@gmail.com
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={handleContactClick}
                className="text-lg font-semibold hover:underline text-[#937723]"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d7e6f0] mt-12 pt-8 text-center">
          <p className="text-xs text-[#d7e6f0]">
            © {new Date().getFullYear()} Markson Ajiboye Consulting Services — Estate Surveyors, Valuers & Property Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
