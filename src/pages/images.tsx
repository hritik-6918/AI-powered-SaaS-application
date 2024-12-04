import React, { useState } from 'react';
import { ImagePromptInput } from '@/components/images/image-prompt-input';
import { ImageStyleSelector } from '@/components/images/image-style-selector';
import { ImageSizeSelector } from '@/components/images/image-size-selector';
import { GeneratedImage } from '@/components/images/generated-image';
import { Button } from '@/components/ui/button';
import { ImagePlus } from 'lucide-react';
import { useImageGeneration } from '@/lib/api';

export function ImagesPage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [size, setSize] = useState('1024x1024');
  const { imageUrl, isLoading, error, generate } = useImageGeneration();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      return;
    }
    await generate({ prompt, style, size });
  };

  const handlePromptKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleGenerate();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-100">AI Image Generator</h1>
          <p className="text-gray-400">
            Transform your ideas into stunning visuals with our AI image generation tool.
          </p>
        </div>

        <div className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <div className="grid md:grid-cols-2 gap-6">
            <ImagePromptInput 
              value={prompt}
              onChange={setPrompt}
              onKeyDown={handlePromptKeyDown}
            />
            <div className="space-y-6">
              <ImageStyleSelector value={style} onChange={setStyle} />
              <ImageSizeSelector value={size} onChange={setSize} />
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <ImagePlus className="h-5 w-5 mr-2" />
            {isLoading ? 'Generating...' : 'Generate Image'}
          </Button>
          
          {error && (
            <p className="mt-2 text-sm text-red-400">{error}</p>
          )}

          {(imageUrl || isLoading) && (
            <GeneratedImage
              imageUrl={imageUrl}
              isLoading={isLoading}
              onRegenerate={handleGenerate}
            />
          )}
        </div>
      </div>
    </div>
  );
}