
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
        <p className="text-center text-gray-500 mb-16">Coming Soon</p>
      </div>
      <Footer />
    </main>
  );
};

export default About;
