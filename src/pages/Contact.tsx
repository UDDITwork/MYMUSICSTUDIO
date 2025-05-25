
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission here
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-from-bottom, .reveal-from-left, .reveal-from-right');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-music-dark reveal-from-bottom">Contact Us</h1>
          <p className="text-lg text-music-dark/80 max-w-2xl mx-auto reveal-from-bottom delay-200">
            Ready to start your musical journey? Get in touch with us today and let's make beautiful music together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="reveal-from-left">
              <h2 className="text-2xl font-bold mb-6 text-music-dark">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-music-light/50 rounded-lg">
                  <Mail className="h-6 w-6 text-music-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-music-dark">General Inquiries</h3>
                    <p className="text-music-dark/80">contact@mymusicstudio.com</p>
                    <p className="text-music-dark/80">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-music-light/50 rounded-lg">
                  <User className="h-6 w-6 text-music-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-music-dark">Director & Lead Instructor</h3>
                    <p className="text-music-dark/80">Kamlesh Sagar</p>
                    <p className="text-music-dark/80">kamleshsagar1@gmail.com</p>
                    <p className="text-music-dark/80">8459326365</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-music-light/50 rounded-lg">
                  <MapPin className="h-6 w-6 text-music-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-music-dark">Our Location</h3>
                    <p className="text-music-dark/80">My Music Studio - Online Music Classes</p>
                    <p className="text-music-dark/80">Serving students globally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="reveal-from-left delay-400">
              <h3 className="text-xl font-semibold mb-4 text-music-dark">Find Us</h3>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/search?sca_esv=2e4b15024a040034&rlz=1C1YTUH_enIN1002IN1002&q=My%20Music%20Studio%20%7C%20Online%20Music%20Classes&stick=H4sIAAAAAAAAAONgU1I1qDBOSjZKSjM1MTI0TTQ1NTW3MqhISjI0TLU0S0lMMUk1MbZMWsSq5lup4FtanJmsEFxSmpKZr1Cj4J-Xk5mXChV1zkksLk4tBgCynfTfUgAAAA&mat=CSnWYjjNItcm&ved=2ahUKEwi-0oKMyJuNAxX9RWwGHTNgE00QrMcEegQIFRAC"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="My Music Studio Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-from-right">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-music-dark">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your musical interests and goals..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-music-primary hover:bg-music-primary/90 text-white py-6 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center reveal-from-bottom delay-600">
          <div className="bg-music-light/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-music-dark">Ready to Start Learning?</h2>
            <p className="text-music-dark/80 mb-6 max-w-2xl mx-auto">
              Book your free demo class today and experience the My Music Studio difference!
            </p>
            <Button className="bg-music-accent hover:bg-music-accent/90 text-white px-8 py-6 text-lg">
              Book Free Demo Class
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
