import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919607317878?text=Hi%20PhoolStop%2C%20I%20am%20interested%20in%20your%20flower%20subscription%20service."
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  );
}
