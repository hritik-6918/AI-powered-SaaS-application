import React from 'react';
import { Scissors, Volume2, Clock, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoEditorProps {
  videoUrl: string;
  onTrim: () => void;
  onEnhanceAudio: () => void;
  onAdjustSpeed: () => void;
  onApplyEffects: () => void;
}

export function VideoEditor({
  videoUrl,
  onTrim,
  onEnhanceAudio,
  onAdjustSpeed,
  onApplyEffects,
}: VideoEditorProps) {
  return (
    <div className="space-y-6">
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <video
          src={videoUrl}
          controls
          className="w-full h-full"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button
          variant="secondary"
          className="flex flex-col items-center p-4 h-auto bg-gray-700 hover:bg-gray-600 text-gray-100"
          onClick={onTrim}
        >
          <Scissors className="h-6 w-6 mb-2" />
          <span>Trim Video</span>
        </Button>
        
        <Button
          variant="secondary"
          className="flex flex-col items-center p-4 h-auto bg-gray-700 hover:bg-gray-600 text-gray-100"
          onClick={onEnhanceAudio}
        >
          <Volume2 className="h-6 w-6 mb-2" />
          <span>Enhance Audio</span>
        </Button>
        
        <Button
          variant="secondary"
          className="flex flex-col items-center p-4 h-auto bg-gray-700 hover:bg-gray-600 text-gray-100"
          onClick={onAdjustSpeed}
        >
          <Clock className="h-6 w-6 mb-2" />
          <span>Adjust Speed</span>
        </Button>
        
        <Button
          variant="secondary"
          className="flex flex-col items-center p-4 h-auto bg-gray-700 hover:bg-gray-600 text-gray-100"
          onClick={onApplyEffects}
        >
          <Wand2 className="h-6 w-6 mb-2" />
          <span>Apply Effects</span>
        </Button>
      </div>
    </div>
  );
}