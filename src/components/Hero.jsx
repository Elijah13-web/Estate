import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-14">
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 font-serif">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#937723] mb-4 ">Estate Surveyors, Valuers & Property Consultants</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ">Integrated Real Estate Solutions Built on Accuracy, Integrity & Professional Excellence</h1>
            </div>
            <p className="text-lg text-muted-foreground text-[#7a706a] leading-relaxed max-w-lg">We provide professional real estate advisory, valuation, development, and dispute resolution services tailored to the Nigerian property market.</p>
            <div className="flex flex-col sm:flex-row gap-4">
          
              <Button asChild size="lg" variant="outline" className="hover:bg-[#0c1c2b] hover:text-white font-semibold px-8">
                <Link to="/contact">Speak to a Consultant</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-[4/3] rounded-lg bg-secondary overflow-hidden">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Modern commercial building in Lagos Nigeria" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
