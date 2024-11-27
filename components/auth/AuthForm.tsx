import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  onToggleMode: () => void;
}

const AuthForm = ({ mode, onToggleMode }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add authentication logic here
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm bg-card/30 backdrop-blur-md border border-border/50 rounded-sm p-6 shadow-lg relative z-10"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-background/30 backdrop-blur-sm border border-border/50 rounded-sm px-10 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
              required
            />
          </div>
        )}
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-background/30 backdrop-blur-sm border border-border/50 rounded-sm px-10 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-background/30 backdrop-blur-sm border border-border/50 rounded-sm px-10 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full px-4 py-2 text-sm rounded-sm flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border/50 rounded-sm hover:bg-background/50 backdrop-blur-sm transition-colors text-sm">
            <img src="/google.svg" alt="Google" className="w-4 h-4" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border/50 rounded-sm hover:bg-background/50 backdrop-blur-sm transition-colors text-sm">
            <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
            GitHub
          </button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={onToggleMode}
            className="text-primary hover:underline focus:outline-none"
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default AuthForm;
