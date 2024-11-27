import { motion } from 'framer-motion';
import { Search, Brain, MessageSquare, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Semantic Search',
    description: 'Find exactly what you need with AI-powered search that understands context and meaning, not just keywords. Instantly locate information across all your documents.',
    icon: Search,
  },
  {
    title: 'AI Analysis',
    description: 'Get deep insights and patterns from your documents using advanced AI algorithms. Automatically extract key information and relationships with unmatched accuracy.',
    icon: Brain,
  },
  {
    title: 'Natural Interaction',
    description: 'Chat with your documents naturally using conversational AI. Ask questions in plain language and get precise answers drawn directly from your content.',
    icon: MessageSquare,
  },
  {
    title: 'Smart Extraction',
    description: 'Automatically extract and organize key data points like dates, names, and custom fields. Transform unstructured documents into structured, actionable insights.',
    icon: Sparkles,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
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
            Powerful Features for{' '}
            <span className="text-gradient">Smart Document Analysis</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform the way you work with documents using our AI-powered platform.
            Extract insights, find answers, and make better decisions faster than ever.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="h-full p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                <div className="relative z-10">
                  <div className="mb-6 inline-block">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
