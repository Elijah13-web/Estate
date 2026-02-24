const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 font-serif">
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#937723] mb-4">Track Record</p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Projects & Experience</h1>
          <p className="text-[#7a706a] leading-relaxed text-lg mb-12">We have handled diverse property assignments across residential, commercial, and mixed-use developments, including valuation, advisory, project management, and dispute resolution engagements.</p>
          <div className="grid md:grid-cols-2 gap-8 ">
            {[
              { category: "Residential Valuation", title: "High-Net-Worth Residential Portfolio", description: "Comprehensive valuation of a luxury residential portfolio across prime Lagos locations, supporting refinancing and estate planning decisions." },
              { category: "Development Feasibility", title: "Mixed-Use Development Analysis", description: "Feasibility study and financial modelling for a mixed-use development project, providing investors with clear risk-adjusted return projections." },
              { category: "Investment Structuring", title: "Institutional Fund Advisory", description: "Advisory engagement for a real estate investment fund, structuring acquisition criteria and portfolio allocation strategy across commercial assets." },
              { category: "Project Management", title: "Construction Oversight", description: "End-to-end project management for a commercial development, ensuring timely delivery, cost control, and quality standards compliance." },
              { category: "Dispute Resolution", title: "Compensation Assessment", description: "Expert arbitration and compensation assessment for a land acquisition dispute, delivering defensible and fair valuation outcomes." },
              { category: "Property Management", title: "Portfolio Administration", description: "Comprehensive lease administration and tenant management for a multi-property commercial portfolio across Lagos." },
            ].map((c) => (
              <div key={c.title} className="bg-card p-8 rounded-lg border border-[#7a706a] border-border hover:shadow-lg transition-shadow cursor-pointer">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#937723] mb-4">{c.category}</p>
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-[#7a706a] leading-relaxed text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
