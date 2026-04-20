import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  // Replace with real WhatsApp number (international format, no +)
  const phone = "15551234567";
  const message = encodeURIComponent("Hi Rankly, I'd like a free SEO audit.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-elevated hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};
