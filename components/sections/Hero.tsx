import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Search, FileText, Sparkles, MessageSquare } from 'lucide-react';

const FloatingDocument = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Document Viewer */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-card rounded-xl shadow-2xl border border-border/50 p-6 backdrop-blur-sm"
      >
        {/* Document Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="font-medium">research-paper.pdf</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            <span className="text-sm text-muted-foreground">AI Processing</span>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-3">
          <div className="h-2 bg-muted rounded-full w-full" />
          <div className="h-2 bg-muted rounded-full w-4/5" />
          <div className="h-2 bg-muted rounded-full w-3/4" />
        </div>

        {/* AI Analysis Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -right-4 -bottom-4 bg-card rounded-lg shadow-lg border border-border/50 p-4 max-w-xs"
        >
          <div className="flex items-start gap-2">
            <Sparkles className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="text-sm font-medium mb-1">AI Analysis</p>
              <p className="text-xs text-muted-foreground">
                Found 3 key insights and generated summary from 15 pages
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute -left-4 -top-4 bg-card rounded-lg shadow-lg border border-border/50 p-4"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm">Semantic Search</span>
          </div>
        </motion.div>

        {/* Chat Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-lg shadow-lg p-3"
        >
          <MessageSquare className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-primary via-primary to-primary-foreground" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Transform Documents with{' '}
            <span className="text-gradient">AI-Powered</span> Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Experience the future of document analysis with our advanced AI technology.
            Extract insights, search semantically, and interact naturally with your documents.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/auth"
              className="btn-primary px-4 py-2.5 text-base lg:text-md rounded-sm"
            >
              Get Started Free
            </Link>
            <Link
              href="#pricing"
              className="btn-secondary px-4 py-2.5 text-base lg:text-md rounded-sm border border-border/50"
            >
              Pricing
            </Link>
          </motion.div>
        </div>

        {/* Animated Document Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <FloatingDocument />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
