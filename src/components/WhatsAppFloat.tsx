
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
          {/* WhatsApp circular button with improved icon */}
          <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 overflow-hidden">
            {/* Try the image first, fallback to icon */}
            <img 
              src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584844.jpg"
              alt="WhatsApp"
              className="w-10 h-10 object-contain"
              onError={(e) => {
                // If image fails to load, hide it and show the icon instead
                e.currentTarget.style.display = 'none';
                const icon = e.currentTarget.nextElementSibling;
                if (icon) icon.style.display = 'block';
              }}
            />
            {/* Fallback icon - hidden by default, shown if image fails */}
            <div className="hidden">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.012 2C6.486 2 2.013 6.474 2.013 12c0 1.654.402 3.217 1.113 4.597L2 22l5.514-1.097C8.89 21.614 10.44 22 12.012 22c5.525 0 9.998-4.474 9.998-10S17.537 2 12.012 2zm5.76 14.146c-.233.65-1.36 1.223-1.899 1.275-.507.049-.946.22-3.172-.663-2.826-1.12-4.673-3.963-4.816-4.145-.144-.183-1.177-1.56-1.177-2.975s.744-2.11 1.008-2.4c.264-.29.576-.363.768-.363s.384.003.552.01c.177.007.413-.067.646.493.233.56.794 1.933.863 2.073.07.14.116.305.023.488-.093.183-.14.297-.28.457-.14.16-.294.357-.42.48-.14.14-.287.29-.123.57.164.28.728 1.2 1.56 1.943 1.073.96 1.97 1.26 2.25 1.4.28.14.443.117.607-.07.164-.187.7-.817.887-1.097.187-.28.374-.233.63-.14.257.093 1.63.77 1.91.91.28.14.467.21.537.327.07.117.07.677-.163 1.327z"/>
              </svg>
            </div>
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
