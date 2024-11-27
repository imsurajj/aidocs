import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Upload, Search, MessageSquare, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const steps = [
  {
    title: 'Upload Documents',
    description: 'Simply drag and drop your PDF documents or click to upload. We support all major document formats.',
    icon: Upload,
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
  },
  {
    title: 'AI Processing',
    description: 'Our advanced AI analyzes your documents, understanding context and extracting key information.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
  },
  {
    title: 'Ask Questions',
    description: 'Ask questions in natural language and get instant, accurate answers from your documents.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
  },
  {
    title: 'Get Insights',
    description: 'Receive intelligent insights, summaries, and recommendations based on your documents.',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
];

const StepCard = ({ step, index, setActiveStep }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 ml-16"
    >
      {/* Step Number */}
      <div className="absolute -left-16 top-8 flex items-center justify-center w-12 h-12">
        <span className="relative flex h-12 w-12">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/20 opacity-75"></span>
          <span className="relative flex items-center justify-center rounded-full h-12 w-12 bg-primary/10 text-primary font-bold text-xl">
            {index + 1}
          </span>
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <step.icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold">
            {step.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-lg">
          {step.description}
        </p>
      </div>

      {/* Connector Line */}
      {index < steps.length - 1 && (
        <div className="absolute left-[-3.25rem] top-20 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-primary/20 via-border to-transparent" />
      )}
    </motion.div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="how-it-works" className="bg-background relative overflow-hidden min-h-screen py-24">
      {/* Gradient Spotlight */}
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It{' '}
            <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes with our simple yet powerful document analysis platform.
            Follow these steps to unlock the power of your documents.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Fixed Image Section */}
          <motion.div 
            className="hidden lg:block sticky top-24 h-[600px]"
            style={{ y }}
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0,
                    scale: activeStep === index ? 1 : 1.1
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Steps Section */}
          <div ref={containerRef} className="space-y-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
