import React from 'react';
import { Select } from '@/components/ui/select';

const imageStyles = [
  { value: 'realistic', label: 'Realistic' },
  { value: 'artistic', label: 'Artistic' },
  { value: 'cartoon', label: 'Cartoon' },
  { value: 'abstract', label: 'Abstract' },
  { value: '3d', label: '3D Render' },
];

interface ImageStyleSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageStyleSelector({ value, onChange }: ImageStyleSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Image Style</label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {imageStyles.map((style) => (
          <option key={style.value} value={style.value}>
            {style.label}
          </option>
        ))}
      </Select>
    </div>
  );
}