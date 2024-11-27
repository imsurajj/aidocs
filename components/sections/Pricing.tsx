import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 100 pages per month',
      'Basic AI analysis',
      'Standard support',
      'Export to PDF',
      'Single user access',
    ],
    popular: false,
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Ideal for professionals and growing teams',
    features: [
      'Up to 1,000 pages per month',
      'Advanced AI analysis',
      'Priority support',
      'Export to all formats',
      'Team collaboration',
      'API access',
      'Custom branding',
    ],
    popular: true,
    buttonText: 'Get Pro',
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited pages',
      'Enterprise AI features',
      '24/7 dedicated support',
      'Advanced security',
      'Custom integrations',
      'SLA guarantee',
      'Training sessions',
      'Custom deployment',
    ],
    popular: false,
    buttonText: 'Contact Sales',
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

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
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
            Simple,{' '}
            <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs. All plans include core features.
            Upgrade or downgrade at any time.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative rounded-2xl p-0.5 ${
                plan.popular ? 'bg-gradient-to-tr from-primary via-primary/50 to-primary/20' : 'bg-border'
              }`}
            >
              <div className="relative h-full rounded-[0.9rem] bg-card p-8">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="rounded-full p-1 bg-primary/10">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
