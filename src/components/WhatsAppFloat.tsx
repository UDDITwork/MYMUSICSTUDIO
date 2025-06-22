
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappNumber = "+918459326365";
  const message = "Hi! I'm interested in learning more about your music classes.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 left-8 z-40 group">
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="relative block"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="relative">
          {/* WhatsApp circular button */}
          <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-l-transparent border-r-2 border-r-transparent border-t-2 border-t-gray-800"></div>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-40"></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
