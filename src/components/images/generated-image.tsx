import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, RotateCw } from 'lucide-react';

interface GeneratedImageProps {
  imageUrl: string;
  isLoading: boolean;
  onRegenerate: () => void;
}

export function GeneratedImage({ imageUrl, isLoading, onRegenerate }: GeneratedImageProps) {
  const [loadError, setLoadError] = React.useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageError = () => {
    setLoadError(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Generated Image</h3>
        <div className="flex space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDownload}
            disabled={!imageUrl || isLoading || loadError}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onRegenerate}
            disabled={isLoading}
          >
            <RotateCw className="h-4 w-4 mr-2" />
            Regenerate
          </Button>
        </div>
      </div>
      
      <div className="relative aspect-square rounded-lg border bg-gray-50 overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : imageUrl && !loadError ? (
          <img
            src={imageUrl}
            alt="Generated"
            className="rounded-lg object-cover w-full h-full transition-opacity duration-300"
            onError={handleImageError}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-center p-4">
            {loadError ? 
              "Failed to load the image. Please try regenerating." : 
              "Your generated image will appear here"}
          </div>
        )}
      </div>
    </div>
  );
}