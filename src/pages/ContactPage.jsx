
import { useState } from "react";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const FloatingInput = ({
  label,
  value,
  onChange,
  error,
  type = "text",
  name,
  autoComplete,
}) => (
  <div className="relative">
    <input
      name={name}
      autoComplete={autoComplete}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full h-14 rounded-xl border bg-white/70 backdrop-blur-xl px-4 pt-6 pb-2 text-sm outline-none transition-all duration-300
      focus:ring-2 focus:ring-[#d09d1e]/40 focus:border-[#d09d1e]
      ${error ? "border-red-500" : "border-slate-200"}`}
    />

    <label
      className={`absolute left-4 top-2 text-xs transition-all duration-300
      peer-placeholder-shown:top-4
      peer-placeholder-shown:text-sm
      peer-placeholder-shown:text-slate-400
      ${error ? "text-red-500" : "text-slate-500"}`}
    >
      {label}
    </label>

    {error && (
      <p className="text-red-500 text-sm mt-1">{error}</p>
    )}
  </div>
);

/* ================= MAIN COMPONENT ================= */
const ContactPage = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  /* ================= VALIDATION ================= */
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email.";
        return "";

      case "phone": {
        const digits = value.replace(/\D/g, "");
        if (!digits) return "Phone number is required.";
        if (digits.length < 10 || digits.length > 15)
          return "Enter a valid phone number.";
        return "";
      }

      case "service":
        if (!value) return "Please select a service.";
        return "";

      case "message":
        if (!value.trim()) return "Message cannot be empty.";
        return "";

      default:
        return "";
    }
  };

  /* ================= HANDLE CHANGE — HARD FIX ================= */
  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Incomplete Form",
        description: "Please correct the highlighted fields.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.send(
        "service_5pyv37p",
        "template_jqtd4qo",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "9uM-daH_zEspLUz0g"
      );

      setShowSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }; 

  /* ================= UI ================= */
  return (
    <div className="min-h-screen pt-20  via-[#faf7ef] to-white overflow-hidden">
      <section className="py-24 font-serif">
        <div className="container mx-auto p-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <div className="space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d09d1e]">
                Get in Touch
              </p>

              <h1 className="text-4xl font-bold tracking-tight">
                Contact Us
              </h1>

              <p className="text-muted-foreground text-lg max-w-md">
                We are available to discuss your property needs and provide professional advisory support.
              </p>

              <div className="space-y-6 pt-6">
                {[
                  {
                    Icon: MapPin,
                    text: "126, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria",
                  },
                  {
                    Icon: Phone,
                    text: "0802 294 7444 • 0810 475 6324",
                  },
                  {
                    Icon: Mail,
                    text: "marksonajiboyeconsulting@gmail.com",
                  },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-[#d09d1e]/10 shadow-sm">
                      <Icon className="w-5 h-5 text-[#d09d1e]" strokeWidth={2.4} />
                    </div>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40"
            >
              <FloatingInput
                name="name"
                autoComplete="name"
                label="Full Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                error={errors.name}
              />

              <FloatingInput
                name="email"
                autoComplete="email"
                label="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={errors.email}
              />

              <FloatingInput
                name="phone"
                autoComplete="tel"
                label="Phone Number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                error={errors.phone}
              />

              {/* SERVICE */}
              <select
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className={`w-full h-14 rounded-xl border px-4 bg-white/70 backdrop-blur-xl
                ${errors.service ? "border-red-500" : "border-slate-200"}`}
              >
                <option value="">Service Required</option>
                <option value="valuation">Property Valuation</option>
                <option value="consultancy">Property Consultancy</option>
                <option value="management">Property Management</option>
                 <option value="development">Real Estate Development</option>
                 <option value="surveying">Estate Surveying</option>
              <option value="arbitration">Arbitration</option>
               <option value="auctioneering">Auctioneering</option>
              <option value="management">Property Management</option>

              </select>

              {/* MESSAGE */}
              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`w-full rounded-xl border p-4 bg-white/70 backdrop-blur-xl
                ${errors.message ? "border-red-500" : "border-slate-200"}`}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d09d1e] hover:bg-[#ffb702] h-14 text-base font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAP ===== */}
      <section className="mt-20 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f172a] font-serif">
              Our Office Location
            </h2>
            <p className="text-gray-600 mt-2">
              Visit our Lagos office for professional consultation
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Ikeja,Lagos&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              title="Office Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-10 max-w-sm w-full text-center shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
            <CheckCircle2 className="w-16 h-16 text-[#d09d1e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
            <p className="text-muted-foreground mb-6">
              Thank you. We'll be in touch shortly.
            </p>
            <Button
              onClick={() => setShowSuccess(false)}
              className="bg-[#d09d1e] hover:bg-[#ffb702]"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;