
const FounderImage = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 group">
      <a 
        href="https://calendly.com/kamleshsagar1/music-lessons" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative block"
      >
        <div className="relative">
          {/* Founder's circular image */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-music-accent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img 
              src="https://pbs.twimg.com/media/GsKZd1FXUAAVL1L?format=jpg&name=large" 
              alt="Founder - Kamlesh Sagar" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Speech bubble */}
          <div className="absolute -top-16 -left-32 bg-white rounded-lg px-4 py-2 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none min-w-max">
            <div className="text-sm font-medium text-music-dark">Let's Schedule a Demo Class</div>
            <div className="absolute bottom-0 left-16 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white transform translate-y-full"></div>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full border-2 border-music-accent animate-ping opacity-30"></div>
        </div>
      </a>
    </div>
  );
};

export default FounderImage;
