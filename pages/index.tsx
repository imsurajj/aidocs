import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/sections/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PDFCompanion - AI-Powered Document Analysis</title>
        <meta
          name="description"
          content="Transform the way you interact with documents using our advanced AI technology. Get instant answers and insights from your PDFs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Home;
