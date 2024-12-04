import React from 'react';
import { Select } from '@/components/ui/select';

const imageSizes = [
  { value: '256x256', label: 'Small (256x256)' },
  { value: '512x512', label: 'Medium (512x512)' },
  { value: '1024x1024', label: 'Large (1024x1024)' },
  { value: '1024x1792', label: 'Portrait (1024x1792)' },
  { value: '1792x1024', label: 'Landscape (1792x1024)' },
];

interface ImageSizeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageSizeSelector({ value, onChange }: ImageSizeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Image Size</label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {imageSizes.map((size) => (
          <option key={size.value} value={size.value}>
            {size.label}
          </option>
        ))}
      </Select>
    </div>
  );
}