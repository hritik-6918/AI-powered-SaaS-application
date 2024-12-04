import React, { useState } from 'react';
import { ContentTypeSelector } from '@/components/write/content-type-selector';
import { PromptInput } from '@/components/write/prompt-input';
import { GeneratedContent } from '@/components/write/generated-content';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { useContentGeneration } from '@/lib/api';

export function WritePage() {
  const [contentType, setContentType] = useState('blog-post');
  const [prompt, setPrompt] = useState('');
  const { content, isLoading, error, generate } = useContentGeneration();

  const handleGenerate = async () => {
    await generate({ contentType, prompt });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-100">AI Writing Assistant</h1>
          <p className="text-gray-400">
            Generate high-quality content for your needs using our AI writing assistant.
          </p>
        </div>

        <div className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <ContentTypeSelector value={contentType} onChange={setContentType} />
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onGenerate={handleGenerate}
          />
          
          <div>
            <Button
              onClick={handleGenerate}
              disabled={!prompt || isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Wand2 className="h-5 w-5 mr-2" />
              {isLoading ? 'Generating...' : 'Generate Content'}
            </Button>
            {error && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>

          {(content || isLoading) && (
            <GeneratedContent
              content={content}
              isLoading={isLoading}
              onRegenerate={handleGenerate}
            />
          )}
        </div>
      </div>
    </div>
  );
}