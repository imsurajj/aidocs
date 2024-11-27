import { useState } from 'react';
import { motion } from 'framer-motion';
import AuthForm from '@/components/auth/AuthForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const FloatingShape = ({ delay = 0, className = "" }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      x: ["0%", "20%", "0%"],
      y: ["0%", "20%", "0%"],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
  />
);

const AuthPage = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top-left shape */}
          <FloatingShape 
            className="w-[800px] h-[800px] -left-48 -top-48 bg-primary/20" 
          />
          
          {/* Bottom-right shape */}
          <FloatingShape 
            delay={1}
            className="w-[900px] h-[900px] -right-48 -bottom-48 bg-primary/20" 
          />
          
          {/* Center shape */}
          <FloatingShape 
            delay={2}
            className="w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/10" 
          />

          {/* Additional decorative elements */}
          <motion.div
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
          >
            {/* Dots pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808015_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:48px_48px]" />
          </motion.div>

          {/* Animated gradient lines */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] w-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  left: `${i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen">
        {/* Back Button */}
        <div className="container px-4 py-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Auth Container */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === 'signin' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === 'signin' ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-6"
            >
              <h1 className="text-2xl font-bold mb-2">
                {mode === 'signin' ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="text-muted-foreground">
                {mode === 'signin'
                  ? 'Enter your credentials to access your account'
                  : 'Start your journey with PDFCompanion today'}
              </p>
            </motion.div>

            <AuthForm mode={mode} onToggleMode={toggleMode} />
          </div>
        </div>

        {/* Footer */}
        <div className="relative text-center py-6">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our{' '}
            <Link href="#" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
