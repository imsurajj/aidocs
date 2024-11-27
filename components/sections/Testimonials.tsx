import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Research Director',
    company: 'TechCorp',
    image: '/testimonials/sarah.jpg',
    content: 'PDFCompanion has revolutionized how we handle research papers. The AI-powered analysis saves us hours of manual work and provides insights we might have missed.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Legal Counsel',
    company: 'LawFirm LLC',
    image: '/testimonials/michael.jpg',
    content: 'As a legal professional, accuracy is crucial. PDFCompanion\'s AI not only helps us process documents faster but also ensures we don\'t miss critical details.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Manager',
    company: 'MediaHub',
    image: '/testimonials/emily.jpg',
    content: 'The natural language processing capabilities are impressive. It\'s like having a smart assistant that understands context and helps us extract meaningful insights.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Data Scientist',
    company: 'AI Solutions',
    image: '/testimonials/david.jpg',
    content: 'The AI capabilities of PDFCompanion are truly next-level. It has become an essential tool in our research and analysis workflow.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'HR Director',
    company: 'Global Corp',
    image: '/testimonials/lisa.jpg',
    content: 'Managing HR documents has never been easier. PDFCompanion helps us process and analyze employee documents efficiently and accurately.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    company: 'Tech Innovations',
    image: '/testimonials/james.jpg',
    content: 'The speed and accuracy of document processing have improved our team\'s productivity significantly. A game-changer for our documentation workflow.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="w-[350px] flex-shrink-0 mx-4">
      <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 relative overflow-hidden h-full">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative">
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>

          {/* Testimonial Content */}
          <p className="text-muted-foreground mb-6">{testimonial.content}</p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfiniteScroll = ({ children, direction = 'left' }: { children: React.ReactNode, direction?: 'left' | 'right' }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-20 h-full left-0 top-0 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute w-20 h-full right-0 top-0 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div
        className="flex animate-scroll"
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse'
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Industry{' '}
            <span className="text-gradient">Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how professionals across different industries are transforming their document workflows with PDFCompanion.
          </p>
        </motion.div>

        {/* Testimonials Scroll */}
        <div className="mb-8">
          <InfiniteScroll direction="left">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </InfiniteScroll>
        </div>
        {/* <div className="mt-8">
          <InfiniteScroll direction="right">
            {testimonials.slice().reverse().map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </InfiniteScroll>
        </div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of satisfied users and experience the future of document analysis.
          </p>
          <button className="btn-primary">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
