import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does the AI-powered document analysis work?',
    answer: 'Our advanced AI technology uses natural language processing and machine learning to understand and analyze your documents. It can comprehend context, extract key information, and provide accurate answers to your questions in real-time.',
  },
  {
    question: 'What types of documents are supported?',
    answer: 'We support a wide range of document formats including PDF, Word (DOC, DOCX), PowerPoint (PPT, PPTX), Excel (XLS, XLSX), and plain text files. Our AI can process both digital documents and scanned documents with OCR capabilities.',
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Yes, we take security and privacy very seriously. All documents are encrypted both in transit and at rest. We use enterprise-grade security measures and comply with major data protection regulations. Your data is never shared with third parties.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Yes, we offer robust API access and integrations with popular tools and platforms. Our Pro and Enterprise plans include API access, webhooks, and custom integration support to fit seamlessly into your workflow.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide multiple levels of support based on your plan. Free users get community support, Pro users receive priority email support, and Enterprise customers get 24/7 dedicated support with SLA guarantees and training sessions.',
  },
  {
    question: 'Can I try before subscribing?',
    answer: 'Yes! We offer a free trial on our Pro plan so you can experience all the advanced features. You can also start with our Free plan to test the core functionality without any commitment.',
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: any) => {
  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? 'hsl(var(--primary) / 0.1)' : 'hsl(var(--card))' }}
      className={`rounded-xl border border-border/50 overflow-hidden ${
        isOpen ? 'shadow-lg' : ''
      }`}
    >
      <button
        className="flex items-center justify-between w-full p-6 text-left"
        onClick={() => onToggle(index)}
      >
        <span className="text-lg font-semibold">{faq.question}</span>
        <div className={`p-2 rounded-full transition-colors ${
          isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary'
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6">
              <div className="prose prose-sm dark:prose-invert">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Gradient Spotlight */}
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We're here to help. If you can't find what you're looking for,
            feel free to contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </motion.div>

        {/* Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent p-8">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our support team is just a click away
            </p>
            <button className="btn-primary">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
