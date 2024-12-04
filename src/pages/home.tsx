import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Shield, Users } from 'lucide-react';
import { DemoModal } from '@/components/demo/demo-modal';

export function HomePage() {
  const navigate = useNavigate();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleFeatureClick = (feature: string) => {
    switch (feature) {
      case 'write':
        navigate('/write');
        break;
      case 'images':
        navigate('/images');
        break;
      case 'videos':
        navigate('/videos');
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tight mb-6 text-gray-100">
                Create Amazing Content with AI
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Streamline your content creation process with our AI-powered tools for writing, image generation, and video editing.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" onClick={() => navigate('/write')} className="bg-blue-600 hover:bg-blue-700">
                  Start Creating
                </Button>
                <Button 
                  size="lg" 
                  onClick={() => setIsDemoOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div 
                className="text-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleFeatureClick('write')}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">AI-Powered Writing</h3>
                <p className="text-gray-400">Generate engaging content with our advanced AI writing assistant.</p>
              </div>
              <div 
                className="text-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleFeatureClick('images')}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">Smart Image Generation</h3>
                <p className="text-gray-400">Create stunning visuals from text descriptions in seconds.</p>
              </div>
              <div 
                className="text-center cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleFeatureClick('videos')}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">Video Enhancement</h3>
                <p className="text-gray-400">Edit and enhance videos with AI-powered tools and effects.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}