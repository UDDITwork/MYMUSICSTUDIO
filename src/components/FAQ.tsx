import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much do online music classes cost?",
      answer: "All our courses are priced at ₹399 per class. We offer flexible packages and payment options to suit your budget."
    },
    {
      question: "Do you offer Trinity and ABRSM certification?",
      answer: "Yes! We are Trinity-certified instructors and also provide ABRSM preparation courses for piano and other instruments."
    },
    {
      question: "Can beginners join the classes?",
      answer: "Absolutely! We welcome students of all skill levels, from complete beginners to advanced musicians looking to refine their skills."
    },
    {
      question: "What instruments do you teach?",
      answer: "We specialize in piano, keyboard, Bollywood singing, and Western vocals. Our instructors have 15+ years of experience in teaching and performing."
    },
    {
      question: "How are online classes conducted?",
      answer: "Classes are conducted via video call platforms with high-quality audio. Students receive personalized attention and detailed feedback in real-time."
    },
    {
      question: "Do you provide a free demo class?",
      answer: "Yes! We offer a free demo class so you can experience our teaching methodology before committing to regular classes."
    },
    {
      question: "Can international students join?",
      answer: "Yes, we welcome students from around the world. Our online format makes it easy for global students to learn with us."
    },
    {
      question: "What age groups do you teach?",
      answer: "We teach students of all ages - from young children to adults. Our teaching approach is adapted to suit different age groups and learning styles."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-music-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our online music classes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-medium text-music-dark hover:text-music-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <Link to="/contact">
              <Button className="bg-music-primary hover:bg-music-primary/90 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
