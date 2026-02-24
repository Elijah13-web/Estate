import { FileText, Download } from "lucide-react";
import { Button } from "../components/ui/button";

const documents = [
  { title: "Company Profile", description: "Overview of our firm, services, and professional credentials.", filename: "company-profile.pdf" },
  { title: "Valuation Report Template", description: "Standard template used for property valuation reports.", filename: "valuation-template.pdf" },
  { title: "Engagement / Proposal Letter", description: "Standard terms of engagement for consulting services.", filename: "engagement-letter.pdf" },
  { title: "Brand Credentials", description: "Professional certifications and brand identity documents.", filename: "brand-credentials.pdf" },
];

const DocumentsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-24 font-serif">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#937723] mb-4">Resources</p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Corporate Documents</h1>
          <p className="text-[#7a706a] leading-relaxed mb-12">Download our corporate documents for more information about our firm and services.</p>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.title} className="md:flex items-center justify-between p-6 border space-y-6 md:space-y-0 rounded-lg bg-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 hover:scale-105 transition-transform cursor-pointer">
                  <FileText className="w-8 h-8 text-[#937723] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold ">{doc.title}</h3>
                    <p className="text-sm text-[#7a706a]">{doc.description}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex-shrink-0 gap-2 cursor-pointer hover:bg-[#d09d1e] transition-colors hover:scale-105">
                  <Download className="w-4 h-4 " />
                  Download
                </Button>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#7a706a] mt-8 text-center">Documents will be available for download soon. Please contact us for any urgent requests.</p>
        </div>
      </section>
    </div>
  );
};

export default DocumentsPage;
