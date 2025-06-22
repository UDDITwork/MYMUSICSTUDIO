
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
          {/* WhatsApp circular button with proper WhatsApp SVG icon */}
          <div className="w-16 h-16 bg-[#25D366] hover:bg-[#20B358] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            {/* Custom WhatsApp SVG Icon */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-9 h-9 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-l-transparent border-r-2 border-r-transparent border-t-2 border-t-gray-800"></div>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40"></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
