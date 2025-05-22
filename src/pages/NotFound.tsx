
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-music-light">
      <div className="text-center py-16 px-4 md:py-24 md:px-8 animate-fade-in">
        <div className="inline-block mb-6">
          <div className="bg-music-primary/10 p-4 rounded-full">
            <Music className="h-16 w-16 text-music-primary" />
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-music-primary">404</h1>
        <p className="text-xl md:text-2xl text-music-dark mb-8 max-w-md mx-auto">
          Oops! We couldn't find the page you're looking for. The notes seem to have drifted away.
        </p>
        <Link to="/">
          <Button className="bg-music-primary hover:bg-music-primary/90 text-white px-6 py-6 text-lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
