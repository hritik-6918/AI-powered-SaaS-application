import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
}

export function PromptInput({ value, onChange, onGenerate }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">Prompt</label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe what you want to write about..."
        className="h-32 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
      />
      <p className="text-sm text-gray-400">
        Be specific about your topic, tone, and target audience.
      </p>
    </div>
  );
}