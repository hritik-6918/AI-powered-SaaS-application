import React from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoUploadProps {
  onFileSelect: (file: File) => void;
  isUploading: boolean;
}

export function VideoUpload({ onFileSelect, isUploading }: VideoUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      onFileSelect(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center bg-gray-900">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
        id="video-upload"
        disabled={isUploading}
      />
      <label htmlFor="video-upload" className="cursor-pointer">
        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Upload Video</h3>
          <p className="text-gray-400 mb-4">Drag and drop or click to select</p>
          <Button 
            variant="secondary" 
            disabled={isUploading}
            className="bg-gray-700 hover:bg-gray-600 text-gray-100"
          >
            {isUploading ? 'Uploading...' : 'Select Video'}
          </Button>
        </div>
      </label>
    </div>
  );
}