import React from 'react';
import { Select } from '@/components/ui/select';

const contentTypes = [
  { value: 'blog-post', label: 'Blog Post' },
  { value: 'social-media', label: 'Social Media Post' },
  { value: 'email', label: 'Email' },
  { value: 'product-description', label: 'Product Description' },
  { value: 'ad-copy', label: 'Ad Copy' },
];

interface ContentTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ContentTypeSelector({ value, onChange }: ContentTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">Content Type</label>
      <Select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-700 border-gray-600 text-gray-100"
      >
        {contentTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </Select>
    </div>
  );
}