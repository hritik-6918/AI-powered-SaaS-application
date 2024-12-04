import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-gray-100">Product Demo</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-4">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <video
              className="w-full h-full"
              controls
              poster="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
            >
              <source
                src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 text-gray-400">
            <p>Learn how to use our AI-powered tools to create amazing content:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Generate engaging written content</li>
              <li>Create stunning AI-generated images</li>
              <li>Edit and enhance videos with AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}