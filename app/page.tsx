'use client';

import { Brain, Video, Sparkles, Users, Leaf, Flower2 } from 'lucide-react';
import { Navigation } from '@/components/ui/navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F2337] text-white overflow-hidden">
      <Navigation />
      
      {/* Enhanced Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#178582]/30 blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#178582]/25 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-[#178582]/30 blur-3xl animate-float" />
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#178582]/25 blur-3xl animate-float-delayed" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 container mx-auto max-w-6xl">
        <div className="text-center space-y-8 relative z-10">
          <div className="flex justify-center mb-8">
            <Flower2 className="h-16 w-16 text-[#20B2AA] animate-bounce-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-tight bg-gradient-to-r from-[#20B2AA] via-[#40E0D0] to-white bg-clip-text text-transparent animate-fade-in">
            Transform Your Expertise into Engaging Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Where knowledge blooms into podcasts, videos, and interactive media
          </p>
        </div>
      </section>

      {/* Nature-Inspired Divider */}
      <div className="relative py-16">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#20B2AA] to-transparent" />
        </div>
        <div className="relative flex justify-center gap-8">
          <Leaf className="h-8 w-8 text-[#20B2AA] animate-float" />
          <Leaf className="h-8 w-8 text-[#40E0D0] rotate-45 animate-float-delayed" />
          <Leaf className="h-8 w-8 text-[#20B2AA] rotate-90 animate-float" />
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-[#20B2AA]" />}
              title="Knowledge Capture"
              description="Transform your expertise into structured content with our AI-powered knowledge extraction system"
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-[#40E0D0]" />}
              title="AI Enhancement"
              description="Our AI refines and enhances your content, ensuring engaging and professional delivery across all media formats"
            />
            <FeatureCard
              icon={<Video className="h-8 w-8 text-[#20B2AA]" />}
              title="Multimedia Creation"
              description="Generate professional podcasts, videos, and interactive content from your enhanced material"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-[#40E0D0]" />}
              title="Community Insights"
              description="Connect with diverse creators who help expand your perspective and enrich your content through collaborative dialogue"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#20B2AA]/30">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-300">© 2024 PodYar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 hover:bg-[#20B2AA]/10 transition-colors border border-[#20B2AA]/20 group hover:border-[#20B2AA]/40">
      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-white/5 w-fit group-hover:bg-white/10 transition-colors">{icon}</div>
        <h3 className="text-xl font-semibold group-hover:text-[#20B2AA] transition-colors">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}