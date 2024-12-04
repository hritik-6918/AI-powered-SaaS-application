import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Copy, RotateCw } from 'lucide-react';

interface GeneratedContentProps {
  content: string;
  isLoading: boolean;
  onRegenerate: () => void;
}

export function GeneratedContent({ content, isLoading, onRegenerate }: GeneratedContentProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-100">Generated Content</h3>
        <div className="flex space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={copyToClipboard}
            disabled={!content || isLoading}
            className="bg-gray-700 hover:bg-gray-600 text-gray-100"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onRegenerate}
            disabled={!content || isLoading}
            className="bg-gray-700 hover:bg-gray-600 text-gray-100"
          >
            <RotateCw className="h-4 w-4 mr-2" />
            Regenerate
          </Button>
        </div>
      </div>
      <Textarea
        value={content}
        readOnly
        className="min-h-[300px] bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
        placeholder={isLoading ? "Generating content..." : "Your generated content will appear here..."}
      />
    </div>
  );
}