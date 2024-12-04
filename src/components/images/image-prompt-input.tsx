import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface ImagePromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export function ImagePromptInput({ value, onChange, onKeyDown }: ImagePromptInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Image Description</label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Describe the image you want to generate..."
        className="h-32"
      />
      <p className="text-sm text-gray-500">
        Be detailed about the subject, style, lighting, and composition you want.
        Press Ctrl + Enter to generate.
      </p>
    </div>
  );
}