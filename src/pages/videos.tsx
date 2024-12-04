import React, { useState } from 'react';
import { VideoUpload } from '@/components/video/video-upload';
import { VideoEditor } from '@/components/video/video-editor';
import { useVideoEditing } from '@/lib/api';

export function VideosPage() {
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const { videoUrl, isProcessing, error, processVideo } = useVideoEditing();

  const handleFileSelect = (file: File) => {
    setIsUploading(true);
    // Create a local URL for the uploaded video
    const url = URL.createObjectURL(file);
    setUploadedVideoUrl(url);
    setIsUploading(false);
  };

  const handleTrim = () => {
    processVideo({ videoUrl: uploadedVideoUrl, action: 'trim' });
  };

  const handleEnhanceAudio = () => {
    processVideo({ videoUrl: uploadedVideoUrl, action: 'enhance-audio' });
  };

  const handleAdjustSpeed = () => {
    processVideo({ videoUrl: uploadedVideoUrl, action: 'adjust-speed' });
  };

  const handleApplyEffects = () => {
    processVideo({ videoUrl: uploadedVideoUrl, action: 'apply-effects' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-100">AI Video Editor</h1>
          <p className="text-gray-400">
            Enhance your videos with AI-powered editing tools and effects.
          </p>
        </div>

        <div className="space-y-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          {!uploadedVideoUrl ? (
            <VideoUpload
              onFileSelect={handleFileSelect}
              isUploading={isUploading}
            />
          ) : (
            <VideoEditor
              videoUrl={videoUrl || uploadedVideoUrl}
              onTrim={handleTrim}
              onEnhanceAudio={handleEnhanceAudio}
              onAdjustSpeed={handleAdjustSpeed}
              onApplyEffects={handleApplyEffects}
            />
          )}

          {error && (
            <p className="mt-2 text-sm text-red-400">{error}</p>
          )}

          {isProcessing && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-sm text-gray-400">Processing video...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}