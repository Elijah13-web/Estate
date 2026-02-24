import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "2348022947444"; // 🔴 replace with your real number
  const message = "Hello Markson Ajiboye Consulting Services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 bg-[#0f172a] hover:bg-[#020617] text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 border border-[#f59e0b]/40 backdrop-blur-md">

        {/* Icon */}
        <FaWhatsapp className="text-2xl text-[#25D366]" />

        {/* Text */}
        <span className="hidden md:block font-semibold tracking-wide">
          Chat on WhatsApp
        </span>

        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-[#f59e0b]/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
      </div>
    </a>
  );
}