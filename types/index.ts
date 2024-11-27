import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface Feature {
  name: string;
  description: string;
  icon: ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface LayoutProps {
  children: ReactNode;
}

export interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}
